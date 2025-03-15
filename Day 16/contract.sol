// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Escrow {
    address public buyer;
    address public seller;
    address public arbiter;
    uint256 public amount;

    event FundsDeposited(address indexed buyer, uint256 amount);
    event FundsReleased(address indexed seller, uint256 amount);
    
    constructor(address _seller, address _arbiter) payable {
        buyer = msg.sender;
        seller = _seller;
        arbiter = _arbiter;
        amount = msg.value;
        require(amount > 0, "Deposit required");
        emit FundsDeposited(buyer, amount);
    }

    function releaseFunds() public {
        require(msg.sender == buyer || msg.sender == arbiter, "Unauthorized");
        require(amount > 0, "No funds to release");

        uint256 payment = amount;
        amount = 0;
        payable(seller).transfer(payment);

        emit FundsReleased(seller, payment);
    }

    function refundBuyer() public {
        require(msg.sender == arbiter, "Only arbiter can refund");
        require(amount > 0, "No funds to refund");

        uint256 refundAmount = amount;
        amount = 0;
        payable(buyer).transfer(refundAmount);
    }
}
