// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract WeatherChecker {
    address public owner;
    mapping(string => int256) public cityTemperatures;
    
    event TemperatureUpdated(string city, int256 temperature);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can update temperatures");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function updateTemperature(string memory city, int256 temperature) public onlyOwner {
        cityTemperatures[city] = temperature;
        emit TemperatureUpdated(city, temperature);
    }

    function getTemperature(string memory city) public view returns (int256) {
        return cityTemperatures[city];
    }
}