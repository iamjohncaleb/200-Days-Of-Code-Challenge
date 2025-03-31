const hre = require("hardhat");

async function main() {
  const SubscriptionService = await hre.ethers.getContractFactory("SubscriptionService");
  const subscriptionService = await SubscriptionService.deploy(ethers.utils.parseEther("0.1"));

  await subscriptionService.deployed();
  console.log("SubscriptionService deployed to:", subscriptionService.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
