const hre = require("hardhat");

async function main() {
  const GovernanceToken = await hre.ethers.getContractFactory("GovernanceToken");
  const governanceToken = await GovernanceToken.deploy();

  await governanceToken.deployed();
  console.log("GovernanceToken deployed to:", governanceToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
