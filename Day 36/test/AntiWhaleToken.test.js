const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AntiWhaleToken", function () {
  let token, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const AntiWhaleToken = await ethers.getContractFactory("AntiWhaleToken");
    token = await AntiWhaleToken.deploy();
    await token.deployed();
  });

  it("Should assign total supply to deployer", async function () {
    const totalSupply = await token.totalSupply();
    expect(await token.balances(owner.address)).to.equal(totalSupply);
  });

  it("Should transfer within maxTxAmount", async function () {
    const maxTxAmount = await token.maxTxAmount();
    await expect(token.transfer(addr1.address, maxTxAmount))
      .to.emit(token, "Transfer")
      .withArgs(owner.address, addr1.address, maxTxAmount);
  });

  it("Should fail if transfer exceeds maxTxAmount", async function () {
    const maxTxAmount = await token.maxTxAmount();
    await expect(token.transfer(addr1.address, maxTxAmount.add(1))).to.be.revertedWith("Transfer exceeds limit");
  });
});
