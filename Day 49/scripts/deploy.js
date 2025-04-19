const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const CounterTerrorismMonitor = await hre.ethers.getContractFactory("CounterTerrorismMonitor");
    const suspiciousThreshold = hre.ethers.utils.parseEther("1000"); // 1000 ETH threshold for suspicious transactions
    const monitorContract = await CounterTerrorismMonitor.deploy(suspiciousThreshold);
    await monitorContract.deployed();

    console.log("CounterTerrorismMonitor deployed to:", monitorContract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
