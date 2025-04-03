const hre = require("hardhat");

async function main() {
  const WeatherChecker = await hre.ethers.getContractFactory("WeatherChecker");
  const weatherChecker = await WeatherChecker.deploy();

  await weatherChecker.deployed();
  console.log("WeatherChecker deployed to:", weatherChecker.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});