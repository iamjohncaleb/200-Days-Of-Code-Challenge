const hre = require("hardhat");

async function main() {
  const AccessControl = await hre.ethers.getContractFactory("ClassifiedDocumentAccessControl");
  const accessControl = await AccessControl.deploy();
  await accessControl.deployed();

  console.log("ClassifiedDocumentAccessControl deployed to:", accessControl.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
