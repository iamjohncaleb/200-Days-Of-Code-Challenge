// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TimeLockedVault {
    mapping(address => uint256) public balances;
    mapping(address => uint256) public unlockTimes;

    event Deposited(address indexed user, uint256 amount, uint256 unlockTime);
    event Withdrawn(address indexed user, uint256 amount);

    function deposit(uint256 lockDuration) public payable {
        require(msg.value > 0, "Must deposit some ETH");
        require(unlockTimes[msg.sender] == 0, "Existing deposit locked");

        balances[msg.sender] = msg.value;
        unlockTimes[msg.sender] = block.timestamp + lockDuration;

        emit Deposited(msg.sender, msg.value, unlockTimes[msg.sender]);
    }

    function withdraw() public {
        require(block.timestamp >= unlockTimes[msg.sender], "Funds are still locked");
        require(balances[msg.sender] > 0, "No funds available");

        uint256 amount = balances[msg.sender];
        balances[msg.sender] = 0;
        unlockTimes[msg.sender] = 0;
        payable(msg.sender).transfer(amount);

        emit Withdrawn(msg.sender, amount);
    }
}
