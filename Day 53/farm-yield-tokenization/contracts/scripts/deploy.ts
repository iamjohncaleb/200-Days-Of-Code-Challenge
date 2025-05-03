import { ethers } from "hardhat";

async function main() {
  const FarmYieldToken = await ethers.getContractFactory("FarmYieldToken");
  const farmYieldToken = await FarmYieldToken.deploy();
  await farmYieldToken.waitForDeployment();

  console.log(`✅ FarmYieldToken deployed to: ${farmYieldToken.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});