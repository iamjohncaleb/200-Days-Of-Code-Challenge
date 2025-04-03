// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SubscriptionService {
    address public owner;
    uint256 public subscriptionFee;
    mapping(address => uint256) public subscribers;

    event Subscribed(address indexed user, uint256 expiration);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can modify");
        _;
    }

    constructor(uint256 _fee) {
        owner = msg.sender;
        subscriptionFee = _fee;
    }

    function subscribe() public payable {
        require(msg.value == subscriptionFee, "Incorrect fee");
        require(block.timestamp >= subscribers[msg.sender], "Already subscribed");

        subscribers[msg.sender] = block.timestamp + 30 days;
        emit Subscribed(msg.sender, subscribers[msg.sender]);
    }

    function checkSubscription(address user) public view returns (bool) {
        return block.timestamp < subscribers[user];
    }

    function withdrawFunds() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
}
