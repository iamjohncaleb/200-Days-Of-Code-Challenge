// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SoilInputQualityVerification {
    struct Report {
        address verifier;
        uint256 soilQuality;
        uint256 inputQuality;
        uint256 timestamp;
        bool isValid;
    }

    address public owner;
    mapping(address => bool) public registeredVerifiers;
    mapping(uint256 => Report) public reports;
    uint256 public reportCount;

    event ReportSubmitted(uint256 reportId, address indexed verifier, uint256 soilQuality, uint256 inputQuality, uint256 timestamp);
    event VerifierRegistered(address indexed verifier);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    modifier onlyRegisteredVerifier() {
        require(registeredVerifiers[msg.sender], "Only registered verifiers can submit reports");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // Register a new verifier
    function registerVerifier(address _verifier) external onlyOwner {
        registeredVerifiers[_verifier] = true;
        emit VerifierRegistered(_verifier);
    }

    // Submit a report for soil and input quality verification
    function submitReport(uint256 _soilQuality, uint256 _inputQuality) external onlyRegisteredVerifier {
        reportCount++;
        reports[reportCount] = Report({
            verifier: msg.sender,
            soilQuality: _soilQuality,
            inputQuality: _inputQuality,
            timestamp: block.timestamp,
            isValid: true
        });

        emit ReportSubmitted(reportCount, msg.sender, _soilQuality, _inputQuality, block.timestamp);
    }

    // Mark a report as invalid (e.g., if submitted incorrectly)
    function invalidateReport(uint256 _reportId) external onlyOwner {
        require(reports[_reportId].isValid, "Report is already invalid");
        reports[_reportId].isValid = false;
    }

    // Get report details
    function getReport(uint256 _reportId) external view returns (Report memory) {
        return reports[_reportId];
    }
}
