const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FlashLoan", function () {
  let flashLoan, token, owner, borrower;
  beforeEach(async function () {
    [owner, borrower] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("MockToken");
    token = await Token.deploy("Mock Token", "MTK", 1000000);
    await token.deployed();

    const FlashLoan = await ethers.getContractFactory("FlashLoan");
    flashLoan = await FlashLoan.deploy(token.address);
    await flashLoan.deployed();
  });

  it("should allow liquidity deposits", async function () {
    await token.approve(flashLoan.address, 1000);
    await flashLoan.depositLiquidity(1000);
    expect(await token.balanceOf(flashLoan.address)).to.equal(1000);
  });
});