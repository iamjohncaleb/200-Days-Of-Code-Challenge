// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EscrowSmartContract {
    address public buyer;
    address public seller;
    address public arbiter;
    uint256 public amount;
    bool public isFunded;
    bool public isReleased;

    event Funded(address indexed buyer, uint256 amount);
    event Released(address indexed seller, uint256 amount);
    event Refunded(address indexed buyer, uint256 amount);

    constructor(address _seller, address _arbiter) {
        buyer = msg.sender;
        seller = _seller;
        arbiter = _arbiter;
    }

    modifier onlyBuyer() {
        require(msg.sender == buyer, "Only buyer can call this function");
        _;
    }

    modifier onlyArbiter() {
        require(msg.sender == arbiter, "Only arbiter can call this function");
        _;
    }

    function fundEscrow() external payable onlyBuyer {
        require(!isFunded, "Escrow already funded");
        require(msg.value > 0, "Amount must be greater than zero");

        amount = msg.value;
        isFunded = true;
        emit Funded(msg.sender, msg.value);
    }

    function releaseFunds() external onlyArbiter {
        require(isFunded, "Escrow not funded");
        require(!isReleased, "Funds already released");

        isReleased = true;
        payable(seller).transfer(amount);
        emit Released(seller, amount);
    }

    function refundBuyer() external onlyArbiter {
        require(isFunded, "Escrow not funded");
        require(!isReleased, "Funds already released");

        isReleased = true;
        payable(buyer).transfer(amount);
        emit Refunded(buyer, amount);
    }
}