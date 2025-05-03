import { expect } from "chai";
import { ethers } from "hardhat";

describe("CarbonCreditTrading", function () {
  let contract: any;
  let verifier: any;
  let issuer: any;
  let buyer: any;

  beforeEach(async () => {
    [verifier, issuer, buyer] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("CarbonCreditTrading", verifier);
    contract = await Contract.deploy();
    await contract.deployed();
  });

  it("should issue and verify a credit", async function () {
    await contract.connect(issuer).issueCredit(1000);
    await contract.verifyCredit(1);
    const credit = await contract.getCredit(1);
    expect(credit.verified).to.equal(true);
  });

  it("should allow issuer to trade verified credit", async function () {
    await contract.connect(issuer).issueCredit(2000);
    await contract.verifyCredit(1);
    await contract.connect(issuer).tradeCredit(1, buyer.address);
    const credit = await contract.getCredit(1);
    expect(credit.issuer).to.equal(buyer.address);
    expect(credit.traded).to.equal(true);
  });
});
