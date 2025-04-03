const hre = require("hardhat");

async function main() {
  const TokenVesting = await hre.ethers.getContractFactory("TokenVesting");
  const tokenVesting = await TokenVesting.deploy("0xTokenAddress", "0xBeneficiaryAddress", 1700000000, 1705000000, 1000);

  await tokenVesting.deployed();
  console.log("TokenVesting deployed to:", tokenVesting.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});