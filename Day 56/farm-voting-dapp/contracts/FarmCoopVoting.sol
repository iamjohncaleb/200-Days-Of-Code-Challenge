// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract FarmCoopVoting {
    struct Proposal {
        string description;
        uint voteCount;
    }

    address public chairperson;
    mapping(address => bool) public members;
    mapping(address => bool) public hasVoted;

    Proposal[] public proposals;

    event ProposalCreated(uint indexed id, string description);
    event Voted(address indexed voter, uint indexed proposalId);

    modifier onlyChair() {
        require(msg.sender == chairperson, "Only chairperson allowed");
        _;
    }

    modifier onlyMember() {
        require(members[msg.sender], "Only co-op members allowed");
        _;
    }

    constructor(string[] memory proposalNames) {
        chairperson = msg.sender;
        members[msg.sender] = true;

        for (uint i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal(proposalNames[i], 0));
            emit ProposalCreated(i, proposalNames[i]);
        }
    }

    function addMember(address member) public onlyChair {
        members[member] = true;
    }

    function vote(uint proposalId) public onlyMember {
        require(!hasVoted[msg.sender], "Already voted");
        require(proposalId < proposals.length, "Invalid proposal");

        hasVoted[msg.sender] = true;
        proposals[proposalId].voteCount++;
        emit Voted(msg.sender, proposalId);
    }

    function getProposal(uint index) public view returns (string memory desc, uint count) {
        Proposal storage p = proposals[index];
        return (p.description, p.voteCount);
    }

    function proposalCount() public view returns (uint) {
        return proposals.length;
    }
}
