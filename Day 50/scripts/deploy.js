const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const SatelliteImageryAccessNFT = await hre.ethers.getContractFactory("SatelliteImageryAccessNFT");
    const baseURI = "https://api.satelliteimages.com/metadata/"; // Base URI for satellite imagery metadata
    const nftContract = await SatelliteImageryAccessNFT.deploy(baseURI);
    await nftContract.deployed();

    console.log("SatelliteImageryAccessNFT deployed to:", nftContract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
