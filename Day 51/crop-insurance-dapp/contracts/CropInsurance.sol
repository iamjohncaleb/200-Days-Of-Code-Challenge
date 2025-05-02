// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CropInsurance {
    address public insurer;
    uint256 public insuranceAmount;
    uint256 public payoutAmount;
    mapping(address => bool) public policyholders;
    mapping(address => bool) public claimsMade;

    event InsurancePurchased(address indexed policyholder, uint256 amount);
    event ClaimMade(address indexed policyholder, uint256 amount);
    event PayoutIssued(address indexed policyholder, uint256 amount);

    constructor(uint256 _insuranceAmount, uint256 _payoutAmount) {
        insurer = msg.sender;
        insuranceAmount = _insuranceAmount;
        payoutAmount = _payoutAmount;
    }

    function purchaseInsurance() public payable {
        require(msg.value == insuranceAmount, "Incorrect insurance amount");
        policyholders[msg.sender] = true;
        emit InsurancePurchased(msg.sender, msg.value);
    }

    function makeClaim() public {
        require(policyholders[msg.sender], "Not a valid policyholder");
        require(!claimsMade[msg.sender], "Claim already made");
        claimsMade[msg.sender] = true;
        emit ClaimMade(msg.sender, payoutAmount);
    }

    function issuePayout(address payable policyholder) public {
        require(msg.sender == insurer, "Only insurer can issue payout");
        require(claimsMade[policyholder], "No claim made");
        require(address(this).balance >= payoutAmount, "Insufficient funds");

        claimsMade[policyholder] = false;
        policyholder.transfer(payoutAmount);
        emit PayoutIssued(policyholder, payoutAmount);
    }

    // Function to check balance in the contract
    function contractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
