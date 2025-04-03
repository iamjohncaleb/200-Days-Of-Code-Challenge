// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AntiWhaleToken {
    string public name = "AntiWhaleToken";
    string public symbol = "AWT";
    uint8 public decimals = 18;
    uint256 public totalSupply = 1000000 * 10**18;
    uint256 public maxTxAmount = totalSupply / 100; // 1% limit per transaction
    mapping(address => uint256) public balances;

    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor() {
        balances[msg.sender] = totalSupply;
    }

    function transfer(address to, uint256 amount) public returns (bool) {
        require(amount <= maxTxAmount, "Transfer exceeds limit");
        require(balances[msg.sender] >= amount, "Insufficient balance");

        balances[msg.sender] -= amount;
        balances[to] += amount;
        emit Transfer(msg.sender, to, amount);
        return true;
    }
}
