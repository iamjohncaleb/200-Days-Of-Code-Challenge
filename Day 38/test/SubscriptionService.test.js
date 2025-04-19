const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SubscriptionService", function () {
  let subscriptionService, owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const SubscriptionService = await ethers.getContractFactory("SubscriptionService");
    subscriptionService = await SubscriptionService.deploy();
    await subscriptionService.deployed();
  });

  it("Should allow users to subscribe", async function () {
    await expect(subscriptionService.connect(addr1).subscribe({ value: ethers.utils.parseEther("0.05") }))
      .to.emit(subscriptionService, "Subscribed")
      .withArgs(addr1.address, await subscriptionService.subscriptions(addr1.address));
  });

  it("Should prevent incorrect subscription fee", async function () {
    await expect(subscriptionService.connect(addr1).subscribe({ value: ethers.utils.parseEther("0.04") }))
      .to.be.revertedWith("Incorrect amount");
  });

  it("Should check subscription status correctly", async function () {
    await subscriptionService.connect(addr1).subscribe({ value: ethers.utils.parseEther("0.05") });
    expect(await subscriptionService.checkSubscription(addr1.address)).to.equal(true);
  });

  it("Should not allow expired subscription", async function () {
    await subscriptionService.connect(addr1).subscribe({ value: ethers.utils.parseEther("0.05") });
    // Simulate passing of time and check subscription status
    await hre.network.provider.send("evm_increaseTime", [31 * 24 * 60 * 60]);  // 31 days
    await hre.network.provider.send("evm_mine");
    expect(await subscriptionService.checkSubscription(addr1.address)).to.equal(false);
  });
});
