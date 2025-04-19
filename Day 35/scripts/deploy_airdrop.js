const hre = require("hardhat");

async function main() {
  const tokenAddress = "0xYourTokenAddressHere"; // replace with actual deployed token address
  const Airdrop = await hre.ethers.getContractFactory("Airdrop");
  const airdrop = await Airdrop.deploy(tokenAddress);

  await airdrop.deployed();
  console.log("Airdrop contract deployed to:", airdrop.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
