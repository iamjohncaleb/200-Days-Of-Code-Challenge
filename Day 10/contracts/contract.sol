// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract SimpleAuction {
    address public highestBidder;
    uint256 public highestBid;
    mapping(address => uint256) public pendingReturns;
    address public owner;

    event NewBid(address indexed bidder, uint256 amount);
    event AuctionEnded(address winner, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can end the auction");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function bid() public payable {
        require(msg.value > highestBid, "Bid must be higher than current highest");

        if (highestBid != 0) {
            pendingReturns[highestBidder] += highestBid;
        }

        highestBidder = msg.sender;
        highestBid = msg.value;
        emit NewBid(msg.sender, msg.value);
    }

    function withdraw() public {
        uint256 amount = pendingReturns[msg.sender];
        require(amount > 0, "No funds to withdraw");

        pendingReturns[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }

    function endAuction() public onlyOwner {
        emit AuctionEnded(highestBidder, highestBid);
        payable(owner).transfer(highestBid);
    }
}
