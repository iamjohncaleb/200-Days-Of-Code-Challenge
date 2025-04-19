const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const DataIntegrityRegistry = await hre.ethers.getContractFactory("DataIntegrityRegistry");
    const registryContract = await DataIntegrityRegistry.deploy();
    await registryContract.deployed();

    console.log("DataIntegrityRegistry deployed to:", registryContract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
