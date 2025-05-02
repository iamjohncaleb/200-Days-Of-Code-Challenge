const { expect } = require("chai");

describe("CropInsurance Contract", function () {
  let CropInsurance, insurance, owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    CropInsurance = await ethers.getContractFactory("CropInsurance");
    insurance = await CropInsurance.deploy(ethers.utils.parseEther("1"), ethers.utils.parseEther("10"));
  });

  it("Should deploy the contract and set the insurer", async function () {
    expect(await insurance.insurer()).to.equal(owner.address);
  });

  it("Should allow a user to purchase insurance", async function () {
    await insurance.connect(addr1).purchaseInsurance({ value: ethers.utils.parseEther("1") });
    expect(await insurance.policyholders(addr1.address)).to.equal(true);
  });

  it("Should allow a user to make a claim", async function () {
    await insurance.connect(addr1).purchaseInsurance({ value: ethers.utils.parseEther("1") });
    await insurance.connect(addr1).makeClaim();
    expect(await insurance.claimsMade(addr1.address)).to.equal(true);
  });

  it("Should issue payout correctly", async function () {
    await insurance.connect(addr1).purchaseInsurance({ value: ethers.utils.parseEther("1") });
    await insurance.connect(addr1).makeClaim();

    const initialBalance = await ethers.provider.getBalance(addr1.address);
    await insurance.issuePayout(addr1.address);

    const finalBalance = await ethers.provider.getBalance(addr1.address);
    expect(finalBalance).to.be.above(initialBalance);
  });
});
