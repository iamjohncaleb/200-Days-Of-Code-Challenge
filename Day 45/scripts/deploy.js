const hre = require("hardhat");

async function main() {
  const BorderPermitToken = await hre.ethers.getContractFactory("BorderPermitToken");
  const token = await BorderPermitToken.deploy();
  await token.deployed();
  console.log("BorderPermitToken deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
