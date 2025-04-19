// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SatelliteImageryAccessNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;
    uint256 public price = 0.1 ether; // Set the price for each NFT
    string public baseURI;

    event Minted(address indexed to, uint256 tokenId, string tokenURI);

    constructor(string memory _baseURI) ERC721("SatelliteImageryAccessNFT", "SIANFT") {
        tokenCounter = 0;
        baseURI = _baseURI;
    }

    function mintNFT(address to, string memory tokenURI) public payable returns (uint256) {
        require(msg.value == price, "Incorrect value sent");

        uint256 tokenId = tokenCounter;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, string(abi.encodePacked(baseURI, tokenURI)));
        tokenCounter++;

        emit Minted(to, tokenId, string(abi.encodePacked(baseURI, tokenURI)));

        return tokenId;
    }

    function setPrice(uint256 _price) external onlyOwner {
        price = _price;
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
