// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FarmYieldToken is ERC20, Ownable {
    uint256 public yieldRatePerHectare;

    constructor(uint256 _rate) ERC20("Farm Yield Token", "FYT") Ownable(msg.sender) {
        yieldRatePerHectare = _rate;
    }

    function mint(address to, uint256 hectares) external onlyOwner {
        uint256 amount = hectares * yieldRatePerHectare * 1e18;
        _mint(to, amount);
    }

    function updateYieldRate(uint256 newRate) external onlyOwner {
        yieldRatePerHectare = newRate;
    }
}
