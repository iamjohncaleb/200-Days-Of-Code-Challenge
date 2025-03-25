const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    // Deploy the TokenVesting contract
    const TokenVesting = await hre.ethers.getContractFactory("TokenVesting");
    const tokenAddress = "0xTokenAddressHere"; // Replace with actual token address
    const beneficiary = "0xBeneficiaryAddressHere"; // Replace with actual beneficiary address
    const startTime = Math.floor(Date.now() / 1000); // Current timestamp
    const releaseTime = startTime + 60 * 60 * 24 * 30; // 30 days from now
    const amount = hre.ethers.utils.parseEther("100"); // Adjust token amount as needed
    
    const vesting = await TokenVesting.deploy(tokenAddress, beneficiary, startTime, releaseTime, amount);
    await vesting.deployed();
    console.log(`TokenVesting deployed at: ${vesting.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});