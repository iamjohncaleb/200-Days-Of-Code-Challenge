const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TokenVesting", function () {
    let Token, Vesting, token, vesting, owner, beneficiary;
    const totalSupply = ethers.utils.parseEther("1000");
    const duration = 365 * 24 * 60 * 60; // 1 year in seconds

    beforeEach(async function () {
        [owner, beneficiary] = await ethers.getSigners();
        Token = await ethers.getContractFactory("MockERC20");
        token = await Token.deploy("TestToken", "TTK", totalSupply);
        await token.deployed();

        Vesting = await ethers.getContractFactory("TokenVesting");
        vesting = await Vesting.deploy(token.address, beneficiary.address, duration);
        await vesting.deployed();

        await token.transfer(vesting.address, totalSupply);
    });

    it("Should set correct vesting parameters", async function () {
        expect(await vesting.token()).to.equal(token.address);
        expect(await vesting.beneficiary()).to.equal(beneficiary.address);
    });

    it("Should release tokens correctly over time", async function () {
        await ethers.provider.send("evm_increaseTime", [duration / 2]); // Advance time by half the duration
        await ethers.provider.send("evm_mine");

        await vesting.connect(beneficiary).release();
        const balance = await token.balanceOf(beneficiary.address);
        expect(balance).to.be.closeTo(totalSupply.div(2), ethers.utils.parseEther("1"));
    });

    it("Should release all tokens after full duration", async function () {
        await ethers.provider.send("evm_increaseTime", [duration]); // Advance time to full vesting period
        await ethers.provider.send("evm_mine");

        await vesting.connect(beneficiary).release();
        const balance = await token.balanceOf(beneficiary.address);
        expect(balance).to.equal(totalSupply);
    });
});
