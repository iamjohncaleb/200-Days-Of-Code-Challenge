// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AdvancedEscrow {
    address public payer;
    address public payee;
    address public arbiter;
    uint256 public amount;
    bool public isReleased;

    event Deposited(address indexed payer, uint256 amount);
    event Released(address indexed payee, uint256 amount);

    modifier onlyArbiter() {
        require(msg.sender == arbiter, "Only arbiter can release funds");
        _;
    }

    constructor(address _payee, address _arbiter) payable {
        require(msg.value > 0, "Must deposit funds");
        payer = msg.sender;
        payee = _payee;
        arbiter = _arbiter;
        amount = msg.value;
        isReleased = false;
        emit Deposited(msg.sender, msg.value);
    }

    function releaseFunds() public onlyArbiter {
        require(!isReleased, "Funds already released");
        isReleased = true;
        payable(payee).transfer(amount);
        emit Released(payee, amount);
    }
}
