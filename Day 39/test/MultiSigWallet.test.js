const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MultiSigWallet", function () {
  let multiSigWallet, owner, addr1, addr2, addr3;

  beforeEach(async function () {
    [owner, addr1, addr2, addr3] = await ethers.getSigners();
    const MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");
    const requiredApprovals = 2;
    multiSigWallet = await MultiSigWallet.deploy([owner.address, addr1.address, addr2.address], requiredApprovals);
    await multiSigWallet.deployed();
  });

  it("Should create a transaction", async function () {
    await expect(multiSigWallet.createTransaction(addr3.address, ethers.utils.parseEther("1")))
      .to.emit(multiSigWallet, "TransactionCreated")
      .withArgs(0, addr3.address, ethers.utils.parseEther("1"));
  });

  it("Should approve a transaction", async function () {
    await multiSigWallet.createTransaction(addr3.address, ethers.utils.parseEther("1"));
    await expect(multiSigWallet.connect(addr1).approveTransaction(0))
      .to.emit(multiSigWallet, "Approved")
      .withArgs(0, addr1.address);
  });

  it("Should execute a transaction after sufficient approvals", async function () {
    await multiSigWallet.createTransaction(addr3.address, ethers.utils.parseEther("1"));
    await multiSigWallet.connect(addr1).approveTransaction(0);
    await expect(multiSigWallet.connect(addr2).approveTransaction(0))
      .to.emit(multiSigWallet, "Executed")
      .withArgs(0);
  });

  it("Should not execute transaction with insufficient approvals", async function () {
    await multiSigWallet.createTransaction(addr3.address, ethers.utils.parseEther("1"));
    await multiSigWallet.connect(addr1).approveTransaction(0);
    await expect(multiSigWallet.connect(addr3).approveTransaction(0))
      .to.not.emit(multiSigWallet, "Executed");
  });
});
