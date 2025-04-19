const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ReputationSystem", function () {
  let reputation, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const ReputationSystem = await ethers.getContractFactory("ReputationSystem");
    reputation = await ReputationSystem.deploy();
    await reputation.deployed();
  });

  it("Should increase reputation correctly", async function () {
    await reputation.increaseReputation(addr1.address, 10);
    expect(await reputation.getReputation(addr1.address)).to.equal(10);
  });

  it("Should decrease reputation correctly", async function () {
    await reputation.increaseReputation(addr1.address, 20);
    await reputation.decreaseReputation(addr1.address, 5);
    expect(await reputation.getReputation(addr1.address)).to.equal(15);
  });

  it("Should emit event on reputation update", async function () {
    await expect(reputation.increaseReputation(addr1.address, 30))
      .to.emit(reputation, "ReputationUpdated")
      .withArgs(addr1.address, 30);
  });
});
