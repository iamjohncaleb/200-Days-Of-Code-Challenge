// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract FlashLoan {
    IERC20 public token;
    uint256 public poolBalance;

    event LoanExecuted(address borrower, uint256 amount);

    constructor(address _token) {
        token = IERC20(_token);
        poolBalance = token.balanceOf(address(this));
    }

    function flashLoan(uint256 amount) external {
        require(amount <= poolBalance, "Not enough liquidity");

        uint256 initialBalance = token.balanceOf(address(this));
        token.transfer(msg.sender, amount);

        // Execute external smart contract logic
        (bool success, ) = msg.sender.call(abi.encodeWithSignature("executeFlashLoan(uint256)", amount));
        require(success, "Flash loan execution failed");

        require(token.balanceOf(address(this)) >= initialBalance, "Loan not repaid");

        emit LoanExecuted(msg.sender, amount);
    }
}
