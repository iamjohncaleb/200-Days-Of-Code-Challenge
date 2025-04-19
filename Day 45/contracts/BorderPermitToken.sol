// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BorderPermitToken {
    string public name = "Border Permit Token";
    string public symbol = "BPT";
    uint8 public decimals = 0;
    uint256 public totalSupply;

    address public authority;

    mapping(address => uint256) public balances;
    mapping(address => bool) public permits;

    event PermitIssued(address indexed holder);
    event PermitRevoked(address indexed holder);

    modifier onlyAuthority() {
        require(msg.sender == authority, "Not authorized");
        _;
    }

    constructor() {
        authority = msg.sender;
    }

    function issuePermit(address holder) public onlyAuthority {
        require(!permits[holder], "Permit already issued");
        permits[holder] = true;
        balances[holder] = 1;
        totalSupply += 1;
        emit PermitIssued(holder);
    }

    function revokePermit(address holder) public onlyAuthority {
        require(permits[holder], "No permit to revoke");
        permits[holder] = false;
        balances[holder] = 0;
        totalSupply -= 1;
        emit PermitRevoked(holder);
    }

    function hasPermit(address holder) public view returns (bool) {
        return permits[holder];
    }
}
