const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Airdrop", function () {
    let token, airdrop, owner, addr1, addr2;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("ERC20Mock");
        token = await Token.deploy("TestToken", "TTK", 18, ethers.utils.parseEther("1000000"));
        await token.deployed();

        const Airdrop = await ethers.getContractFactory("Airdrop");
        airdrop = await Airdrop.deploy(token.address);
        await airdrop.deployed();

        // Transfer some tokens to the Airdrop contract for distribution
        await token.transfer(airdrop.address, ethers.utils.parseEther("10000"));
    });

    it("Should deploy the contract and set the owner", async function () {
        expect(await airdrop.owner()).to.equal(owner.address);
    });

    it("Should allow only owner to distribute tokens", async function () {
        await expect(
            airdrop.connect(addr1).distributeTokens([addr1.address], ethers.utils.parseEther("10"))
        ).to.be.revertedWith("Not the owner");
    });

    it("Should distribute tokens successfully", async function () {
        await airdrop.distributeTokens([addr1.address, addr2.address], ethers.utils.parseEther("10"));
        expect(await token.balanceOf(addr1.address)).to.equal(ethers.utils.parseEther("10"));
        expect(await token.balanceOf(addr2.address)).to.equal(ethers.utils.parseEther("10"));
    });
});