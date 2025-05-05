import { ethers } from "hardhat";

async function main() {
  const Contract = await ethers.getContractFactory("AgriCrowdFunding");
  const deployed = await Contract.deploy();
  await deployed.deployed();
  console.log(`Contract deployed to: ${deployed.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
