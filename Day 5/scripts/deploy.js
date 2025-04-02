const hre = require("hardhat");

async function main() {
  const TimeLock = await hre.ethers.getContractFactory("TimeLock");
  const timeLock = await TimeLock.deploy(3600);

  await timeLock.deployed();
  console.log("TimeLock deployed to:", timeLock.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});