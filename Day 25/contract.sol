// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTMarketplace is ERC721URIStorage, Ownable {
    struct NFT {
        uint256 id;
        address payable owner;
        uint256 price;
        bool forSale;
    }

    uint256 private _tokenIds;
    mapping(uint256 => NFT) public nfts;
    mapping(address => uint256) public pendingWithdrawals;

    event Minted(uint256 indexed tokenId, address owner, string tokenURI);
    event Listed(uint256 indexed tokenId, uint256 price);
    event Sold(uint256 indexed tokenId, address buyer, uint256 price);
    event Withdrawn(address indexed seller, uint256 amount);

    constructor() ERC721("NFT Marketplace", "NFTM") {}

    function mintNFT(string memory tokenURI) public {
        _tokenIds++;
        uint256 newTokenId = _tokenIds;

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        nfts[newTokenId] = NFT({
            id: newTokenId,
            owner: payable(msg.sender),
            price: 0,
            forSale: false
        });

        emit Minted(newTokenId, msg.sender, tokenURI);
    }

    function listNFT(uint256 tokenId, uint256 price) public {
        require(ownerOf(tokenId) == msg.sender, "Not the NFT owner");
        require(price > 0, "Price must be greater than 0");

        nfts[tokenId].price = price;
        nfts[tokenId].forSale = true;

        emit Listed(tokenId, price);
    }

    function buyNFT(uint256 tokenId) public payable {
        NFT storage nft = nfts[tokenId];
        require(nft.forSale, "NFT is not for sale");
        require(msg.value >= nft.price, "Insufficient payment");

        // Transfer NFT ownership
        _transfer(nft.owner, msg.sender, tokenId);
        pendingWithdrawals[nft.owner] += msg.value;

        nft.owner = payable(msg.sender);
        nft.forSale = false;

        emit Sold(tokenId, msg.sender, msg.value);
    }

    function withdrawEarnings() public {
        uint256 amount = pendingWithdrawals[msg.sender];
        require(amount > 0, "No earnings to withdraw");

        pendingWithdrawals[msg.sender] = 0;
        payable(msg.sender).transfer(amount);

        emit Withdrawn(msg.sender, amount);
    }
}
