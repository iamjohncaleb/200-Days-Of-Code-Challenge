const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with:", deployer.address);

    const StakingSmartContract = await ethers.getContractFactory("StakingSmartContract");
    const stakingContract = await StakingSmartContract.deploy("TOKEN_ADDRESS", "100000000000000000");
    await stakingContract.deployed();

    console.log("StakingSmartContract deployed to:", stakingContract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});