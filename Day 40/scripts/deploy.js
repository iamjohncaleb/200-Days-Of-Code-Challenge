const hre = require("hardhat");

async function main() {
  const bettingDuration = 3600; // 1 hour
  const resultDuration = 1800;  // 30 minutes

  const PredictionMarket = await hre.ethers.getContractFactory("PredictionMarket");
  const predictionMarket = await PredictionMarket.deploy(bettingDuration, resultDuration);

  await predictionMarket.deployed();

  console.log(`PredictionMarket deployed to: ${predictionMarket.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
