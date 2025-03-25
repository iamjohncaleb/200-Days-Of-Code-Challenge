const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    // Deploy the SimpleNFT contract
    const SimpleNFT = await hre.ethers.getContractFactory("SimpleNFT");
    const simpleNFT = await SimpleNFT.deploy();
    await simpleNFT.deployed();
    console.log(`SimpleNFT deployed at: ${simpleNFT.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});