const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Airdrop Contract", function () {
  let token, airdrop, owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("MockToken");
    token = await Token.deploy();
    await token.deployed();

    const Airdrop = await ethers.getContractFactory("Airdrop");
    airdrop = await Airdrop.deploy(token.address);
    await airdrop.deployed();

    await token.transfer(airdrop.address, ethers.utils.parseEther("1000"));
  });

  it("Should distribute tokens to recipients", async function () {
    const recipients = [addr1.address, addr2.address];
    const amounts = [
      ethers.utils.parseEther("10"),
      ethers.utils.parseEther("20")
    ];

    await airdrop.distribute(recipients, amounts);

    expect(await token.balanceOf(addr1.address)).to.equal(amounts[0]);
    expect(await token.balanceOf(addr2.address)).to.equal(amounts[1]);
  });

  it("Should fail with mismatched arrays", async function () {
    await expect(
      airdrop.distribute(
        [addr1.address],
        [ethers.utils.parseEther("10"), ethers.utils.parseEther("20")]
      )
    ).to.be.revertedWith("Mismatched arrays");
  });
});
