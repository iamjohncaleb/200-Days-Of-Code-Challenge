const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("WarFundCrowdfunding", function () {
    let Crowdfunding, crowdfunding, owner, donor1, donor2;
    const goal = ethers.utils.parseEther("100");
    const duration = 30 * 24 * 60 * 60;

    beforeEach(async function () {
        [owner, donor1, donor2] = await ethers.getSigners();
        Crowdfunding = await ethers.getContractFactory("WarFundCrowdfunding");
        crowdfunding = await Crowdfunding.deploy(goal, duration);
        await crowdfunding.deployed();
    });

    it("Should accept donations and track them correctly", async function () {
        await crowdfunding.connect(donor1).donate({ value: ethers.utils.parseEther("10") });
        await crowdfunding.connect(donor2).donate({ value: ethers.utils.parseEther("20") });

        expect(await crowdfunding.totalFunds()).to.equal(ethers.utils.parseEther("30"));
    });

    it("Should allow refunds if goal is not met", async function () {
        await crowdfunding.connect(donor1).donate({ value: ethers.utils.parseEther("10") });
        await ethers.provider.send("evm_increaseTime", [duration]);
        await ethers.provider.send("evm_mine");
        
        await crowdfunding.connect(donor1).requestRefund();
        expect(await crowdfunding.totalFunds()).to.equal(0);
    });

    it("Should allow fund withdrawal if goal is met", async function () {
        await crowdfunding.connect(donor1).donate({ value: goal });
        await ethers.provider.send("evm_increaseTime", [duration]);
        await ethers.provider.send("evm_mine");
        
        await crowdfunding.withdrawFunds(owner.address);
        expect(await ethers.provider.getBalance(crowdfunding.address)).to.equal(0);
    });
});