// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

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

    event TransactionProposed(uint256 indexed transactionId, address indexed to, uint256 amount);
    event TransactionApproved(uint256 indexed transactionId, address indexed approver);
    event TransactionExecuted(uint256 indexed transactionId, address indexed to, uint256 amount);

    modifier onlyOwner() {
        require(isOwner[msg.sender], "Not an owner");
        _;
    }

    constructor(address[] memory _owners, uint256 _requiredApprovals) {
        require(_owners.length > 0, "Owners required");
        require(_requiredApprovals > 0 && _requiredApprovals <= _owners.length, "Invalid required approvals");

        for (uint256 i = 0; i < _owners.length; i++) {
            require(_owners[i] != address(0), "Invalid owner address");
            require(!isOwner[_owners[i]], "Owner already added");
            isOwner[_owners[i]] = true;
            owners.push(_owners[i]);
        }

        requiredApprovals = _requiredApprovals;
    }

    function proposeTransaction(address _to, uint256 _amount) public onlyOwner {
        require(_to != address(0), "Invalid recipient address");
        require(_amount > 0, "Amount must be greater than zero");

        transactions.push(Transaction(_to, _amount, false));
        emit TransactionProposed(transactions.length - 1, _to, _amount);
        transactionCount++;
    }

    function approveTransaction(uint256 index) public onlyOwner {
        require(index < transactions.length, "Invalid transaction index");
        require(!approvals[index][msg.sender], "Already approved");

        approvals[index][msg.sender] = true;
        emit TransactionApproved(index, msg.sender);
    }

    function executeTransaction(uint256 index) public onlyOwner {
        require(index < transactions.length, "Invalid transaction index");
        Transaction storage txn = transactions[index];

        require(!txn.executed, "Transaction already executed");

        uint256 approvalCount = 0;
        for (uint256 i = 0; i < owners.length; i++) {
            if (approvals[index][owners[i]]) {
                approvalCount++;
            }
        }
        require(approvalCount >= requiredApprovals, "Not enough approvals");
        require(address(this).balance >= txn.amount, "Insufficient contract balance");

        txn.executed = true;
        payable(txn.to).transfer(txn.amount);
        emit TransactionExecuted(index, txn.to, txn.amount);
    }

    receive() external payable {}
}
