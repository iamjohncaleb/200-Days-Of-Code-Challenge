const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleNFT", function () {
    let simpleNFT, owner, addr1;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();
        const SimpleNFT = await ethers.getContractFactory("SimpleNFT");
        simpleNFT = await SimpleNFT.deploy();
        await simpleNFT.deployed();
    });

    it("Should deploy and set the correct owner", async function () {
        expect(await simpleNFT.owner()).to.equal(owner.address);
    });

    it("Should allow owner to mint an NFT", async function () {
        const tokenURI = "ipfs://example-token-uri";
        await expect(simpleNFT.mintNFT(addr1.address, tokenURI))
            .to.emit(simpleNFT, "Transfer")
            .withArgs(ethers.constants.AddressZero, addr1.address, 1);
        expect(await simpleNFT.tokenURI(1)).to.equal(tokenURI);
    });

    it("Should not allow non-owners to mint NFTs", async function () {
        await expect(simpleNFT.connect(addr1).mintNFT(addr1.address, "ipfs://example-token-uri"))
            .to.be.revertedWith("Ownable: caller is not the owner");
    });
});
