const { expect } = require("chai");

describe("SecureIdentity", function () {
  let contract, owner, user1;

  beforeEach(async () => {
    [owner, user1] = await ethers.getSigners();
    const SecureIdentity = await ethers.getContractFactory("SecureIdentity");
    contract = await SecureIdentity.deploy();
    await contract.deployed();
  });

  it("should allow a user to register identity", async function () {
    await contract.connect(user1).registerIdentity("Daniella", "NIN12345");
    const identity = await contract.identities(user1.address);
    expect(identity.name).to.equal("Daniella");
    expect(identity.nationalId).to.equal("NIN12345");
    expect(identity.verified).to.equal(false);
  });

  it("should allow admin to verify identity", async function () {
    await contract.connect(user1).registerIdentity("Daniella", "NIN12345");
    await contract.verifyIdentity(user1.address);
    expect(await contract.isVerified(user1.address)).to.equal(true);
  });

  it("should reject verification by non-admin", async function () {
    await expect(contract.connect(user1).verifyIdentity(user1.address)).to.be.revertedWith("Only admin can call this");
  });
});
