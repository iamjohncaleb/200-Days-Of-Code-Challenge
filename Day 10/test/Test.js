const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleAuction", function () {
    let auction, owner, addr1, addr2;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();
        const SimpleAuction = await ethers.getContractFactory("SimpleAuction");
        auction = await SimpleAuction.deploy();
        await auction.deployed();
    });

    it("Should start with no highest bidder and bid of 0", async function () {
        expect(await auction.highestBidder()).to.equal(ethers.constants.AddressZero);
        expect(await auction.highestBid()).to.equal(0);
    });

    it("Should accept bids and update highestBid and highestBidder", async function () {
        await auction.connect(addr1).bid({ value: ethers.utils.parseEther("1") });
        expect(await auction.highestBidder()).to.equal(addr1.address);
        expect(await auction.highestBid()).to.equal(ethers.utils.parseEther("1"));
    });

    it("Should allow withdrawing previous bids", async function () {
        await auction.connect(addr1).bid({ value: ethers.utils.parseEther("1") });
        await auction.connect(addr2).bid({ value: ethers.utils.parseEther("2") });
        
        expect(await ethers.provider.getBalance(auction.address)).to.equal(ethers.utils.parseEther("2"));
        
        await auction.connect(addr1).withdraw();
        expect(await auction.pendingReturns(addr1.address)).to.equal(0);
    });

    it("Should only allow owner to end the auction", async function () {
        await expect(auction.connect(addr1).endAuction()).to.be.revertedWith("Only owner can end the auction");
        await expect(auction.connect(owner).endAuction()).to.emit(auction, "AuctionEnded");
    });
});
