import { ethers } from "hardhat";

async function main() {
  const EquipmentLeasing = await ethers.getContractFactory("EquipmentLeasing");
  const leasing = await EquipmentLeasing.deploy();

  await leasing.deployed();
  console.log(`✅ EquipmentLeasing deployed to: ${leasing.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
