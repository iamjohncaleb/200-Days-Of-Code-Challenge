// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Proposal {
        string name;
        uint256 voteCount;
    }

    address public owner;
    mapping(address => bool) public hasVoted;
    Proposal[] public proposals;

    event Voted(address indexed voter, uint256 proposalIndex);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can add proposals");
        _;
    }

    constructor(string[] memory proposalNames) {
        owner = msg.sender;
        for (uint256 i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal(proposalNames[i], 0));
        }
    }

    function vote(uint256 proposalIndex) public {
        require(!hasVoted[msg.sender], "You have already voted");
        require(proposalIndex < proposals.length, "Invalid proposal");

        hasVoted[msg.sender] = true;
        proposals[proposalIndex].voteCount += 1;

        emit Voted(msg.sender, proposalIndex);
    }

    function getWinner() public view returns (string memory) {
        uint256 maxVotes = 0;
        uint256 winnerIndex;
        for (uint256 i = 0; i < proposals.length; i++) {
            if (proposals[i].voteCount > maxVotes) {
                maxVotes = proposals[i].voteCount;
                winnerIndex = i;
            }
        }
        return proposals[winnerIndex].name;
    }
}
