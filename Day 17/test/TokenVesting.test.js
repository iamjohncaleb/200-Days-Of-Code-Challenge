const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TokenVesting", function () {
  let tokenVesting, token, owner, beneficiary;
  beforeEach(async function () {
    [owner, beneficiary] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("MockToken");
    token = await Token.deploy("Vesting Token", "VTK", 1000000);
    await token.deployed();

    const TokenVesting = await ethers.getContractFactory("TokenVesting");
    tokenVesting = await TokenVesting.deploy(token.address, beneficiary.address, 1700000000, 1705000000, 1000);
    await tokenVesting.deployed();
  });

  it("should not release tokens before release time", async function () {
    await expect(tokenVesting.release()).to.be.revertedWith("Tokens are locked");
  });
});