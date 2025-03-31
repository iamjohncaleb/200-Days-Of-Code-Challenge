const { ethers } = require("hardhat");

async function main() {
    const [buyer, seller, arbiter] = await ethers.getSigners();
    console.log("Deploying contract with buyer:", buyer.address);

    const EscrowSmartContract = await ethers.getContractFactory("EscrowSmartContract");
    const escrowContract = await EscrowSmartContract.deploy(seller.address, arbiter.address);
    await escrowContract.deployed();

    console.log("EscrowSmartContract deployed to:", escrowContract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});