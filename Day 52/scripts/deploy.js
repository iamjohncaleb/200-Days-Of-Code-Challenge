async function main() {
    const Loan = await ethers.getContractFactory("AgriculturalLoanDisbursement");
    const contract = await Loan.deploy();
    await contract.deployed();
    console.log(`Contract deployed at ${contract.address}`);
  }
  
  main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
  });
  