// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract NFTAuction is ReentrancyGuard {
    struct Auction {
        address seller;
        address nftContract;
        uint256 tokenId;
        uint256 startPrice;
        uint256 highestBid;
        address highestBidder;
        uint256 endTime;
        bool active;
    }

    mapping(uint256 => Auction) public auctions;
    uint256 private _auctionId;

    event AuctionCreated(uint256 indexed auctionId, address indexed seller, address indexed nftContract, uint256 tokenId, uint256 startPrice, uint256 endTime);
    event NewBidPlaced(uint256 indexed auctionId, address indexed bidder, uint256 bidAmount);
    event AuctionEnded(uint256 indexed auctionId, address indexed winner, uint256 finalPrice);

    function createAuction(address nftContract, uint256 tokenId, uint256 startPrice, uint256 duration) external {
        require(duration > 0, "Duration must be greater than zero");
        require(startPrice > 0, "Start price must be greater than zero");
        
        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);
        
        _auctionId++;
        auctions[_auctionId] = Auction(msg.sender, nftContract, tokenId, startPrice, 0, address(0), block.timestamp + duration, true);
        
        emit AuctionCreated(_auctionId, msg.sender, nftContract, tokenId, startPrice, block.timestamp + duration);
    }

    function placeBid(uint256 auctionId) external payable {
        Auction storage auction = auctions[auctionId];
        require(auction.active, "Auction is not active");
        require(block.timestamp < auction.endTime, "Auction has ended");
        require(msg.value > auction.highestBid, "Bid must be higher than current highest bid");
        
        if (auction.highestBid > 0) {
            payable(auction.highestBidder).transfer(auction.highestBid);
        }
        
        auction.highestBid = msg.value;
        auction.highestBidder = msg.sender;
        
        emit NewBidPlaced(auctionId, msg.sender, msg.value);
    }

    function endAuction(uint256 auctionId) external nonReentrant {
        Auction storage auction = auctions[auctionId];
        require(auction.active, "Auction is not active");
        require(block.timestamp >= auction.endTime, "Auction has not ended yet");
        
        auction.active = false;
        if (auction.highestBidder != address(0)) {
            payable(auction.seller).transfer(auction.highestBid);
            IERC721(auction.nftContract).transferFrom(address(this), auction.highestBidder, auction.tokenId);
        } else {
            IERC721(auction.nftContract).transferFrom(address(this), auction.seller, auction.tokenId);
        }
        
        emit AuctionEnded(auctionId, auction.highestBidder, auction.highestBid);
    }
}