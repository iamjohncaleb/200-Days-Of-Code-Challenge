const hre = require("hardhat");

async function main() {
  const AdvancedLottery = await hre.ethers.getContractFactory("AdvancedLottery");
  const lottery = await AdvancedLottery.deploy();

  await lottery.deployed();
  console.log("AdvancedLottery deployed to:", lottery.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});