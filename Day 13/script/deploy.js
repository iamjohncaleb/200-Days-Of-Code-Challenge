const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    const goal = hre.ethers.parseEther("10"); // 10 ETH goal
    const duration = 604800; // 7 days in seconds

    // Deploy Crowdfunding contract
    const Crowdfunding = await hre.ethers.getContractFactory("Crowdfunding");
    const crowdfunding = await Crowdfunding.deploy(goal, duration);

    await crowdfunding.waitForDeployment();
    console.log(`Crowdfunding contract deployed at: ${crowdfunding.target}`);
}

// Handle errors
main().catch((error) => {
    console.error("Deployment failed:", error);
    process.exitCode = 1;
});
