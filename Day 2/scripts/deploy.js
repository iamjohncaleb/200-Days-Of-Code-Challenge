const hre = require("hardhat");

async function main() {
  const unlockTime = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now
  const AdvancedTimeLock = await hre.ethers.getContractFactory("AdvancedTimeLock");
  const timeLock = await AdvancedTimeLock.deploy(unlockTime);

  await timeLock.deployed();
  console.log("AdvancedTimeLock deployed to:", timeLock.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});