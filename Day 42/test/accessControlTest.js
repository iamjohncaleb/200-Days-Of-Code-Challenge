const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ClassifiedDocumentAccessControl", function () {
  let AccessControl, accessControl, owner, user;

  beforeEach(async () => {
    [owner, user] = await ethers.getSigners();
    AccessControl = await ethers.getContractFactory("ClassifiedDocumentAccessControl");
    accessControl = await AccessControl.deploy();
    await accessControl.deployed();
  });

  it("should allow admin to add and view document for authorized users", async function () {
    await accessControl.addDocument(1, "Top Secret File");

    await expect(accessControl.connect(user).viewDocument(1))
      .to.be.revertedWith("Not authorized");

    await accessControl.grantAccess(user.address);
    const content = await accessControl.connect(user).viewDocument(1);
    expect(content).to.equal("Top Secret File");
  });

  it("should allow admin to revoke access", async function () {
    await accessControl.grantAccess(user.address);
    await accessControl.revokeAccess(user.address);

    await expect(accessControl.connect(user).viewDocument(1))
      .to.be.revertedWith("Not authorized");
  });
});
