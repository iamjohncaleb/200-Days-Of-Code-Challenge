const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SatelliteImageryAccessNFT", function () {
    let nft, owner, addr1;
    const price = ethers.utils.parseEther("0.1");

    beforeEach(async () => {
        [owner, addr1] = await ethers.getSigners();
        const SatelliteImageryAccessNFT = await ethers.getContractFactory("SatelliteImageryAccessNFT");
        nft = await SatelliteImageryAccessNFT.deploy("https://api.satelliteimages.com/metadata/");
        await nft.deployed();
    });

    it("should deploy and set base URI correctly", async function () {
        const baseURI = await nft.baseURI();
        expect(baseURI).to.equal("https://api.satelliteimages.com/metadata/");
    });

    it("should allow minting of NFTs", async function () {
        await nft.connect(addr1).mintNFT(addr1.address, "image1.json", { value: price });
        const tokenURI = await nft.tokenURI(0);
        expect(tokenURI).to.equal("https://api.satelliteimages.com/metadata/image1.json");
    });

    it("should emit Minted event on NFT minting", async function () {
        await expect(nft.connect(addr1).mintNFT(addr1.address, "image2.json", { value: price }))
            .to.emit(nft, "Minted")
            .withArgs(addr1.address, 1, "https://api.satelliteimages.com/metadata/image2.json");
    });

    it("should allow the owner to withdraw funds", async function () {
        await nft.connect(addr1).mintNFT(addr1.address, "image3.json", { value: price });
        const initialBalance = await ethers.provider.getBalance(owner.address);
        await nft.withdraw();
        const finalBalance = await ethers.provider.getBalance(owner.address);
        expect(finalBalance).to.be.gt(initialBalance);
    });

    it("should reject minting if incorrect value is sent", async function () {
        await expect(nft.connect(addr1).mintNFT(addr1.address, "image4.json", { value: ethers.utils.parseEther("0.05") }))
            .to.be.revertedWith("Incorrect value sent");
    });
});
