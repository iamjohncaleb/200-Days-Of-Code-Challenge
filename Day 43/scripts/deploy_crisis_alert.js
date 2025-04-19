const hre = require("hardhat");

async function main() {
  const CrisisAlert = await hre.ethers.getContractFactory("CrisisAlert");
  const crisisAlert = await CrisisAlert.deploy();
  await crisisAlert.deployed();
  console.log("CrisisAlert deployed to:", crisisAlert.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
