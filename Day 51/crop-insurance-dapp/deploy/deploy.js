async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const Insurance = await ethers.getContractFactory("CropInsurance");
    const insurance = await Insurance.deploy(ethers.utils.parseEther("1"), ethers.utils.parseEther("10"));
    console.log("Insurance contract deployed to:", insurance.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  