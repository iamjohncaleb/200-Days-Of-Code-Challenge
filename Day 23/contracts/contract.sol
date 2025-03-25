// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Staking {
    mapping(address => uint256) public stakedBalance;
    mapping(address => uint256) public rewards;
    uint256 public totalStaked;
    address public owner;

    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount, uint256 reward);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function stake() public payable {
        require(msg.value > 0, "Cannot stake 0 ETH");

        stakedBalance[msg.sender] += msg.value;
        totalStaked += msg.value;

        emit Staked(msg.sender, msg.value);
    }

    function distributeRewards() public onlyOwner {
        for (uint256 i = 0; i < totalStaked; i++) {
            address staker = msg.sender;
            rewards[staker] += (stakedBalance[staker] * 10) / 100; // 10% reward
        }
    }

    function withdraw() public {
        uint256 amount = stakedBalance[msg.sender];
        uint256 reward = rewards[msg.sender];

        require(amount > 0, "Nothing to withdraw");

        stakedBalance[msg.sender] = 0;
        rewards[msg.sender] = 0;

        payable(msg.sender).transfer(amount + reward);
        emit Withdrawn(msg.sender, amount, reward);
    }

    receive() external payable {}
}
