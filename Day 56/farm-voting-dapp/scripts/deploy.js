const hre = require("hardhat");

async function main() {
  const FarmCoopVoting = await hre.ethers.getContractFactory("FarmCoopVoting");
  const contract = await FarmCoopVoting.deploy(["Buy equipment", "Hire workers", "Expand land"]);
  await contract.deployed();

  console.log("FarmCoopVoting deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
