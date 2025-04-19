// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ClassifiedDocumentAccessControl {
    address public admin;
    mapping(address => bool) public authorizedUsers;
    mapping(uint256 => string) private documents;

    event DocumentAdded(uint256 docId);
    event AccessGranted(address user);
    event AccessRevoked(address user);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not admin");
        _;
    }

    modifier onlyAuthorized() {
        require(authorizedUsers[msg.sender], "Not authorized");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function addDocument(uint256 docId, string memory content) public onlyAdmin {
        documents[docId] = content;
        emit DocumentAdded(docId);
    }

    function grantAccess(address user) public onlyAdmin {
        authorizedUsers[user] = true;
        emit AccessGranted(user);
    }

    function revokeAccess(address user) public onlyAdmin {
        authorizedUsers[user] = false;
        emit AccessRevoked(user);
    }

    function viewDocument(uint256 docId) public view onlyAuthorized returns (string memory) {
        return documents[docId];
    }
}
