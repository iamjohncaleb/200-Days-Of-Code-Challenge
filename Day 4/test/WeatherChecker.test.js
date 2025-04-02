const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("WeatherChecker", function () {
  let weatherChecker, owner, user;
  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();
    const WeatherChecker = await ethers.getContractFactory("WeatherChecker");
    weatherChecker = await WeatherChecker.deploy();
    await weatherChecker.deployed();
  });

  it("should allow owner to update temperature", async function () {
    await weatherChecker.updateTemperature("New York", 25);
    expect(await weatherChecker.getTemperature("New York")).to.equal(25);
  });
});
