// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TimeLock {
    uint256 public unlockTime;
    address payable public owner;

    constructor(uint256 _time) payable {
        owner = payable(msg.sender);
        unlockTime = block.timestamp + _time;
    }

    receive() external payable {}

    function withdraw() public {
        require(msg.sender == owner, "Only owner can withdraw");
        require(block.timestamp >= unlockTime, "Dear Caleb, Your Funds are locked");

        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");

        owner.transfer(balance);
    }
}
