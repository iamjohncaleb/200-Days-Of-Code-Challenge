const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LiquidityPool", function () {
  let liquidityPool, tokenA, tokenB, owner, user;
  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("MockToken");
    tokenA = await Token.deploy("Token A", "TKA", 1000000);
    tokenB = await Token.deploy("Token B", "TKB", 1000000);
    await tokenA.deployed();
    await tokenB.deployed();

    const LiquidityPool = await ethers.getContractFactory("LiquidityPool");
    liquidityPool = await LiquidityPool.deploy(tokenA.address, tokenB.address);
    await liquidityPool.deployed();
  });

  it("should allow adding liquidity", async function () {
    await tokenA.approve(liquidityPool.address, 1000);
    await tokenB.approve(liquidityPool.address, 1000);
    await liquidityPool.addLiquidity(1000, 1000);
    expect(await tokenA.balanceOf(liquidityPool.address)).to.equal(1000);
    expect(await tokenB.balanceOf(liquidityPool.address)).to.equal(1000);
  });
});