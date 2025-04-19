const hre = require("hardhat");

async function main() {
  const EquipmentMaintenance = await hre.ethers.getContractFactory("EquipmentMaintenance");
  const maintenance = await EquipmentMaintenance.deploy();
  await maintenance.deployed();
  console.log("EquipmentMaintenance deployed to:", maintenance.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
