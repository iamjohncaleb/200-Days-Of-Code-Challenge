const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TimeLock", function () {
  let timeLock, owner, user;
  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();
    const TimeLock = await ethers.getContractFactory("TimeLock");
    timeLock = await TimeLock.deploy(3600);
    await timeLock.deployed();
  });

  it("should allow deposits and store ETH", async function () {
    await timeLock.deposit({ value: ethers.parseEther("1.0") });
    expect(await ethers.provider.getBalance(timeLock.address)).to.equal(ethers.parseEther("1.0"));
  });
});