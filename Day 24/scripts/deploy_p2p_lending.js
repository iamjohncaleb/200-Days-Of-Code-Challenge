const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with:", deployer.address);

    const P2PLendingSmartContract = await ethers.getContractFactory("P2PLendingSmartContract");
    const lendingContract = await P2PLendingSmartContract.deploy("TOKEN_ADDRESS", "5");
    await lendingContract.deployed();

    console.log("P2PLendingSmartContract deployed to:", lendingContract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});