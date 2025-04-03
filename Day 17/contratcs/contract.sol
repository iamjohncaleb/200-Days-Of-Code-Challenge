// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
}

contract TokenVesting {
    IERC20 public token;
    address public beneficiary;
    uint256 public startTime;
    uint256 public releaseTime;
    uint256 public amount;

    constructor(address tokenAddress, address _beneficiary, uint256 _startTime, uint256 _releaseTime, uint256 _amount) {
        require(_releaseTime > _startTime, "Invalid release time");
        token = IERC20(tokenAddress);
        beneficiary = _beneficiary;
        startTime = _startTime;
        releaseTime = _releaseTime;
        amount = _amount;
    }

    function release() public {
        require(block.timestamp >= releaseTime, "Tokens are locked");
        require(amount > 0, "No tokens to release");

        uint256 payout = amount;
        amount = 0;
        require(token.transfer(beneficiary, payout), "Transfer failed");
    }
}
