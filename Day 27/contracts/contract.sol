// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DecentralizedID {
    struct Identity {
        string name;
        string email;
        string metadata;
        bool exists;
    }

    mapping(address => Identity) private identities;

    event IdentityCreated(address indexed user, string name, string email, string metadata);
    event IdentityUpdated(address indexed user, string name, string email, string metadata);

    function createIdentity(string memory name, string memory email, string memory metadata) public {
        require(!identities[msg.sender].exists, "Identity already exists");
        
        identities[msg.sender] = Identity(name, email, metadata, true);
        emit IdentityCreated(msg.sender, name, email, metadata);
    }

    function updateIdentity(string memory name, string memory email, string memory metadata) public {
        require(identities[msg.sender].exists, "Identity does not exist");
        
        identities[msg.sender] = Identity(name, email, metadata, true);
        emit IdentityUpdated(msg.sender, name, email, metadata);
    }

    function getIdentity(address user) public view returns (string memory, string memory, string memory) {
        require(identities[user].exists, "Identity does not exist");
        
        Identity memory id = identities[user];
        return (id.name, id.email, id.metadata);
    }
}