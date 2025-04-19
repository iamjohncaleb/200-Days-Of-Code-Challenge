const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TokenBridge", function () {
  let tokenBridge, targetBridge, owner, user;

  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();

    const TargetBridgeMock = await ethers.getContractFactory("TargetBridgeMock");
    targetBridge = await TargetBridgeMock.deploy();
    await targetBridge.deployed();

    const TokenBridge = await ethers.getContractFactory("TokenBridge");
    tokenBridge = await TokenBridge.deploy(targetBridge.address);
    await tokenBridge.deployed();
  });

  it("should lock tokens", async function () {
    await tokenBridge.connect(user).lockTokens(100);
    expect(await tokenBridge.lockedTokens(user.address)).to.equal(100);
  });

  it("should release tokens", async function () {
    await tokenBridge.connect(user).lockTokens(200);
    await tokenBridge.releaseTokens(user.address, 150);
    expect(await tokenBridge.lockedTokens(user.address)).to.equal(50);
    expect(await targetBridge.minted(user.address)).to.equal(150);
  });

  it("should fail if releasing more than locked", async function () {
    await expect(tokenBridge.releaseTokens(user.address, 50)).to.be.revertedWith("Insufficient locked tokens");
  });
});
