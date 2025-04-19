// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EmergencyFundAllocation {
    address public authority;
    uint256 public totalFund;
    mapping(address => uint256) public allocatedFunds;
    mapping(address => bool) public hasClaimed;

    event FundAllocated(address indexed recipient, uint256 amount);
    event FundClaimed(address indexed claimant, uint256 amount);

    modifier onlyAuthority() {
        require(msg.sender == authority, "Only authority can perform this action");
        _;
    }

    modifier hasNotClaimed() {
        require(!hasClaimed[msg.sender], "You have already claimed your allocation");
        _;
    }

    constructor() {
        authority = msg.sender;
    }

    function allocateFund(address recipient, uint256 amount) public onlyAuthority {
        totalFund += amount;
        allocatedFunds[recipient] += amount;
        emit FundAllocated(recipient, amount);
    }

    function claimFund() public hasNotClaimed {
        uint256 amount = allocatedFunds[msg.sender];
        require(amount > 0, "No funds allocated to you");

        allocatedFunds[msg.sender] = 0;
        hasClaimed[msg.sender] = true;

        payable(msg.sender).transfer(amount);
        emit FundClaimed(msg.sender, amount);
    }

    function deposit() external payable {
        totalFund += msg.value;
    }

    function checkAllocation(address recipient) public view returns (uint256) {
        return allocatedFunds[recipient];
    }
}
