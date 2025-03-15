// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lottery {
    address payable[] public players;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    receive() external payable {}

    function enter() public payable {
        require(msg.value >= 0.01 ether, "Minimum entry is 0.01 ETH");
        players.push(payable(msg.sender));
    }

    function pickWinner() public {
        require(msg.sender == owner, "Only owner can pick the winner");
        require(players.length > 0, "No players in the lottery");

        uint index = random() % players.length;
        address payable winner = players[index];

        // Transfer the contract balance to the winner
        winner.transfer(address(this).balance);

        // Reset the lottery
        delete players;
    }

    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty, players.length)));
    }

    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }
}
