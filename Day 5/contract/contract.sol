// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TimeLock {
    uint256 public unlockTime;
    address payable public owner;

    event Deposited(address indexed sender, uint256 amount);
    event Withdrawn(address indexed receiver, uint256 amount);
    event EmergencyWithdrawal(address indexed receiver, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor(uint256 _time) {
        owner = payable(msg.sender);
        unlockTime = block.timestamp + _time;
    }

    // Function to deposit funds into the contract
    function deposit() external payable {
        require(msg.value > 0, "Must deposit some ETH");
        emit Deposited(msg.sender, msg.value);
    }

    // Function to withdraw funds after unlock time
    function withdraw() external onlyOwner {
        require(block.timestamp >= unlockTime, "Funds are locked");
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds available");

        (bool success, ) = owner.call{value: balance}("");
        require(success, "Transfer failed");

        emit Withdrawn(owner, balance);
    }

    // Emergency withdrawal (if needed) - Can be extended with multisig or admin approval
    function emergencyWithdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds available");

        (bool success, ) = owner.call{value: balance}("");
        require(success, "Emergency withdrawal failed");

        emit EmergencyWithdrawal(owner, balance);
    }

    // Function to check the contract balance
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }

    // Fallback function to accept ETH
    receive() external payable {
        emit Deposited(msg.sender, msg.value);
    }
}
