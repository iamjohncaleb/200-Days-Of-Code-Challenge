// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AgriculturalLoanDisbursement {
    address public admin;

    enum LoanStatus { Pending, Approved, Rejected, Disbursed }

    struct LoanApplication {
        address applicant;
        uint256 amount;
        LoanStatus status;
    }

    LoanApplication[] public applications;

    mapping(address => uint256) public balances;

    event LoanApplied(address indexed applicant, uint256 amount);
    event LoanApproved(uint256 indexed appId);
    event LoanRejected(uint256 indexed appId);
    event LoanDisbursed(uint256 indexed appId, address indexed applicant, uint256 amount);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not admin");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function applyForLoan(uint256 amount) external {
        applications.push(LoanApplication(msg.sender, amount, LoanStatus.Pending));
        emit LoanApplied(msg.sender, amount);
    }

    function approveLoan(uint256 appId) external onlyAdmin {
        require(appId < applications.length, "Invalid appId");
        require(applications[appId].status == LoanStatus.Pending, "Already processed");
        applications[appId].status = LoanStatus.Approved;
        emit LoanApproved(appId);
    }

    function rejectLoan(uint256 appId) external onlyAdmin {
        require(appId < applications.length, "Invalid appId");
        require(applications[appId].status == LoanStatus.Pending, "Already processed");
        applications[appId].status = LoanStatus.Rejected;
        emit LoanRejected(appId);
    }

    function disburseLoan(uint256 appId) external onlyAdmin {
        LoanApplication storage app = applications[appId];
        require(app.status == LoanStatus.Approved, "Not approved");
        app.status = LoanStatus.Disbursed;
        balances[app.applicant] += app.amount;
        payable(app.applicant).transfer(app.amount);
        emit LoanDisbursed(appId, app.applicant, app.amount);
    }

    receive() external payable {}
}
