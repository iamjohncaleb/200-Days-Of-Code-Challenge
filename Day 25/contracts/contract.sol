// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract NFTMarketplace is ReentrancyGuard {
    struct Listing {
        address seller;
        address nftContract;
        uint256 tokenId;
        uint256 price;
    }
    
    mapping(uint256 => Listing) public listings;
    uint256 private _listingId;

    event NFTListed(uint256 indexed listingId, address indexed seller, address indexed nftContract, uint256 tokenId, uint256 price);
    event NFTSold(uint256 indexed listingId, address indexed buyer, address indexed nftContract, uint256 tokenId, uint256 price);
    
    function listNFT(address nftContract, uint256 tokenId, uint256 price) external {
        require(price > 0, "Price must be greater than zero");
        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);
        
        _listingId++;
        listings[_listingId] = Listing(msg.sender, nftContract, tokenId, price);
        
        emit NFTListed(_listingId, msg.sender, nftContract, tokenId, price);
    }

    function buyNFT(uint256 listingId) external payable nonReentrant {
        Listing memory listing = listings[listingId];
        require(msg.value >= listing.price, "Insufficient funds");
        
        payable(listing.seller).transfer(listing.price);
        IERC721(listing.nftContract).transferFrom(address(this), msg.sender, listing.tokenId);
        
        delete listings[listingId];
        emit NFTSold(listingId, msg.sender, listing.nftContract, listing.tokenId, listing.price);
    }
}