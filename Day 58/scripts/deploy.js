import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const SoilInputQualityVerification = await ethers.getContractFactory("SoilInputQualityVerification");
    const soilInputQualityVerification = await SoilInputQualityVerification.deploy();
    console.log("SoilInputQualityVerification contract deployed to:", soilInputQualityVerification.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
