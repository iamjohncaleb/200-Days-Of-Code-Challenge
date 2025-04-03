const hre = require("hardhat");

async function main() {
    const [deployer, owner2, owner3] = await hre.ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    // Define owners (ensure at least 2 for real multisig usage)
    const owners = [deployer.address, owner2.address, owner3.address];
    const requiredApprovals = 2;

    // Deploy the MultiSigWallet contract
    const MultiSigWallet = await hre.ethers.getContractFactory("MultiSigWallet");
    const wallet = await MultiSigWallet.deploy(owners, requiredApprovals);
    await wallet.waitForDeployment();

    console.log(`MultiSigWallet deployed at: ${wallet.target}`);
}

main().catch((error) => {
    console.error("Deployment failed:", error);
    process.exitCode = 1;
});
