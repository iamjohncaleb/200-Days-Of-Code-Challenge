// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GovernanceToken {
    string public name = "GovernanceToken";
    string public symbol = "GOV";
    uint256 public totalSupply = 1000000 * 10**18;
    mapping(address => uint256) public balances;
    mapping(address => mapping(address => uint256)) public allowances;

    struct Proposal {
        string description;
        uint256 voteCount;
    }

    Proposal[] public proposals;
    mapping(address => mapping(uint256 => bool)) public voted;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event ProposalCreated(uint256 proposalId, string description);
    event Voted(address indexed voter, uint256 proposalId);

    constructor() {
        balances[msg.sender] = totalSupply;
    }

    function transfer(address to, uint256 amount) public returns (bool) {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[to] += amount;
        emit Transfer(msg.sender, to, amount);
        return true;
    }

    function createProposal(string memory description) public {
        proposals.push(Proposal({ description: description, voteCount: 0 }));
        emit ProposalCreated(proposals.length - 1, description);
    }

    function vote(uint256 proposalId) public {
        require(!voted[msg.sender][proposalId], "Already voted");

        proposals[proposalId].voteCount += balances[msg.sender];
        voted[msg.sender][proposalId] = true;

        emit Voted(msg.sender, proposalId);
    }

    function getWinningProposal() public view returns (string memory) {
        uint256 maxVotes = 0;
        string memory winningProposal;

        for (uint256 i = 0; i < proposals.length; i++) {
            if (proposals[i].voteCount > maxVotes) {
                maxVotes = proposals[i].voteCount;
                winningProposal = proposals[i].description;
            }
        }

        return winningProposal;
    }
}
