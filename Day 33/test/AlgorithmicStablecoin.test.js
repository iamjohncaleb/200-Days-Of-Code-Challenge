const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AlgorithmicStablecoin", function () {
  let stablecoin, owner, oracle, user;

  beforeEach(async function () {
    [owner, oracle, user] = await ethers.getSigners();

    const Stablecoin = await ethers.getContractFactory("AlgorithmicStablecoin");
    stablecoin = await Stablecoin.deploy(1000000, oracle.address);
    await stablecoin.deployed();
  });

  it("should assign total supply to deployer", async function () {
    const supply = await stablecoin.totalSupply();
    const balance = await stablecoin.balances(owner.address);
    expect(balance).to.equal(supply);
  });

  it("should allow transfer of tokens", async function () {
    await stablecoin.transfer(user.address, 1000);
    const balance = await stablecoin.balances(user.address);
    expect(balance).to.equal(1000);
  });

  it("should allow oracle to rebase up", async function () {
    await stablecoin.connect(oracle).rebase(ethers.utils.parseEther("2"));
    const supply = await stablecoin.totalSupply();
    expect(supply).to.be.greaterThan(0);
  });

  it("should revert if non-oracle calls rebase", async function () {
    await expect(stablecoin.rebase(ethers.utils.parseEther("0.5"))).to.be.revertedWith("Only oracle can call this");
  });
});
