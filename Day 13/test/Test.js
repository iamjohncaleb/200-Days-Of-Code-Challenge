const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Crowdfunding", function () {
    let crowdfunding, owner, addr1, addr2;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();
        const Crowdfunding = await ethers.getContractFactory("Crowdfunding");
        crowdfunding = await Crowdfunding.deploy(ethers.utils.parseEther("10"), 604800);
        await crowdfunding.deployed();
    });

    it("Should deploy and set the correct owner", async function () {
        expect(await crowdfunding.owner()).to.equal(owner.address);
    });

    it("Should accept contributions", async function () {
        await crowdfunding.connect(addr1).contribute({ value: ethers.utils.parseEther("1") });
        expect(await crowdfunding.contributions(addr1.address)).to.equal(ethers.utils.parseEther("1"));
    });

    it("Should allow owner to withdraw funds if goal is met", async function () {
        await crowdfunding.connect(addr1).contribute({ value: ethers.utils.parseEther("10") });
        await expect(crowdfunding.connect(owner).withdrawFunds()).to.changeEtherBalances(
            [owner, crowdfunding], [ethers.utils.parseEther("10"), -ethers.utils.parseEther("10")]
        );
    });

    it("Should allow refunds if the goal is not met after the deadline", async function () {
        await crowdfunding.connect(addr1).contribute({ value: ethers.utils.parseEther("5") });
        await ethers.provider.send("evm_increaseTime", [604800]); // Move time forward 7 days
        await ethers.provider.send("evm_mine");
        await expect(crowdfunding.connect(addr1).refund()).to.changeEtherBalances(
            [addr1, crowdfunding], [ethers.utils.parseEther("5"), -ethers.utils.parseEther("5")]
        );
    });
});
