// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenVesting {
    IERC20 public token;
    address public beneficiary;
    uint256 public start;
    uint256 public duration;
    uint256 public released;
    
    event TokensReleased(uint256 amount);

    constructor(address _token, address _beneficiary, uint256 _duration) {
        require(_token != address(0), "Invalid token address");
        require(_beneficiary != address(0), "Invalid beneficiary address");
        require(_duration > 0, "Duration must be greater than 0");
        
        token = IERC20(_token);
        beneficiary = _beneficiary;
        start = block.timestamp;
        duration = _duration;
    }

    function release() public {
        require(block.timestamp >= start, "Vesting not started");
        uint256 vestedAmount = _vestedAmount();
        uint256 unreleased = vestedAmount - released;
        
        require(unreleased > 0, "No tokens to release");
        released += unreleased;
        token.transfer(beneficiary, unreleased);
        emit TokensReleased(unreleased);
    }
    
    function _vestedAmount() internal view returns (uint256) {
        uint256 totalBalance = token.balanceOf(address(this)) + released;
        if (block.timestamp >= start + duration) {
            return totalBalance;
        } else {
            return (totalBalance * (block.timestamp - start)) / duration;
        }
    }
    
    function getVestingDetails() external view returns (uint256, uint256, uint256, uint256) {
        return (start, duration, released, _vestedAmount());
    }
}
