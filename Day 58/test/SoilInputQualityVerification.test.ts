import { expect } from "chai";
import { ethers } from "hardhat";

describe("SoilInputQualityVerification Contract", function () {
    let soilInputQualityVerification: any;
    let owner: any;
    let verifier: any;
    let nonVerifier: any;

    beforeEach(async function () {
        [owner, verifier, nonVerifier] = await ethers.getSigners();
        const SoilInputQualityVerification = await ethers.getContractFactory("SoilInputQualityVerification");
        soilInputQualityVerification = await SoilInputQualityVerification.deploy();
        await soilInputQualityVerification.deployed();
    });

    it("should register a new verifier", async function () {
        await soilInputQualityVerification.registerVerifier(verifier.address);
        const isRegistered = await soilInputQualityVerification.registeredVerifiers(verifier.address);
        expect(isRegistered).to.be.true;
    });

    it("should allow a registered verifier to submit a report", async function () {
        await soilInputQualityVerification.registerVerifier(verifier.address);

        await soilInputQualityVerification.connect(verifier).submitReport(85, 90);

        const report = await soilInputQualityVerification.reports(1);
        expect(report.soilQuality).to.equal(85);
        expect(report.inputQuality).to.equal(90);
        expect(report.verifier).to.equal(verifier.address);
        expect(report.isValid).to.be.true;
    });

    it("should not allow an unregistered verifier to submit a report", async function () {
        await expect(
            soilInputQualityVerification.connect(nonVerifier).submitReport(85, 90)
        ).to.be.revertedWith("Only registered verifiers can submit reports");
    });

    it("should allow the owner to invalidate a report", async function () {
        await soilInputQualityVerification.registerVerifier(verifier.address);
        await soilInputQualityVerification.connect(verifier).submitReport(85, 90);
        
        await soilInputQualityVerification.invalidateReport(1);

        const report = await soilInputQualityVerification.reports(1);
        expect(report.isValid).to.be.false;
    });
});
