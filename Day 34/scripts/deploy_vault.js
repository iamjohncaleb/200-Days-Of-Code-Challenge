const hre = require("hardhat");

async function main() {
  const Vault = await hre.ethers.getContractFactory("TimeLockedVault");
  const vault = await Vault.deploy();

  await vault.deployed();
  console.log("TimeLockedVault deployed to:", vault.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
