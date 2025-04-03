const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DecentralizedVoting", function () {
  let decentralizedVoting, owner, voter;
  beforeEach(async function () {
    [owner, voter] = await ethers.getSigners();
    const DecentralizedVoting = await ethers.getContractFactory("DecentralizedVoting");
    decentralizedVoting = await DecentralizedVoting.deploy();
    await decentralizedVoting.deployed();
  });

  it("should allow admin to create proposals", async function () {
    await decentralizedVoting.createProposal("Proposal 1");
    const [description, voteCount] = await decentralizedVoting.getProposal(0);
    expect(description).to.equal("Proposal 1");
    expect(voteCount).to.equal(0);
  });
});