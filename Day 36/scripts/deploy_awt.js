const hre = require("hardhat");

async function main() {
  const AntiWhaleToken = await hre.ethers.getContractFactory("AntiWhaleToken");
  const awt = await AntiWhaleToken.deploy();

  await awt.deployed();
  console.log("AntiWhaleToken deployed to:", awt.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
