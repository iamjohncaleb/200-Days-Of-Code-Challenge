const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    // Deploy the SubscriptionService contract
    const SubscriptionService = await hre.ethers.getContractFactory("SubscriptionService");
    const subscriptionFee = hre.ethers.utils.parseEther("0.1"); // Example fee: 0.1 ETH
    const subscriptionService = await SubscriptionService.deploy(subscriptionFee);
    await subscriptionService.deployed();
    console.log(`SubscriptionService deployed at: ${subscriptionService.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});