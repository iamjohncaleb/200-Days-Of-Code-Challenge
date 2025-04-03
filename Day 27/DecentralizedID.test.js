const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DecentralizedID", function () {
  let decentralizedID, owner;
  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    const DecentralizedID = await ethers.getContractFactory("DecentralizedID");
    decentralizedID = await DecentralizedID.deploy();
    await decentralizedID.deployed();
  });

  it("should create and retrieve an identity", async function () {
    await decentralizedID.createIdentity("Alice", "alice@example.com", "Metadata");
    const [name, email, metadata] = await decentralizedID.getIdentity(owner.address);
    expect(name).to.equal("Alice");
    expect(email).to.equal("alice@example.com");
    expect(metadata).to.equal("Metadata");
  });
});