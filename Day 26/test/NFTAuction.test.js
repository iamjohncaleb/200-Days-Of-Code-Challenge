const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT Auction", function () {
  let nftAuction, deployer, seller, bidder;
  beforeEach(async function () {
    [deployer, seller, bidder] = await ethers.getSigners();
    const NFTAuction = await ethers.getContractFactory("NFTAuction");
    nftAuction = await NFTAuction.deploy();
    await nftAuction.deployed();
  });

  it("should create and bid on an auction", async function () {
    const nftContract = "0x1234567890abcdef1234567890abcdef12345678";
    const tokenId = 1;
    const startPrice = ethers.utils.parseEther("1");
    const duration = 3600;

    await nftAuction.connect(seller).createAuction(nftContract, tokenId, startPrice, duration);
    await nftAuction.connect(bidder).placeBid(1, { value: ethers.utils.parseEther("2") });
  });
});