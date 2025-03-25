const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    // Deploy the Crowdfunding contract
    const Crowdfunding = await hre.ethers.getContractFactory("Crowdfunding");
    const goal = hre.ethers.utils.parseEther("10"); // Example goal: 10 ETH
    const duration = 604800; // Example duration: 7 days
    const crowdfunding = await Crowdfunding.deploy(goal, duration);
    await crowdfunding.deployed();
    console.log(`Crowdfunding deployed at: ${crowdfunding.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});