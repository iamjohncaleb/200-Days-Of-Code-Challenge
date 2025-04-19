const { expect } = require("chai");

describe("CounterTerrorismMonitor", function () {
    let monitor, owner, addr1, addr2;
    const threshold = ethers.utils.parseEther("1000");

    beforeEach(async () => {
        [owner, addr1, addr2] = await ethers.getSigners();
        const CounterTerrorismMonitor = await ethers.getContractFactory("CounterTerrorismMonitor");
        monitor = await CounterTerrorismMonitor.deploy(threshold);
        await monitor.deployed();
    });

    it("should deploy with correct suspicious threshold", async function () {
        const currentThreshold = await monitor.suspiciousThreshold();
        expect(currentThreshold).to.equal(threshold);
    });

    it("should record a normal transaction", async function () {
        await monitor.deposit({ value: ethers.utils.parseEther("100") });
        await expect(monitor.transfer(addr1.address, ethers.utils.parseEther("50")))
            .to.emit(monitor, "TransactionRecorded")
            .withArgs(owner.address, addr1.address, ethers.utils.parseEther("50"));
    });

    it("should trigger suspicious transaction event", async function () {
        await monitor.deposit({ value: ethers.utils.parseEther("10000") });
        await expect(monitor.transfer(addr2.address, ethers.utils.parseEther("1500")))
            .to.emit(monitor, "TransactionSuspicious")
            .withArgs(owner.address, addr2.address, ethers.utils.parseEther("1500"));
    });

    it("should allow admin to change the suspicious threshold", async function () {
        await monitor.setSuspiciousThreshold(ethers.utils.parseEther("500"));
        const newThreshold = await monitor.suspiciousThreshold();
        expect(newThreshold).to.equal(ethers.utils.parseEther("500"));
    });

    it("should not allow non-admin to change the threshold", async function () {
        await expect(monitor.connect(addr1).setSuspiciousThreshold(ethers.utils.parseEther("500")))
            .to.be.revertedWith("Only admin can perform this action");
    });
});
