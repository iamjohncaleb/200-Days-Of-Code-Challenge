const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GovernanceToken", function () {
  let token, owner, user1, user2;

  beforeEach(async function () {
    [owner, user1, user2] = await ethers.getSigners();
    const GovernanceToken = await ethers.getContractFactory("GovernanceToken");
    token = await GovernanceToken.deploy();
    await token.deployed();
  });

  it("should assign total supply to owner", async function () {
    const totalSupply = await token.totalSupply();
    const ownerBalance = await token.balances(owner.address);
    expect(ownerBalance).to.equal(totalSupply);
  });

  it("should transfer tokens", async function () {
    await token.transfer(user1.address, 100);
    expect(await token.balances(user1.address)).to.equal(100);
  });

  it("should create a proposal", async function () {
    await token.createProposal("Proposal 1");
    const proposal = await token.proposals(0);
    expect(proposal.description).to.equal("Proposal 1");
  });

  it("should allow voting and count votes by balance", async function () {
    await token.transfer(user1.address, 200);
    await token.createProposal("Proposal 1");

    await token.connect(user1).vote(0);
    const proposal = await token.proposals(0);
    expect(proposal.voteCount).to.equal(200);
  });

  it("should not allow double voting", async function () {
    await token.createProposal("Proposal 1");
    await token.vote(0);
    await expect(token.vote(0)).to.be.revertedWith("Already voted");
  });

  it("should get winning proposal description", async function () {
    await token.createProposal("Proposal 1");
    await token.createProposal("Proposal 2");

    await token.vote(0);
    const winner = await token.getWinningProposal();
    expect(winner).to.equal("Proposal 1");
  });
});
