const hre = require("hardhat");

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftMarketplace = await NFTMarketplace.deploy();

  await nftMarketplace.deployed();
  console.log("NFTMarketplace deployed to:", nftMarketplace.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});