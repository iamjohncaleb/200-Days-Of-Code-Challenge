const { ethers } = require("hardhat");

async function main() {
    const SimpleAuction = await ethers.getContractFactory("SimpleAuction");
    const auction = await SimpleAuction.deploy(); // No need for .deployed()

    console.log(`SimpleAuction deployed to: ${auction.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
