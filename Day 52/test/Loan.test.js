const { expect } = require("chai");

describe("AgriculturalLoanDisbursement", function () {
  let contract, owner, farmer;

  beforeEach(async () => {
    [owner, farmer] = await ethers.getSigners();
    const Loan = await ethers.getContractFactory("AgriculturalLoanDisbursement");
    contract = await Loan.deploy();
    await contract.deployed();
  });

  it("Should allow farmers to apply for loan", async () => {
    await contract.connect(farmer).applyForLoan(ethers.utils.parseEther("1"));
    const application = await contract.applications(0);
    expect(application.applicant).to.equal(farmer.address);
  });

  it("Admin can approve and disburse loan", async () => {
    await contract.connect(farmer).applyForLoan(ethers.utils.parseEther("1"));
    await contract.approveLoan(0);
    await owner.sendTransaction({ to: contract.address, value: ethers.utils.parseEther("1") });
    await contract.disburseLoan(0);
    expect(await ethers.provider.getBalance(farmer.address)).to.be.above(0);
  });
});
