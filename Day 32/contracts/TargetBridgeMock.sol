// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TargetBridgeMock {
    mapping(address => uint256) public minted;

    function mint(address recipient, uint256 amount) external {
        minted[recipient] += amount;
    }
}
