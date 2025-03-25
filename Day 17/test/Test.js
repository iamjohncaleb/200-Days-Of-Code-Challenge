const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TokenVesting", function () {
    let vesting, token, owner, beneficiary;
    const amount = ethers.utils.parseEther("100");
    const duration = 60 * 60 * 24 * 30; // 30 days in seconds
    
    beforeEach(async function () {
        [owner, beneficiary] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("MockERC20"); // Assume MockERC20 for testing
        token = await Token.deploy("TestToken", "TTK", amount.mul(2));
        await token.deployed();
        
        const startTime = Math.floor(Date.now() / 1000);
        const releaseTime = startTime + duration;
        
        const TokenVesting = await ethers.getContractFactory("TokenVesting");
        vesting = await TokenVesting.deploy(token.address, beneficiary.address, startTime, releaseTime, amount);
        await vesting.deployed();
        
        await token.transfer(vesting.address, amount);
    });

    it("Should deploy and set the correct parameters", async function () {
        expect(await vesting.token()).to.equal(token.address);
        expect(await vesting.beneficiary()).to.equal(beneficiary.address);
    });

    it("Should not allow release before release time", async function () {
        await expect(vesting.connect(beneficiary).release()).to.be.revertedWith("Tokens are locked");
    });

    it("Should allow beneficiary to release tokens after release time", async function () {
        await ethers.provider.send("evm_increaseTime", [duration]);
        await ethers.provider.send("evm_mine");
        await expect(vesting.connect(beneficiary).release())
            .to.emit(token, "Transfer")
            .withArgs(vesting.address, beneficiary.address, amount);
        expect(await token.balanceOf(beneficiary.address)).to.equal(amount);
    });
});