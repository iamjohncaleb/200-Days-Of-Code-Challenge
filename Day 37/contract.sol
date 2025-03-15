// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ReputationSystem {
    mapping(address => int256) public reputation;

    event ReputationUpdated(address indexed user, int256 newReputation);

    function increaseReputation(address user, int256 amount) public {
        reputation[user] += amount;
        emit ReputationUpdated(user, reputation[user]);
    }

    function decreaseReputation(address user, int256 amount) public {
        reputation[user] -= amount;
        emit ReputationUpdated(user, reputation[user]);
    }

    function getReputation(address user) public view returns (int256) {
        return reputation[user];
    }
}
