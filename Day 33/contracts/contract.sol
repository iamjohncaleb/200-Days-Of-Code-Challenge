// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AlgorithmicStablecoin {
    string public name = "AlgoStable";
    string public symbol = "AST";
    uint8 public decimals = 18;
    uint256 public totalSupply;
    
    mapping(address => uint256) public balances;
    mapping(address => mapping(address => uint256)) public allowances;

    uint256 public targetPrice = 1 ether; // 1 AST = 1 USD
    uint256 public rebaseRate = 5; // 5% adjustment per cycle
    address public oracle;
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Rebased(uint256 newTotalSupply);
    event OracleUpdated(address newOracle);

    modifier onlyOracle() {
        require(msg.sender == oracle, "Only oracle can call this");
        _;
    }

    constructor(uint256 initialSupply, address _oracle) {
        totalSupply = initialSupply * 10**decimals;
        balances[msg.sender] = totalSupply;
        oracle = _oracle;
    }

    function transfer(address to, uint256 amount) public returns (bool) {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[to] += amount;
        emit Transfer(msg.sender, to, amount);
        return true;
    }

    function approve(address spender, uint256 amount) public returns (bool) {
        allowances[msg.sender][spender] = amount;
        return true;
    }

    function transferFrom(address from, address to, uint256 amount) public returns (bool) {
        require(balances[from] >= amount, "Insufficient balance");
        require(allowances[from][msg.sender] >= amount, "Allowance exceeded");

        balances[from] -= amount;
        allowances[from][msg.sender] -= amount;
        balances[to] += amount;
        emit Transfer(from, to, amount);
        return true;
    }

    function rebase(uint256 currentPrice) public onlyOracle {
        if (currentPrice > targetPrice) {
            uint256 expansion = (totalSupply * rebaseRate) / 100;
            totalSupply += expansion;
            distributeNewTokens(expansion);
        } else if (currentPrice < targetPrice) {
            uint256 contraction = (totalSupply * rebaseRate) / 100;
            totalSupply -= contraction;
            burnTokens(contraction);
        }
        emit Rebased(totalSupply);
    }

    function distributeNewTokens(uint256 amount) internal {
        for (uint256 i = 0; i < 10; i++) {
            address recipient = address(uint160(uint256(keccak256(abi.encodePacked(block.timestamp, i)))));
            balances[recipient] += amount / 10;
        }
    }

    function burnTokens(uint256 amount) internal {
        balances[msg.sender] -= amount;
    }

    function updateOracle(address newOracle) public {
        oracle = newOracle;
        emit OracleUpdated(newOracle);
    }
}
