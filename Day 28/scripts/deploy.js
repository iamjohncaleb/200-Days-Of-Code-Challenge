const hre = require("hardhat");

async function main() {
  const DecentralizedVoting = await hre.ethers.getContractFactory("DecentralizedVoting");
  const decentralizedVoting = await DecentralizedVoting.deploy();

  await decentralizedVoting.deployed();
  console.log("DecentralizedVoting deployed to:", decentralizedVoting.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
