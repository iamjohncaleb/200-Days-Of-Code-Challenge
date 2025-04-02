const hre = require("hardhat");

async function main() {
  const AdvancedCalculator = await hre.ethers.getContractFactory("AdvancedCalculator");
  const calculator = await AdvancedCalculator.deploy();

  await calculator.deployed();
  console.log("AdvancedCalculator deployed to:", calculator.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});