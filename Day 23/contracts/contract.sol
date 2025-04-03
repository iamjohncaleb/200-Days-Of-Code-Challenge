// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract StakingSmartContract {
    IERC20 public stakingToken;
    address public owner;
    uint256 public rewardRate;
    uint256 public totalStaked;

    struct Stake {
        uint256 amount;
        uint256 timestamp;
    }

    mapping(address => Stake) public stakes;

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event RewardClaimed(address indexed user, uint256 reward);

    constructor(address _stakingToken, uint256 _rewardRate) {
        stakingToken = IERC20(_stakingToken);
        owner = msg.sender;
        rewardRate = _rewardRate;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not contract owner");
        _;
    }

    function stake(uint256 _amount) external {
        require(_amount > 0, "Amount must be greater than zero");
        require(stakingToken.transferFrom(msg.sender, address(this), _amount), "Transfer failed");
        
        stakes[msg.sender].amount += _amount;
        stakes[msg.sender].timestamp = block.timestamp;
        totalStaked += _amount;

        emit Staked(msg.sender, _amount);
    }

    function unstake() external {
        uint256 stakedAmount = stakes[msg.sender].amount;
        require(stakedAmount > 0, "No funds to unstake");

        uint256 reward = calculateReward(msg.sender);
        totalStaked -= stakedAmount;
        delete stakes[msg.sender];

        require(stakingToken.transfer(msg.sender, stakedAmount + reward), "Transfer failed");
        emit Unstaked(msg.sender, stakedAmount);
        emit RewardClaimed(msg.sender, reward);
    }

    function calculateReward(address _user) public view returns (uint256) {
        Stake memory stakeData = stakes[_user];
        return ((block.timestamp - stakeData.timestamp) * stakeData.amount * rewardRate) / 1e18;
    }
}