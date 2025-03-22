// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WeatherChecker {
    address public owner;
    address public oracle; // Your Oracle address that updates weather data goes here.....

    struct WeatherData {
        int256 temperature; // Should be in Celsius
        string condition; // e.g., "Sunny", "Rainy"
        uint256 timestamp;
    }

    WeatherData public latestWeather;

    event WeatherUpdated(int256 temperature, string condition, uint256 timestamp);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    modifier onlyOracle() {
        require(msg.sender == oracle, "Only oracle can update weather data");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function setOracle(address _oracle) public onlyOwner {
        oracle = _oracle;
    }

    function updateWeather(int256 _temperature, string memory _condition) public onlyOracle {
        latestWeather = WeatherData(_temperature, _condition, block.timestamp);
        emit WeatherUpdated(_temperature, _condition, block.timestamp);
    }

    function getLatestWeather() public view returns (int256, string memory, uint256) {
        return (latestWeather.temperature, latestWeather.condition, latestWeather.timestamp);
    }
}
