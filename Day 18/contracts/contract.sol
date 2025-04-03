// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract EnhancedNFT is ERC721URIStorage, Ownable, Pausable {
    uint256 private _tokenIds;
    uint256 public maxSupply;
    uint256 public mintPrice;
    mapping(address => bool) public whitelist;

    event NFTMinted(address indexed recipient, uint256 tokenId, string tokenURI);
    event Withdrawn(address owner, uint256 amount);

    constructor(uint256 _maxSupply, uint256 _mintPrice) ERC721("EnhancedNFT", "ENFT") {
        maxSupply = _maxSupply;
        mintPrice = _mintPrice;
    }

    modifier onlyWhitelisted() {
        require(whitelist[msg.sender], "Not whitelisted");
        _;
    }

    function mintNFT(address recipient, string memory tokenURI) public payable whenNotPaused returns (uint256) {
        require(_tokenIds < maxSupply, "Max supply reached");
        require(msg.value == mintPrice, "Incorrect ETH sent");

        _tokenIds++;
        uint256 newItemId = _tokenIds;

        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        emit NFTMinted(recipient, newItemId, tokenURI);
        return newItemId;
    }

    function pauseMinting() public onlyOwner {
        _pause();
    }

    function unpauseMinting() public onlyOwner {
        _unpause();
    }

    function addToWhitelist(address user) public onlyOwner {
        whitelist[user] = true;
    }

    function removeFromWhitelist(address user) public onlyOwner {
        whitelist[user] = false;
    }

    function withdrawFunds() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");

        payable(owner()).transfer(balance);
        emit Withdrawn(owner(), balance);
    }

    receive() external payable {}
}
