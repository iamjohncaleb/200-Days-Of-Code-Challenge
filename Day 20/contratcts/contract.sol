// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract WarFundCrowdfunding is Ownable {
    struct Contributor {
        uint256 amount;
        bool refunded;
    }

    mapping(address => Contributor) public contributors;
    address[] public donorAddresses;

    uint256 public goal;
    uint256 public deadline;
    uint256 public totalFunds;
    bool public goalReached;
    bool public fundsWithdrawn;

    event DonationReceived(address indexed donor, uint256 amount);
    event FundsWithdrawn(address indexed receiver, uint256 amount);
    event RefundIssued(address indexed contributor, uint256 amount);

    constructor(uint256 _goal, uint256 _duration) {
        goal = _goal;
        deadline = block.timestamp + _duration;
    }

    modifier onlyBeforeDeadline() {
        require(block.timestamp < deadline, "Campaign ended");
        _;
    }

    modifier onlyAfterDeadline() {
        require(block.timestamp >= deadline, "Campaign still active");
        _;
    }

    function donate() public payable onlyBeforeDeadline {
        require(msg.value > 0, "Minimum contribution required");

        if (contributors[msg.sender].amount == 0) {
            donorAddresses.push(msg.sender);
        }

        contributors[msg.sender].amount += msg.value;
        totalFunds += msg.value;

        if (totalFunds >= goal) {
            goalReached = true;
        }

        emit DonationReceived(msg.sender, msg.value);
    }

    function withdrawFunds(address payable _receiver) public onlyOwner onlyAfterDeadline {
        require(goalReached, "Funding goal not met");
        require(!fundsWithdrawn, "Funds already withdrawn");

        fundsWithdrawn = true;
        uint256 amount = address(this).balance;
        _receiver.transfer(amount);

        emit FundsWithdrawn(_receiver, amount);
    }

    function requestRefund() public onlyAfterDeadline {
        require(!goalReached, "Goal reached, no refunds");
        require(contributors[msg.sender].amount > 0, "No contribution found");
        require(!contributors[msg.sender].refunded, "Already refunded");

        uint256 refundAmount = contributors[msg.sender].amount;
        contributors[msg.sender].refunded = true;
        totalFunds -= refundAmount;

        payable(msg.sender).transfer(refundAmount);
        emit RefundIssued(msg.sender, refundAmount);
    }

    function getDonors() public view returns (address[] memory) {
        return donorAddresses;
    }

    receive() external payable {
        donate();
    }
}
