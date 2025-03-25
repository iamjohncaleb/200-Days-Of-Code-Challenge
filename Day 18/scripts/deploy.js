const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    // Deploy the EnhancedNFT contract
    const EnhancedNFT = await hre.ethers.getContractFactory("EnhancedNFT");
    const maxSupply = 10000;
    const mintPrice = hre.ethers.utils.parseEther("0.05");
    
    const nftContract = await EnhancedNFT.deploy(maxSupply, mintPrice);
    await nftContract.deployed();
    console.log(`EnhancedNFT deployed at: ${nftContract.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});