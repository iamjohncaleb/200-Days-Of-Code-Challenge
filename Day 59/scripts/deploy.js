import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const SupplyChainTraceability = await ethers.getContractFactory("SupplyChainTraceability");
    const supplyChainTraceability = await SupplyChainTraceability.deploy();
    console.log("SupplyChainTraceability contract deployed to:", supplyChainTraceability.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
