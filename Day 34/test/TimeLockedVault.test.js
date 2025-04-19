const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TimeLockedVault", function () {
  let vault, owner, user;
  const depositAmount = ethers.utils.parseEther("1");
  const lockDuration = 60; // 60 seconds

  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();

    const Vault = await ethers.getContractFactory("TimeLockedVault");
    vault = await Vault.deploy();
    await vault.deployed();
  });

  it("should accept deposits and set unlock time", async function () {
    await vault.connect(user).deposit(lockDuration, { value: depositAmount });
    const balance = await vault.balances(user.address);
    expect(balance).to.equal(depositAmount);
  });

  it("should prevent withdrawal before unlock time", async function () {
    await vault.connect(user).deposit(lockDuration, { value: depositAmount });
    await expect(vault.connect(user).withdraw()).to.be.revertedWith("Funds are still locked");
  });

  it("should allow withdrawal after unlock time", async function () {
    await vault.connect(user).deposit(lockDuration, { value: depositAmount });
    await ethers.provider.send("evm_increaseTime", [lockDuration]);
    await ethers.provider.send("evm_mine", []);

    await expect(() => vault.connect(user).withdraw())
      .to.changeEtherBalance(user, depositAmount);
  });
});
