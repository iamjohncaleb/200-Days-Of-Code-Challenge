const hre = require("hardhat");

async function main() {
  const FlashLoan = await hre.ethers.getContractFactory("FlashLoan");
  const flashLoan = await FlashLoan.deploy("0xYourTokenAddressHere");

  await flashLoan.deployed();
  console.log("FlashLoan deployed to:", flashLoan.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});