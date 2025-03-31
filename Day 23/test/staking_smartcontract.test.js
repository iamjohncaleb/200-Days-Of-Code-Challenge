const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StakingSmartContract", function () {
    let StakingContract, staking, owner, user;

    beforeEach(async function () {
        [owner, user] = await ethers.getSigners();
        StakingContract = await ethers.getContractFactory("StakingSmartContract");
        staking = await StakingContract.deploy("TOKEN_ADDRESS", "100000000000000000");
        await staking.deployed();
    });

    it("Should allow users to stake tokens", async function () {
        await staking.connect(user).stake(ethers.utils.parseEther("1"));
        expect(await staking.totalStaked()).to.equal(ethers.utils.parseEther("1"));
    });
});