// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract FlashLoan {
    address public liquidityProvider;
    IERC20 public token;

    event LoanExecuted(address borrower, uint256 amount);

    constructor(address _token) {
        liquidityProvider = msg.sender;
        token = IERC20(_token);
    }

    modifier onlyLiquidityProvider() {
        require(msg.sender == liquidityProvider, "Not liquidity provider");
        _;
    }

    function depositLiquidity(uint256 amount) external onlyLiquidityProvider {
        require(token.transferFrom(msg.sender, address(this), amount), "Deposit failed");
    }

    function executeFlashLoan(uint256 amount, address borrower, bytes calldata data) external {
        require(token.balanceOf(address(this)) >= amount, "Insufficient liquidity");

        uint256 initialBalance = token.balanceOf(address(this));
        require(token.transfer(borrower, amount), "Loan transfer failed");

        (bool success,) = borrower.call(data);
        require(success, "Flash loan execution failed");

        require(token.balanceOf(address(this)) >= initialBalance, "Loan not repaid");
        emit LoanExecuted(borrower, amount);
    }
}