// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AdvancedTimeLock {
    address public owner;
    uint256 public unlockTime;

    event Locked(address indexed owner, uint256 unlockTime);
    event Unlocked(address indexed owner, uint256 timestamp);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    modifier isUnlocked() {
        require(block.timestamp >= unlockTime, "Funds are still locked");
        _;
    }

    constructor(uint256 _unlockTime) {
        require(_unlockTime > block.timestamp, "Unlock time must be in the future");
        owner = msg.sender;
        unlockTime = _unlockTime;
        emit Locked(owner, unlockTime);
    }

    function unlock() public onlyOwner isUnlocked {
        emit Unlocked(owner, block.timestamp);
    }
}