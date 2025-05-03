// test/EquipmentLeasing.test.ts
import { expect } from "chai";
import { ethers } from "hardhat";

describe("EquipmentLeasing Contract", function () {
  let leasingContract;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const EquipmentLeasing = await ethers.getContractFactory("EquipmentLeasing");
    leasingContract = await EquipmentLeasing.deploy();
    await leasingContract.deployed();
  });

  it("Should lease equipment to an address", async function () {
    await leasingContract.connect(addr1).leaseEquipment("Tractor", 30, { value: ethers.utils.parseEther("1") });
    const lease = await leasingContract.leases(1);
    expect(lease.lessee).to.equal(addr1.address);
    expect(lease.equipmentName).to.equal("Tractor");
    expect(lease.durationDays).to.equal(30);
    expect(lease.amountPaid).to.equal(ethers.utils.parseEther("1"));
  });

  it("Should terminate lease by the owner", async function () {
    await leasingContract.connect(addr1).leaseEquipment("Excavator", 15, { value: ethers.utils.parseEther("0.5") });
    await leasingContract.terminateLease(1);
    const lease = await leasingContract.leases(1);
    expect(lease.active).to.equal(false);
  });

  it("Should allow the owner to withdraw contract balance", async function () {
    await leasingContract.connect(addr1).leaseEquipment("Backhoe", 60, { value: ethers.utils.parseEther("2") });
    const initialBalance = await ethers.provider.getBalance(owner.address);
    await leasingContract.withdraw();
    const finalBalance = await ethers.provider.getBalance(owner.address);
    expect(finalBalance).to.be.above(initialBalance);
  });
});
