const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FarmCoopVoting Contract", function () {
  let FarmCoopVoting;
  let farmCoopVoting;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    FarmCoopVoting = await ethers.getContractFactory("FarmCoopVoting");
    farmCoopVoting = await FarmCoopVoting.deploy(["Buy equipment", "Hire workers", "Expand land"]);
    await farmCoopVoting.deployed();
  });

  it("Should deploy the contract and initialize proposals", async function () {
    const proposalCount = await farmCoopVoting.proposalCount();
    expect(proposalCount).to.equal(3);

    const proposal0 = await farmCoopVoting.getProposal(0);
    expect(proposal0.description).to.equal("Buy equipment");
  });

  it("Should allow a member to vote", async function () {
    await farmCoopVoting.addMember(addr1.address);

    await farmCoopVoting.connect(addr1).vote(0);

    const proposal0 = await farmCoopVoting.getProposal(0);
    expect(proposal0.voteCount).to.equal(1);
  });

  it("Should not allow double voting", async function () {
    await farmCoopVoting.addMember(addr1.address);

    await farmCoopVoting.connect(addr1).vote(0);

    await expect(farmCoopVoting.connect(addr1).vote(1))
      .to.be.revertedWith("Already voted");
  });

  it("Should only allow chairperson to add members", async function () {
    await expect(farmCoopVoting.connect(addr1).addMember(addr2.address))
      .to.be.revertedWith("Only chairperson allowed");
  });
});
