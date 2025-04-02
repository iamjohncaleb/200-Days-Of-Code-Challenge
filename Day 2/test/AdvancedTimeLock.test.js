const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AdvancedTimeLock", function () {
  let timeLock, owner;
  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    const AdvancedTimeLock = await ethers.getContractFactory("AdvancedTimeLock");
    timeLock = await AdvancedTimeLock.deploy(Math.floor(Date.now() / 1000) + 3600);
    await timeLock.deployed();
  });

  it("should lock funds until the unlock time", async function () {
    await expect(timeLock.unlock()).to.be.revertedWith("Funds are still locked");
  });
});
