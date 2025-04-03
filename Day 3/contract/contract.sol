// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AdvancedLottery {
    address public manager;
    address[] public players;

    event PlayerEntered(address indexed player);
    event WinnerSelected(address indexed winner);

    modifier onlyManager() {
        require(msg.sender == manager, "Only manager can call this function");
        _;
    }

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value == 0.1 ether, "Entry fee is 0.1 ETH");
        players.push(msg.sender);
        emit PlayerEntered(msg.sender);
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }

    function pickWinner() public onlyManager {
        require(players.length > 0, "No players entered");
        uint256 index = random() % players.length;
        address winner = players[index];
        payable(winner).transfer(address(this).balance);
        emit WinnerSelected(winner);
        players = new address[](0);
    }

    function random() private view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(block.timestamp, players)));
    }
}