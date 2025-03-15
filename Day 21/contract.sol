// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MultiSigWallet {
    address[] public owners;
    uint256 public requiredApprovals;

    struct Transaction {
        address to;
        uint256 amount;
        uint256 approvals;
        bool executed;
    }

    Transaction[] public transactions;
    mapping(uint256 => mapping(address => bool)) public hasApproved;

    event TransactionCreated(uint256 indexed txId, address indexed to, uint256 amount);
    event TransactionApproved(uint256 indexed txId, address indexed owner);
    event TransactionExecuted(uint256 indexed txId);

    modifier onlyOwner() {
        require(isOwner(msg.sender), "Not an owner");
        _;
    }

    constructor(address[] memory _owners, uint256 _requiredApprovals) {
        require(_owners.length > 1, "At least 2 owners required");
        require(_requiredApprovals <= _owners.length, "Invalid approval requirement");

        owners = _owners;
        requiredApprovals = _requiredApprovals;
    }

    function isOwner(address _addr) public view returns (bool) {
        for (uint256 i = 0; i < owners.length; i++) {
            if (owners[i] == _addr) return true;
        }
        return false;
    }

    function proposeTransaction(address _to, uint256 _amount) public onlyOwner {
        transactions.push(Transaction({to: _to, amount: _amount, approvals: 0, executed: false}));
        emit TransactionCreated(transactions.length - 1, _to, _amount);
    }

    function approveTransaction(uint256 _txId) public onlyOwner {
        require(!hasApproved[_txId][msg.sender], "Already approved");
        require(!transactions[_txId].executed, "Already executed");

        transactions[_txId].approvals++;
        hasApproved[_txId][msg.sender] = true;
        emit TransactionApproved(_txId, msg.sender);

        if (transactions[_txId].approvals >= requiredApprovals) {
            executeTransaction(_txId);
        }
    }

    function executeTransaction(uint256 _txId) internal {
        require(transactions[_txId].approvals >= requiredApprovals, "Not enough approvals");
        require(!transactions[_txId].executed, "Already executed");

        transactions[_txId].executed = true;
        payable(transactions[_txId].to).transfer(transactions[_txId].amount);

        emit TransactionExecuted(_txId);
    }

    receive() external payable {}
}
