const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const EmergencyFundAllocation = await hre.ethers.getContractFactory("EmergencyFundAllocation");
    const fundAllocation = await EmergencyFundAllocation.deploy();
    await fundAllocation.deployed();

    console.log("EmergencyFundAllocation deployed to:", fundAllocation.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
