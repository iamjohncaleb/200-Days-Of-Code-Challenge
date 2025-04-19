const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const SecureElectionVoting = await hre.ethers.getContractFactory("SecureElectionVoting");
    const electionContract = await SecureElectionVoting.deploy();
    await electionContract.deployed();

    console.log("SecureElectionVoting deployed to:", electionContract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
