// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lottery {
    address public owner;
    address[] public players;
    
    event PlayerEntered(address indexed player);
    event WinnerPicked(address indexed winner, uint256 prize);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can pick a winner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function enter() public payable {
        require(msg.value >= 0.01 ether, "Minimum entry is 0.01 ETH");
        players.push(msg.sender);
        emit PlayerEntered(msg.sender);
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }

    function pickWinner() public onlyOwner {
        require(players.length > 0, "No players in the lottery");
        
        uint256 randomIndex = uint256(
            keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender))
        ) % players.length;

        address winner = players[randomIndex];
        uint256 prize = address(this).balance;

        // Transfer funds to the winner
        (bool success, ) = payable(winner).call{value: prize}("");
        require(success, "Transfer failed");

        emit WinnerPicked(winner, prize);

        // Reset the lottery for the next round
        delete players;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    receive() external payable {} // Allow contract to receive ETH
}
