// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Escrow {
    address public buyer;
    address public seller;
    address public arbiter;
    uint256 public amount;
    bool public isFunded;
    bool public isReleased;

    event Deposited(uint256 amount);
    event Released();

    constructor(address _buyer, address _seller) {
        buyer = _buyer;
        seller = _seller;
        arbiter = msg.sender;
    }

    function deposit() public payable {
        require(msg.sender == buyer, "Only buyer can deposit");
        require(msg.value > 0, "Amount must be greater than 0");
        require(!isFunded, "Already funded");

        amount = msg.value;
        isFunded = true;
        emit Deposited(msg.value);
    }

    function releaseFunds() public {
        require(isFunded, "No funds in escrow");
        require(msg.sender == buyer || msg.sender == arbiter, "Only buyer or arbiter can release funds");

        isReleased = true;
        payable(seller).transfer(amount);
        emit Released();
    }
}
