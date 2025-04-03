const hre = require("hardhat");

async function main() {
  const DecentralizedID = await hre.ethers.getContractFactory("DecentralizedID");
  const decentralizedID = await DecentralizedID.deploy();

  await decentralizedID.deployed();
  console.log("DecentralizedID deployed to:", decentralizedID.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});