const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT Marketplace", function () {
  let nftMarketplace, deployer, seller, buyer;
  beforeEach(async function () {
    [deployer, seller, buyer] = await ethers.getSigners();
    const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
    nftMarketplace = await NFTMarketplace.deploy();
    await nftMarketplace.deployed();
  });

  it("should list and buy an NFT", async function () {
    const nftContract = "0x1234567890abcdef1234567890abcdef12345678";
    const tokenId = 1;
    const price = ethers.utils.parseEther("1");

    await nftMarketplace.connect(seller).listNFT(nftContract, tokenId, price);
    await nftMarketplace.connect(buyer).buyNFT(1, { value: price });
  });
});