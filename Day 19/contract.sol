// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract EnhancedNFT is ERC721URIStorage, Ownable, Pausable {
    uint256 private _tokenIds;
    uint256 public maxSupply;
    uint256 public mintPrice;
    mapping(address => bool) public approvedMinters;

    event NFTMinted(address indexed recipient, uint256 tokenId, string tokenURI);
    event MinterApproved(address indexed minter);
    event MinterRevoked(address indexed minter);
    event Withdrawn(address owner, uint256 amount);

    constructor(uint256 _maxSupply, uint256 _mintPrice) ERC721("EnhancedNFT", "ENFT") {
        maxSupply = _maxSupply;
        mintPrice = _mintPrice;
    }

    modifier onlyMinter() {
        require(approvedMinters[msg.sender] || msg.sender == owner(), "Not an approved minter");
        _;
    }

    function mintNFT(address recipient, string memory tokenURI) public payable whenNotPaused onlyMinter returns (uint256) {
        require(_tokenIds < maxSupply, "Max supply reached");
        require(msg.value >= mintPrice, "Insufficient ETH sent");

        _tokenIds++;
        uint256 newItemId = _tokenIds;

        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        emit NFTMinted(recipient, newItemId, tokenURI);
        return newItemId;
    }

    function approveMinter(address minter) public onlyOwner {
        approvedMinters[minter] = true;
        emit MinterApproved(minter);
    }

    function revokeMinter(address minter) public onlyOwner {
        approvedMinters[minter] = false;
        emit MinterRevoked(minter);
    }

    function pauseMinting() public onlyOwner {
        _pause();
    }

    function unpauseMinting() public onlyOwner {
        _unpause();
    }

    function withdrawFunds() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");

        payable(owner()).transfer(balance);
        emit Withdrawn(owner(), balance);
    }

    receive() external payable {}
}
