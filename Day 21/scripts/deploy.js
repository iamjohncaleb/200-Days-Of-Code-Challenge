const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    const TwitterSmartContract = await ethers.getContractFactory("TwitterSmartContract");
    const twitterContract = await TwitterSmartContract.deploy();
    await twitterContract.deployed();

    console.log("TwitterSmartContract deployed to:", twitterContract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
