// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SubscriptionService {
    mapping(address => uint256) public subscriptions;
    uint256 public fee = 0.05 ether;
    uint256 public duration = 30 days;

    event Subscribed(address indexed user, uint256 expiry);

    function subscribe() public payable {
        require(msg.value == fee, "Incorrect amount");

        if (subscriptions[msg.sender] < block.timestamp) {
            subscriptions[msg.sender] = block.timestamp + duration;
        } else {
            subscriptions[msg.sender] += duration;
        }

        emit Subscribed(msg.sender, subscriptions[msg.sender]);
    }

    function checkSubscription(address user) public view returns (bool) {
        return subscriptions[user] >= block.timestamp;
    }
}
