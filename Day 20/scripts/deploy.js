const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    const WarFundCrowdfunding = await ethers.getContractFactory("WarFundCrowdfunding");
    const goal = ethers.utils.parseEther("100"); // Example goal: 100 ETH
    const duration = 30 * 24 * 60 * 60; // 30 days

    const crowdfunding = await WarFundCrowdfunding.deploy(goal, duration);
    await crowdfunding.deployed();

    console.log("WarFundCrowdfunding deployed to:", crowdfunding.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});