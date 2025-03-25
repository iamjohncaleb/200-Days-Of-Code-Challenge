// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DecentralizedID {
    struct Identity {
        string name;
        string email;
        uint256 dateOfBirth;
        bool verified;
    }

    mapping(address => Identity) public identities;
    address public admin;

    event IdentityRegistered(address indexed user, string name);
    event IdentityVerified(address indexed user);

    constructor() {
        admin = msg.sender;
    }

    function registerIdentity(string memory _name, string memory _email, uint256 _dob) public {
        require(bytes(identities[msg.sender].name).length == 0, "Already registered");

        identities[msg.sender] = Identity(_name, _email, _dob, false);
        emit IdentityRegistered(msg.sender, _name);
    }

    function verifyIdentity(address _user) public {
        require(msg.sender == admin, "Only admin can verify");

        identities[_user].verified = true;
        emit IdentityVerified(_user);
    }
}
