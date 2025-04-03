const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Crowdfunding", function () {
    let Crowdfunding, crowdfunding, owner, addr1, addr2;
    const goal = ethers.parseEther("10"); // 10 ETH goal
    const duration = 604800; // 7 days in seconds

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();
        Crowdfunding = await ethers.getContractFactory("Crowdfunding");
        crowdfunding = await Crowdfunding.deploy(goal, duration);
        await crowdfunding.waitForDeployment();
    });

    it("Should deploy with correct owner, goal, and deadline", async function () {
        expect(await crowdfunding.owner()).to.equal(owner.address);
        expect(await crowdfunding.goal()).to.equal(goal);
        expect(await crowdfunding.deadline()).to.be.greaterThan(0);
    });

    it("Should accept contributions", async function () {
        await crowdfunding.connect(addr1).contribute({ value: ethers.parseEther("2") });
        expect(await crowdfunding.contributions(addr1.address)).to.equal(ethers.parseEther("2"));
        expect(await crowdfunding.totalFunds()).to.equal(ethers.parseEther("2"));
    });

    it("Should emit Funded event on contribution", async function () {
        await expect(crowdfunding.connect(addr1).contribute({ value: ethers.parseEther("1") }))
            .to.emit(crowdfunding, "Funded")
            .withArgs(addr1.address, ethers.parseEther("1"));
    });

    it("Should not allow contributions after deadline", async function () {
        await ethers.provider.send("evm_increaseTime", [duration + 1]); // Move time forward
        await ethers.provider.send("evm_mine"); // Mine a new block
        await expect(crowdfunding.connect(addr1).contribute({ value: ethers.parseEther("1") }))
            .to.be.revertedWith("Funding period over");
    });

    it("Should allow owner to withdraw if goal is met", async function () {
        await crowdfunding.connect(addr1).contribute({ value: goal });
        await expect(crowdfunding.connect(owner).withdrawFunds()).to.changeEtherBalances(
            [owner, crowdfunding], 
            [goal, -goal]
        );
    });

    it("Should not allow withdrawal if goal is not met", async function () {
        await crowdfunding.connect(addr1).contribute({ value: ethers.parseEther("5") }); // 5 ETH (less than goal)
        await expect(crowdfunding.connect(owner).withdrawFunds()).to.be.revertedWith("Goal not reached yet");
    });

    it("Should allow refunds if goal is not met after deadline", async function () {
        await crowdfunding.connect(addr1).contribute({ value: ethers.parseEther("3") });
        await ethers.provider.send("evm_increaseTime", [duration + 1]);
        await ethers.provider.send("evm_mine");
        
        await expect(crowdfunding.connect(addr1).refund()).to.changeEtherBalances(
            [addr1, crowdfunding],
            [ethers.parseEther("3"), -ethers.parseEther("3")]
        );
    });

    it("Should not allow refunds if goal is met", async function () {
        await crowdfunding.connect(addr1).contribute({ value: goal });
        await ethers.provider.send("evm_increaseTime", [duration + 1]);
        await ethers.provider.send("evm_mine");

        await expect(crowdfunding.connect(addr1).refund()).to.be.revertedWith("Goal was met, no refunds");
    });

    it("Should not allow non-contributors to request a refund", async function () {
        await ethers.provider.send("evm_increaseTime", [duration + 1]);
        await ethers.provider.send("evm_mine");

        await expect(crowdfunding.connect(addr1).refund()).to.be.revertedWith("No funds to refund");
    });
});
