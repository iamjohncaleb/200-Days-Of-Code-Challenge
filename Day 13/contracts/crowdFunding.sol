// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Crowdfunding {
    address public owner;
    uint256 public goal;
    uint256 public deadline;
    uint256 public totalFunds;
    mapping(address => uint256) public contributions;

    event Funded(address indexed contributor, uint256 amount);
    event Withdrawn(address owner, uint256 amount);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can withdraw");
        _;
    }

    constructor(uint256 _goal, uint256 _duration) {
        owner = msg.sender;
        goal = _goal;
        deadline = block.timestamp + _duration;
    }

    function contribute() public payable {
        require(block.timestamp < deadline, "Funding period over");
        require(msg.value > 0, "Contribution must be greater than zero");

        contributions[msg.sender] += msg.value;
        totalFunds += msg.value;

        emit Funded(msg.sender, msg.value);
    }

    function withdrawFunds() public onlyOwner {
        require(totalFunds >= goal, "Goal not reached yet");
        require(address(this).balance > 0, "No funds available");

        uint256 amount = address(this).balance;
        payable(owner).transfer(amount);

        emit Withdrawn(owner, amount);
    }

    function refund() public {
        require(block.timestamp > deadline, "Cannot refund before deadline");
        require(totalFunds < goal, "Goal was met, no refunds");

        uint256 amount = contributions[msg.sender];
        require(amount > 0, "No funds to refund");

        contributions[msg.sender] = 0;
        totalFunds -= amount;
        payable(msg.sender).transfer(amount);
    }

    receive() external payable {
        contribute();
    }
}
