// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MultiSigWallet {
    address[] public owners;
    mapping(address => bool) public isOwner;
    uint256 public requiredApprovals;

    struct Transaction {
        address to;
        uint256 value;
        uint256 approvals;
        bool executed;
    }

    Transaction[] public transactions;
    mapping(uint256 => mapping(address => bool)) public approved;

    event TransactionCreated(uint256 txId, address to, uint256 value);
    event Approved(uint256 txId, address approver);
    event Executed(uint256 txId);

    modifier onlyOwner() {
        require(isOwner[msg.sender], "Not an owner");
        _;
    }

    constructor(address[] memory _owners, uint256 _required) {
        require(_owners.length > 0, "At least one owner required");
        require(_required > 0 && _required <= _owners.length, "Invalid approvals");

        for (uint256 i = 0; i < _owners.length; i++) {
            isOwner[_owners[i]] = true;
        }

        owners = _owners;
        requiredApprovals = _required;
    }

    function createTransaction(address to, uint256 value) public onlyOwner {
        transactions.push(Transaction({ to: to, value: value, approvals: 0, executed: false }));
        emit TransactionCreated(transactions.length - 1, to, value);
    }

    function approveTransaction(uint256 txId) public onlyOwner {
        require(!approved[txId][msg.sender], "Already approved");
        transactions[txId].approvals++;
        approved[txId][msg.sender] = true;

        emit Approved(txId, msg.sender);

        if (transactions[txId].approvals >= requiredApprovals) {
            executeTransaction(txId);
        }
    }

    function executeTransaction(uint256 txId) internal {
        require(transactions[txId].approvals >= requiredApprovals, "Not enough approvals");
        require(!transactions[txId].executed, "Already executed");

        transactions[txId].executed = true;
        payable(transactions[txId].to).transfer(transactions[txId].value);

        emit Executed(txId);
    }
}
