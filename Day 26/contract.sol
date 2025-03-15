// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract NFTAuction is ReentrancyGuard {
    struct Auction {
        address seller;
        address highestBidder;
        uint256 highestBid;
        uint256 startTime;
        uint256 endTime;
        bool ended;
    }

    mapping(uint256 => Auction) public auctions;
    mapping(uint256 => mapping(address => uint256)) public pendingReturns;

    IERC721 public nftContract;
    uint256 public auctionDuration = 3 days;

    event AuctionCreated(uint256 indexed tokenId, uint256 endTime);
    event BidPlaced(uint256 indexed tokenId, address bidder, uint256 amount);
    event AuctionEnded(uint256 indexed tokenId, address winner, uint256 amount);

    constructor(address _nftContract) {
        nftContract = IERC721(_nftContract);
    }

    function startAuction(uint256 tokenId, uint256 minBid) public {
        require(nftContract.ownerOf(tokenId) == msg.sender, "Not NFT owner");
        require(auctions[tokenId].startTime == 0, "Auction already exists");

        auctions[tokenId] = Auction({
            seller: msg.sender,
            highestBidder: address(0),
            highestBid: minBid,
            startTime: block.timestamp,
            endTime: block.timestamp + auctionDuration,
            ended: false
        });

        nftContract.transferFrom(msg.sender, address(this), tokenId);
        emit AuctionCreated(tokenId, block.timestamp + auctionDuration);
    }

    function bid(uint256 tokenId) public payable {
        Auction storage auction = auctions[tokenId];
        require(block.timestamp < auction.endTime, "Auction ended");
        require(msg.value > auction.highestBid, "Bid too low");

        if (auction.highestBidder != address(0)) {
            pendingReturns[tokenId][auction.highestBidder] += auction.highestBid;
        }

        auction.highestBidder = msg.sender;
        auction.highestBid = msg.value;

        emit BidPlaced(tokenId, msg.sender, msg.value);
    }

    function withdraw(uint256 tokenId) public {
        uint256 amount = pendingReturns[tokenId][msg.sender];
        require(amount > 0, "No funds to withdraw");

        pendingReturns[tokenId][msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }

    function endAuction(uint256 tokenId) public nonReentrant {
        Auction storage auction = auctions[tokenId];
        require(block.timestamp >= auction.endTime, "Auction ongoing");
        require(!auction.ended, "Auction already ended");

        auction.ended = true;
        if (auction.highestBidder != address(0)) {
            nftContract.transferFrom(address(this), auction.highestBidder, tokenId);
            payable(auction.seller).transfer(auction.highestBid);
            emit AuctionEnded(tokenId, auction.highestBidder, auction.highestBid);
        } else {
            nftContract.transferFrom(address(this), auction.seller, tokenId);
        }
    }
}
