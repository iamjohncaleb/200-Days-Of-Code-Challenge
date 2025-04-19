const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PredictionMarket", function () {
  let predictionMarket, admin, user1, user2;

  beforeEach(async () => {
    [admin, user1, user2] = await ethers.getSigners();

    const PredictionMarket = await ethers.getContractFactory("PredictionMarket");
    predictionMarket = await PredictionMarket.deploy(3600, 1800); // 1hr bet window, 30min result
    await predictionMarket.deployed();
  });

  it("should allow users to place bets", async () => {
    await predictionMarket.connect(user1).placeBet(true, { value: ethers.utils.parseEther("1") });
    const bet = await predictionMarket.bets(user1.address);
    expect(bet.amount).to.equal(ethers.utils.parseEther("1"));
    expect(bet.prediction).to.equal(true);
  });

  it("should reject duplicate bets from same user", async () => {
    await predictionMarket.connect(user1).placeBet(true, { value: ethers.utils.parseEther("1") });
    await expect(
      predictionMarket.connect(user1).placeBet(false, { value: ethers.utils.parseEther("1") })
    ).to.be.revertedWith("Already placed a bet");
  });

  it("should prevent claiming reward before result", async () => {
    await predictionMarket.connect(user1).placeBet(true, { value: ethers.utils.parseEther("1") });
    await expect(
      predictionMarket.connect(user1).claimReward()
    ).to.be.revertedWith("Result not declared yet");
  });
});
