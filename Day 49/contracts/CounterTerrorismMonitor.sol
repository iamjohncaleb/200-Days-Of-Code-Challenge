// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CounterTerrorismMonitor {
    address public admin;
    uint256 public suspiciousThreshold; // Transaction value that triggers a suspicious activity
    mapping(address => uint256) public balances;

    event TransactionSuspicious(address indexed from, address indexed to, uint256 amount);
    event TransactionRecorded(address indexed from, address indexed to, uint256 amount);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor(uint256 _suspiciousThreshold) {
        admin = msg.sender;
        suspiciousThreshold = _suspiciousThreshold;
    }

    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function transfer(address to, uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[to] += amount;

        if (amount >= suspiciousThreshold) {
            emit TransactionSuspicious(msg.sender, to, amount);
        } else {
            emit TransactionRecorded(msg.sender, to, amount);
        }
    }

    function setSuspiciousThreshold(uint256 _newThreshold) external onlyAdmin {
        suspiciousThreshold = _newThreshold;
    }

    function getBalance(address user) external view returns (uint256) {
        return balances[user];
    }
}
