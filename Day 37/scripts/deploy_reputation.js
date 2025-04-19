const hre = require("hardhat");

async function main() {
  const ReputationSystem = await hre.ethers.getContractFactory("ReputationSystem");
  const reputation = await ReputationSystem.deploy();

  await reputation.deployed();
  console.log("ReputationSystem deployed to:", reputation.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
