const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    // Deploy ERC20Mock token
    const Token = await hre.ethers.getContractFactory("ERC20Mock");
    const token = await Token.deploy("TestToken", "TTK", 18, hre.ethers.parseEther("1000000"));
    await token.waitForDeployment();
    console.log(`Mock ERC20 deployed at: ${await token.getAddress()}`);

    // Deploy Airdrop contract
    const Airdrop = await hre.ethers.getContractFactory("Airdrop");
    const airdrop = await Airdrop.deploy(await token.getAddress());
    await airdrop.waitForDeployment();
    console.log(`Airdrop deployed at: ${await airdrop.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
