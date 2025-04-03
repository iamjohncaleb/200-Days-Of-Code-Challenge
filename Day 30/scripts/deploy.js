const hre = require("hardhat");

async function main() {
  const LiquidityPool = await hre.ethers.getContractFactory("LiquidityPool");
  const liquidityPool = await LiquidityPool.deploy("0xTokenAAddress", "0xTokenBAddress");

  await liquidityPool.deployed();
  console.log("LiquidityPool deployed to:", liquidityPool.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});