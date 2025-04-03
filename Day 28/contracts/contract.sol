// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DecentralizedVoting {
    struct Proposal {
        string description;
        uint voteCount;
    }

    address public admin;
    mapping(address => bool) public voters;
    Proposal[] public proposals;
    mapping(address => bool) public hasVoted;

    event ProposalCreated(uint indexed proposalId, string description);
    event Voted(address indexed voter, uint indexed proposalId);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier onlyVoter() {
        require(voters[msg.sender], "Only registered voters can vote");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function registerVoter(address voter) external onlyAdmin {
        voters[voter] = true;
    }

    function createProposal(string memory description) external onlyAdmin {
        proposals.push(Proposal(description, 0));
        emit ProposalCreated(proposals.length - 1, description);
    }

    function vote(uint proposalId) external onlyVoter {
        require(!hasVoted[msg.sender], "Voter has already voted");
        require(proposalId < proposals.length, "Invalid proposal ID");

        proposals[proposalId].voteCount++;
        hasVoted[msg.sender] = true;
        emit Voted(msg.sender, proposalId);
    }

    function getProposal(uint proposalId) external view returns (string memory, uint) {
        require(proposalId < proposals.length, "Invalid proposal ID");
        return (proposals[proposalId].description, proposals[proposalId].voteCount);
    }
}
