// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IBridge {
    function mint(address recipient, uint256 amount) external;
}

contract TokenBridge {
    mapping(address => uint256) public lockedTokens;
    IBridge public targetBridge;

    event Locked(address indexed user, uint256 amount);
    event Released(address indexed user, uint256 amount);

    constructor(address _targetBridge) {
        targetBridge = IBridge(_targetBridge);
    }

    function lockTokens(uint256 amount) public {
        lockedTokens[msg.sender] += amount;
        emit Locked(msg.sender, amount);
    }

    function releaseTokens(address recipient, uint256 amount) public {
        require(lockedTokens[recipient] >= amount, "Insufficient locked tokens");
        lockedTokens[recipient] -= amount;
        targetBridge.mint(recipient, amount);
        emit Released(recipient, amount);
    }
}
