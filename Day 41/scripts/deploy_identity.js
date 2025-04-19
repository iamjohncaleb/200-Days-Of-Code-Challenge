const hre = require("hardhat");

async function main() {
  const SecureIdentity = await hre.ethers.getContractFactory("SecureIdentity");
  const identityContract = await SecureIdentity.deploy();
  await identityContract.deployed();

  console.log("SecureIdentity deployed to:", identityContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
