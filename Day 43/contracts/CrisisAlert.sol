// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CrisisAlert {
    struct Alert {
        address reporter;
        string message;
        uint256 timestamp;
        bool acknowledged;
    }

    Alert[] public alerts;
    address public admin;

    event AlertReported(uint256 alertId, address indexed reporter, string message);
    event AlertAcknowledged(uint256 alertId, address indexed admin);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function reportAlert(string memory _message) public {
        alerts.push(Alert({
            reporter: msg.sender,
            message: _message,
            timestamp: block.timestamp,
            acknowledged: false
        }));
        emit AlertReported(alerts.length - 1, msg.sender, _message);
    }

    function acknowledgeAlert(uint256 _alertId) public onlyAdmin {
        require(_alertId < alerts.length, "Invalid alert ID");
        alerts[_alertId].acknowledged = true;
        emit AlertAcknowledged(_alertId, msg.sender);
    }

    function getAlert(uint256 _alertId) public view returns (address, string memory, uint256, bool) {
        Alert memory a = alerts[_alertId];
        return (a.reporter, a.message, a.timestamp, a.acknowledged);
    }

    function getTotalAlerts() public view returns (uint256) {
        return alerts.length;
    }
}
