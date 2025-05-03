import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const CommodityFutures = await ethers.getContractFactory("CommodityFutures");
    const commodityFutures = await CommodityFutures.deploy();
    console.log("CommodityFutures contract deployed to:", commodityFutures.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
