const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    // Deploy the MultiSigWallet contract
    const MultiSigWallet = await hre.ethers.getContractFactory("MultiSigWallet");
    const owners = [deployer.address]; // Add more addresses as needed
    const requiredApprovals = 1;
    const wallet = await MultiSigWallet.deploy(owners, requiredApprovals);
    await wallet.deployed();
    console.log(`MultiSigWallet deployed at: ${wallet.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
