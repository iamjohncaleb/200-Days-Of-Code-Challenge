const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    // Deploy a mock ERC20 token for testing (optional)
    const Token = await hre.ethers.getContractFactory("ERC20Mock");
    const token = await Token.deploy("TestToken", "TTK", 18, hre.ethers.utils.parseEther("1000000"));
    await token.deployed();
    console.log(`Mock ERC20 deployed at: ${token.address}`);

    // Deploy the Airdrop contract
    const Airdrop = await hre.ethers.getContractFactory("Airdrop");
    const airdrop = await Airdrop.deploy(token.address);
    await airdrop.deployed();
    console.log(`Airdrop deployed at: ${airdrop.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});