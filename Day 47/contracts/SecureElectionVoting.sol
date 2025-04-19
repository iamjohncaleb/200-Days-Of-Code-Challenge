// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SecureElectionVoting {
    address public admin;
    uint256 public electionStartTime;
    uint256 public electionEndTime;
    string public electionTitle;
    bool public electionActive;

    mapping(address => bool) public voters;
    mapping(string => uint256) public candidateVotes;
    string[] public candidates;

    event ElectionStarted(string title, uint256 startTime, uint256 endTime);
    event ElectionEnded(string title, bool result);
    event Voted(address indexed voter, string candidate);
    event NewCandidateAdded(string candidate);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this");
        _;
    }

    modifier electionInProgress() {
        require(electionActive, "Election is not active");
        _;
    }

    modifier electionEnded() {
        require(!electionActive, "Election is still active");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function startElection(string memory _title, uint256 _duration, string[] memory _candidates) external onlyAdmin {
        require(!electionActive, "Election already active");
        electionTitle = _title;
        electionStartTime = block.timestamp;
        electionEndTime = block.timestamp + _duration;
        candidates = _candidates;
        electionActive = true;

        emit ElectionStarted(_title, electionStartTime, electionEndTime);
    }

    function addCandidate(string memory _candidate) external onlyAdmin electionInProgress {
        candidates.push(_candidate);
        emit NewCandidateAdded(_candidate);
    }

    function vote(string memory _candidate) external electionInProgress {
        require(!voters[msg.sender], "You have already voted");
        require(candidateExists(_candidate), "Candidate does not exist");

        voters[msg.sender] = true;
        candidateVotes[_candidate]++;

        emit Voted(msg.sender, _candidate);
    }

    function endElection() external onlyAdmin electionInProgress {
        require(block.timestamp >= electionEndTime, "Election has not ended yet");

        electionActive = false;
        string memory winner = getWinner();

        emit ElectionEnded(electionTitle, winner);
    }

    function getWinner() public view returns (string memory) {
        uint256 maxVotes = 0;
        string memory winner;

        for (uint256 i = 0; i < candidates.length; i++) {
            if (candidateVotes[candidates[i]] > maxVotes) {
                maxVotes = candidateVotes[candidates[i]];
                winner = candidates[i];
            }
        }

        return winner;
    }

    function candidateExists(string memory _candidate) internal view returns (bool) {
        for (uint256 i = 0; i < candidates.length; i++) {
            if (keccak256(abi.encodePacked(candidates[i])) == keccak256(abi.encodePacked(_candidate))) {
                return true;
            }
        }
        return false;
    }
}
