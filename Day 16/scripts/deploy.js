const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    // Deploy the Escrow contract
    const Escrow = await hre.ethers.getContractFactory("Escrow");
    const seller = "0xSellerAddressHere"; // Replace with actual seller address
    const arbiter = "0xArbiterAddressHere"; // Replace with actual arbiter address
    const escrow = await Escrow.deploy(seller, arbiter, { value: hre.ethers.utils.parseEther("1") });
    await escrow.deployed();
    console.log(`Escrow deployed at: ${escrow.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});