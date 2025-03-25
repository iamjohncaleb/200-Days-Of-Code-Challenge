// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract P2PLending {
    struct Loan {
        address borrower;
        uint256 amount;
        uint256 interest;
        bool repaid;
    }

    mapping(address => Loan[]) public loans;
    mapping(address => uint256) public lenderBalance;

    event LoanRequested(address indexed borrower, uint256 amount);
    event LoanRepaid(address indexed borrower, uint256 amount);

    function requestLoan(uint256 _amount, uint256 _interest) public {
        loans[msg.sender].push(Loan(msg.sender, _amount, _interest, false));
        emit LoanRequested(msg.sender, _amount);
    }

    function lend() public payable {
        lenderBalance[msg.sender] += msg.value;
    }

    function repayLoan(uint256 _loanIndex) public payable {
        Loan storage loan = loans[msg.sender][_loanIndex];
        require(!loan.repaid, "Already repaid");
        require(msg.value >= loan.amount + loan.interest, "Insufficient amount");

        loan.repaid = true;
        payable(msg.sender).transfer(msg.value);

        emit LoanRepaid(msg.sender, msg.value);
    }
}
