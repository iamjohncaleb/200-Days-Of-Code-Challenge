// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MultiSigWallet {
    address[] public owners;
    uint256 public requiredApprovals;
    mapping(address => bool) public isOwner;
    mapping(uint256 => mapping(address => bool)) public approvals;
    uint256 public transactionCount;

    struct Transaction {
        address to;
        uint256 amount;
        bool executed;
    }

    Transaction[] public transactions;

    modifier onlyOwner() {
        require(isOwner[msg.sender], "Not an owner");
        _;
    }

    constructor(address[] memory _owners, uint256 _requiredApprovals) {
        require(_owners.length >= _requiredApprovals, "Invalid setup");
        for (uint256 i = 0; i < _owners.length; i++) {
            isOwner[_owners[i]] = true;
        }
        owners = _owners;
        requiredApprovals = _requiredApprovals;
    }

    function proposeTransaction(address _to, uint256 _amount) public onlyOwner {
        transactions.push(Transaction(_to, _amount, false));
        transactionCount++;
    }

    function approveTransaction(uint256 index) public onlyOwner {
        require(!approvals[index][msg.sender], "Already approved");
        approvals[index][msg.sender] = true;
    }

    function executeTransaction(uint256 index) public onlyOwner {
        require(transactions[index].executed == false, "Already executed");
        uint256 approvalCount = 0;
        for (uint256 i = 0; i < owners.length; i++) {
            if (approvals[index][owners[i]]) {
                approvalCount++;
            }
        }
        require(approvalCount >= requiredApprovals, "Not enough approvals");

        transactions[index].executed = true;
        payable(transactions[index].to).transfer(transactions[index].amount);
    }

    receive() external payable {}
}
