const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EnhancedNFT", function () {
    let nftContract, owner, user;
    const maxSupply = 10000;
    const mintPrice = ethers.utils.parseEther("0.05");
    
    beforeEach(async function () {
        [owner, user] = await ethers.getSigners();
        const EnhancedNFT = await ethers.getContractFactory("EnhancedNFT");
        nftContract = await EnhancedNFT.deploy(maxSupply, mintPrice);
        await nftContract.deployed();
    });

    it("Should deploy with correct parameters", async function () {
        expect(await nftContract.maxSupply()).to.equal(maxSupply);
        expect(await nftContract.mintPrice()).to.equal(mintPrice);
    });

    it("Should allow minting when not paused", async function () {
        await nftContract.connect(owner).addToWhitelist(user.address);
        await expect(nftContract.connect(user).mintNFT(user.address, "ipfs://example-metadata", { value: mintPrice }))
            .to.emit(nftContract, "NFTMinted");
    });

    it("Should not allow minting if paused", async function () {
        await nftContract.connect(owner).pauseMinting();
        await expect(nftContract.connect(user).mintNFT(user.address, "ipfs://example-metadata", { value: mintPrice }))
            .to.be.revertedWith("Pausable: paused");
    });

    it("Should allow the owner to withdraw funds", async function () {
        await nftContract.connect(owner).addToWhitelist(user.address);
        await nftContract.connect(user).mintNFT(user.address, "ipfs://example-metadata", { value: mintPrice });
        await expect(nftContract.connect(owner).withdrawFunds()).to.changeEtherBalance(owner, mintPrice);
    });
});