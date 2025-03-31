const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SubscriptionService", function () {
  let subscriptionService, owner, user;
  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();
    const SubscriptionService = await ethers.getContractFactory("SubscriptionService");
    subscriptionService = await SubscriptionService.deploy(ethers.utils.parseEther("0.1"));
    await subscriptionService.deployed();
  });

  it("should allow users to subscribe", async function () {
    await subscriptionService.connect(user).subscribe({ value: ethers.utils.parseEther("0.1") });
    expect(await subscriptionService.checkSubscription(user.address)).to.be.true;
  });

  it("should reject incorrect subscription fee", async function () {
    await expect(subscriptionService.connect(user).subscribe({ value: ethers.utils.parseEther("0.05") }))
      .to.be.revertedWith("Incorrect fee");
  });
});