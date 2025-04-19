const { expect } = require("chai");

describe("DataIntegrityRegistry", function () {
    let registry, owner, addr1;
    const sampleDataHash = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";

    beforeEach(async () => {
        [owner, addr1] = await ethers.getSigners();
        const DataIntegrityRegistry = await ethers.getContractFactory("DataIntegrityRegistry");
        registry = await DataIntegrityRegistry.deploy();
        await registry.deployed();
    });

    it("should allow the admin to register a data hash", async function () {
        await registry.registerDataHash(sampleDataHash);
        const timestamp = await registry.getDataHashTimestamp(sampleDataHash);
        expect(timestamp).to.be.gt(0);
    });

    it("should allow anyone to verify the data integrity", async function () {
        await registry.registerDataHash(sampleDataHash);
        await expect(registry.verifyDataIntegrity(sampleDataHash))
            .to.emit(registry, "DataHashVerified")
            .withArgs(sampleDataHash, true);
    });

    it("should not allow non-admin to register a data hash", async function () {
        await expect(registry.connect(addr1).registerDataHash(sampleDataHash))
            .to.be.revertedWith("Only admin can perform this action");
    });

    it("should return 0 for unregistered hashes", async function () {
        const timestamp = await registry.getDataHashTimestamp(sampleDataHash);
        expect(timestamp).to.equal(0);
    });
});
