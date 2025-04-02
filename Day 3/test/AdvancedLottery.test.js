const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AdvancedLottery", function () {
  let lottery, owner, player1, player2;
  beforeEach(async function () {
    [owner, player1, player2] = await ethers.getSigners();
    const AdvancedLottery = await ethers.getContractFactory("AdvancedLottery");
    lottery = await AdvancedLottery.deploy();
    await lottery.deployed();
  });

  it("should allow a player to enter", async function () {
    await lottery.connect(player1).enter({ value: ethers.utils.parseEther("0.1") });
    expect(await lottery.getPlayers()).to.include(player1.address);
  });
});