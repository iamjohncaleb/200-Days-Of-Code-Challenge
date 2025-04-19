const hre = require("hardhat");

async function main() {
  const targetBridgeAddress = "0x000000000000000000000000000000000000dEaD"; // Replace with actual target bridge address
  const TokenBridge = await hre.ethers.getContractFactory("TokenBridge");
  const tokenBridge = await TokenBridge.deploy(targetBridgeAddress);

  await tokenBridge.deployed();
  console.log("TokenBridge deployed to:", tokenBridge.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
