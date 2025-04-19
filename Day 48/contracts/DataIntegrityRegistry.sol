// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DataIntegrityRegistry {
    address public admin;
    mapping(bytes32 => uint256) public dataHashes; // Mapping to store the data hash and the timestamp of when it was stored

    event DataHashRegistered(bytes32 indexed dataHash, uint256 timestamp);
    event DataHashVerified(bytes32 indexed dataHash, bool isValid);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function registerDataHash(bytes32 _dataHash) external onlyAdmin {
        // Store the hash and the current timestamp
        dataHashes[_dataHash] = block.timestamp;

        emit DataHashRegistered(_dataHash, block.timestamp);
    }

    function verifyDataIntegrity(bytes32 _dataHash) external {
        bool isValid = dataHashes[_dataHash] != 0;
        emit DataHashVerified(_dataHash, isValid);
    }

    function getDataHashTimestamp(bytes32 _dataHash) external view returns (uint256) {
        return dataHashes[_dataHash];
    }
}
