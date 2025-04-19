const { expect } = require("chai");

describe("BorderPermitToken", function () {
  let Token, token, owner, addr1;

  beforeEach(async () => {
    Token = await ethers.getContractFactory("BorderPermitToken");
    [owner, addr1] = await ethers.getSigners();
    token = await Token.deploy();
    await token.deployed();
  });

  it("should issue permit to user", async function () {
    await token.issuePermit(addr1.address);
    expect(await token.hasPermit(addr1.address)).to.equal(true);
    expect(await token.totalSupply()).to.equal(1);
  });

  it("should revoke permit", async function () {
    await token.issuePermit(addr1.address);
    await token.revokePermit(addr1.address);
    expect(await token.hasPermit(addr1.address)).to.equal(false);
    expect(await token.totalSupply()).to.equal(0);
  });
});
