// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EquipmentMaintenance {
    struct MaintenanceRecord {
        string description;
        uint256 timestamp;
        address technician;
    }

    mapping(string => MaintenanceRecord[]) public equipmentLogs;
    address public admin;

    event MaintenanceLogged(string indexed equipmentId, string description, address indexed technician);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function logMaintenance(string calldata equipmentId, string calldata description) external {
        equipmentLogs[equipmentId].push(MaintenanceRecord({
            description: description,
            timestamp: block.timestamp,
            technician: msg.sender
        }));

        emit MaintenanceLogged(equipmentId, description, msg.sender);
    }

    function getMaintenanceRecords(string calldata equipmentId) external view returns (MaintenanceRecord[] memory) {
        return equipmentLogs[equipmentId];
    }

    function getRecordCount(string calldata equipmentId) external view returns (uint256) {
        return equipmentLogs[equipmentId].length;
    }
}
