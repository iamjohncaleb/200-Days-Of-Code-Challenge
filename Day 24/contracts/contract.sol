// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract P2PLendingSmartContract {
    IERC20 public lendingToken;
    address public owner;
    uint256 public interestRate;

    struct Loan {
        address borrower;
        uint256 amount;
        uint256 dueDate;
        bool repaid;
    }

    mapping(address => Loan) public loans;

    event LoanRequested(address indexed borrower, uint256 amount, uint256 dueDate);
    event LoanRepaid(address indexed borrower, uint256 amount);

    constructor(address _lendingToken, uint256 _interestRate) {
        lendingToken = IERC20(_lendingToken);
        owner = msg.sender;
        interestRate = _interestRate;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not contract owner");
        _;
    }

    function requestLoan(uint256 _amount, uint256 _duration) external {
        require(loans[msg.sender].amount == 0, "Existing loan must be repaid first");
        require(lendingToken.transfer(msg.sender, _amount), "Transfer failed");
        
        loans[msg.sender] = Loan(msg.sender, _amount, block.timestamp + _duration, false);
        emit LoanRequested(msg.sender, _amount, block.timestamp + _duration);
    }

    function repayLoan() external {
        Loan storage loan = loans[msg.sender];
        require(loan.amount > 0, "No active loan");
        require(block.timestamp <= loan.dueDate, "Loan overdue");
        
        uint256 interest = (loan.amount * interestRate) / 100;
        uint256 repaymentAmount = loan.amount + interest;
        require(lendingToken.transferFrom(msg.sender, address(this), repaymentAmount), "Transfer failed");
        
        loan.repaid = true;
        delete loans[msg.sender];

        emit LoanRepaid(msg.sender, repaymentAmount);
    }
}