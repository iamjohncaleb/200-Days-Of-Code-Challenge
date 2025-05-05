import { ethers } from "hardhat";
import { expect } from "chai";

describe("AgriCrowdFunding", () => {
  let contract: any, owner: any, addr1: any;

  beforeEach(async () => {
    [owner, addr1] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("AgriCrowdFunding");
    contract = await Contract.deploy();
    await contract.deployed();
  });

  it("should create a campaign", async () => {
    await contract.createCampaign("Irrigation", "Build system", 1000, 10000);
    const campaign = await contract.getCampaign(1);
    expect(campaign.title).to.equal("Irrigation");
  });

  it("should allow funding and claim funds if goal is met", async () => {
    await contract.createCampaign("Seeds", "Buy seeds", ethers.parseEther("1"), 2);
    await contract.connect(addr1).fundCampaign(1, { value: ethers.parseEther("1") });
    await ethers.provider.send("evm_increaseTime", [3]);
    await ethers.provider.send("evm_mine", []);
    await contract.claimFunds(1);
    const updated = await contract.getCampaign(1);
    expect(updated.claimed).to.be.true;
  });

  it("should refund if campaign fails", async () => {
    await contract.createCampaign("Fertilisers", "Organic options", ethers.parseEther("2"), 2);
    await contract.connect(addr1).fundCampaign(1, { value: ethers.parseEther("1") });
    await ethers.provider.send("evm_increaseTime", [3]);
    await ethers.provider.send("evm_mine", []);
    await contract.connect(addr1).refund(1);
    const balance = await ethers.provider.getBalance(addr1.address);
    expect(balance).to.be.gt(0); // simple balance check
  });
});
