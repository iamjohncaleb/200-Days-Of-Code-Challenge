const hre = require("hardhat");

async function main() {
  const initialSupply = 1000000;
  const oracleAddress = "0x000000000000000000000000000000000000dEaD"; // Replace with actual oracle address

  const AlgorithmicStablecoin = await hre.ethers.getContractFactory("AlgorithmicStablecoin");
  const stablecoin = await AlgorithmicStablecoin.deploy(initialSupply, oracleAddress);

  await stablecoin.deployed();
  console.log("AlgorithmicStablecoin deployed to:", stablecoin.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
