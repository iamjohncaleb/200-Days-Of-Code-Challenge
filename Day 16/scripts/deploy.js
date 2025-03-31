const hre = require("hardhat");

async function main() {
  const [deployer, payee, arbiter] = await hre.ethers.getSigners();
  const AdvancedEscrow = await hre.ethers.getContractFactory("AdvancedEscrow");
  const escrow = await AdvancedEscrow.deploy(payee.address, arbiter.address, { value: hre.ethers.utils.parseEther("1") });

  await escrow.deployed();
  console.log("AdvancedEscrow deployed to:", escrow.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});