const hre = require("hardhat");

async function main() {
  const [owner, ...owners] = await hre.ethers.getSigners();
  const requiredApprovals = 2; // Number of required approvals for transaction execution

  const MultiSigWallet = await hre.ethers.getContractFactory("MultiSigWallet");
  const multiSigWallet = await MultiSigWallet.deploy(owners.map(owner => owner.address), requiredApprovals);

  await multiSigWallet.deployed();

  console.log("MultiSigWallet deployed to:", multiSigWallet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
