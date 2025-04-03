const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AdvancedEscrow", function () {
  let escrow, owner, payee, arbiter;
  beforeEach(async function () {
    [owner, payee, arbiter] = await ethers.getSigners();
    const AdvancedEscrow = await ethers.getContractFactory("AdvancedEscrow");
    escrow = await AdvancedEscrow.deploy(payee.address, arbiter.address, { value: ethers.utils.parseEther("1") });
    await escrow.deployed();
  });

  it("should store correct values", async function () {
    expect(await escrow.payer()).to.equal(owner.address);
    expect(await escrow.payee()).to.equal(payee.address);
    expect(await escrow.arbiter()).to.equal(arbiter.address);
    expect(await escrow.amount()).to.equal(ethers.utils.parseEther("1"));
  });

  it("should allow the arbiter to release funds", async function () {
    await escrow.connect(arbiter).releaseFunds();
    expect(await ethers.provider.getBalance(escrow.address)).to.equal(0);
  });
});