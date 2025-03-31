const hre = require("hardhat");

async function main() {
  const NFTAuction = await hre.ethers.getContractFactory("NFTAuction");
  const nftAuction = await NFTAuction.deploy();

  await nftAuction.deployed();
  console.log("NFTAuction deployed to:", nftAuction.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});