// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SecureIdentity {
    struct Identity {
        string name;
        string nationalId;
        bool verified;
    }

    mapping(address => Identity) public identities;
    address public admin;

    event IdentityRegistered(address indexed user, string name, string nationalId);
    event IdentityVerified(address indexed user);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function registerIdentity(string memory name, string memory nationalId) public {
        identities[msg.sender] = Identity(name, nationalId, false);
        emit IdentityRegistered(msg.sender, name, nationalId);
    }

    function verifyIdentity(address user) public onlyAdmin {
        identities[user].verified = true;
        emit IdentityVerified(user);
    }

    function isVerified(address user) public view returns (bool) {
        return identities[user].verified;
    }
}
