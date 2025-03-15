// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PredictionMarket {
    struct Bet {
        uint256 amount;
        bool prediction; // true = YES, false = NO
    }

    mapping(address => Bet) public bets;
    uint256 public totalYesBets;
    uint256 public totalNoBets;
    uint256 public bettingDeadline;
    uint256 public resultTime;
    bool public eventResult;
    bool public resultDeclared;
    address public admin;

    event BetPlaced(address indexed user, uint256 amount, bool prediction);
    event ResultDeclared(bool outcome);
    event Payout(address indexed user, uint256 amount);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this");
        _;
    }

    modifier beforeDeadline() {
        require(block.timestamp < bettingDeadline, "Betting closed");
        _;
    }

    modifier afterResult() {
        require(resultDeclared, "Result not declared yet");
        _;
    }

    constructor(uint256 _bettingDuration, uint256 _resultDuration) {
        admin = msg.sender;
        bettingDeadline = block.timestamp + _bettingDuration;
        resultTime = bettingDeadline + _resultDuration;
    }

    function placeBet(bool prediction) public payable beforeDeadline {
        require(msg.value > 0, "Bet amount must be greater than zero");
        require(bets[msg.sender].amount == 0, "Already placed a bet");

        bets[msg.sender] = Bet(msg.value, prediction);

        if (prediction) {
            totalYesBets += msg.value;
        } else {
            totalNoBets += msg.value;
        }

        emit BetPlaced(msg.sender, msg.value, prediction);
    }

    function declareResult(bool outcome) public onlyAdmin {
        require(block.timestamp >= resultTime, "Result time not reached");
        require(!resultDeclared, "Result already declared");

        eventResult = outcome;
        resultDeclared = true;

        emit ResultDeclared(outcome);
    }

    function claimReward() public afterResult {
        require(bets[msg.sender].amount > 0, "No bet placed");

        bool userPrediction = bets[msg.sender].prediction;
        uint256 userBetAmount = bets[msg.sender].amount;
        uint256 totalWinningPool = eventResult ? totalYesBets : totalNoBets;
        uint256 totalLosingPool = eventResult ? totalNoBets : totalYesBets;

        require(userPrediction == eventResult, "Incorrect prediction");

        uint256 reward = userBetAmount + (userBetAmount * totalLosingPool / totalWinningPool);
        bets[msg.sender].amount = 0; // Prevent double claim

        payable(msg.sender).transfer(reward);
        emit Payout(msg.sender, reward);
    }

    function getPoolSizes() public view returns (uint256, uint256) {
        return (totalYesBets, totalNoBets);
    }
}
