const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    const TokenVesting = await ethers.getContractFactory("TokenVesting");
    const tokenAddress = "YOUR_ERC20_TOKEN_ADDRESS";
    const beneficiary = "BENEFICIARY_WALLET_ADDRESS";
    const duration = 365 * 24 * 60 * 60; // 1 year

    const vestingContract = await TokenVesting.deploy(tokenAddress, beneficiary, duration);
    await vestingContract.deployed();

    console.log("TokenVesting deployed to:", vestingContract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
