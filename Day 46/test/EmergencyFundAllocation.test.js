const { expect } = require("chai");

describe("EmergencyFundAllocation", function () {
    let FundAllocation, fundAllocation, owner, addr1, addr2;

    beforeEach(async () => {
        FundAllocation = await ethers.getContractFactory("EmergencyFundAllocation");
        [owner, addr1, addr2] = await ethers.getSigners();
        fundAllocation = await FundAllocation.deploy();
        await fundAllocation.deployed();
    });

    it("should allow the authority to allocate funds", async function () {
        await fundAllocation.allocateFund(addr1.address, 1000);
        expect(await fundAllocation.checkAllocation(addr1.address)).to.equal(1000);
    });

    it("should allow the allocated person to claim their funds", async function () {
        await fundAllocation.allocateFund(addr1.address, 1000);
        await fundAllocation.connect(addr1).claimFund();
        expect(await fundAllocation.checkAllocation(addr1.address)).to.equal(0);
    });

    it("should not allow a person to claim more than once", async function () {
        await fundAllocation.allocateFund(addr1.address, 1000);
        await fundAllocation.connect(addr1).claimFund();
        await expect(fundAllocation.connect(addr1).claimFund()).to.be.revertedWith("You have already claimed your allocation");
    });

    it("should track total fund", async function () {
        await fundAllocation.deposit({ value: ethers.utils.parseEther("5") });
        expect(await fundAllocation.totalFund()).to.equal(ethers.utils.parseEther("5"));
    });
});
