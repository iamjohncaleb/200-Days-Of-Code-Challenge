const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Escrow", function () {
    let escrow, owner, seller, arbiter;
    const depositAmount = ethers.utils.parseEther("1");

    beforeEach(async function () {
        [owner, seller, arbiter] = await ethers.getSigners();
        const Escrow = await ethers.getContractFactory("Escrow");
        escrow = await Escrow.deploy(seller.address, arbiter.address, { value: depositAmount });
        await escrow.deployed();
    });

    it("Should deploy and set the correct participants", async function () {
        expect(await escrow.buyer()).to.equal(owner.address);
        expect(await escrow.seller()).to.equal(seller.address);
        expect(await escrow.arbiter()).to.equal(arbiter.address);
    });

    it("Should allow buyer or arbiter to release funds to seller", async function () {
        await expect(escrow.connect(owner).releaseFunds())
            .to.emit(escrow, "FundsReleased")
            .withArgs(seller.address, depositAmount);
        expect(await ethers.provider.getBalance(escrow.address)).to.equal(0);
    });

    it("Should allow arbiter to refund buyer", async function () {
        await expect(escrow.connect(arbiter).refundBuyer())
            .to.emit(escrow, "FundsReleased")
            .withArgs(owner.address, depositAmount);
        expect(await ethers.provider.getBalance(escrow.address)).to.equal(0);
    });

    it("Should not allow unauthorized users to release funds", async function () {
        await expect(escrow.connect(seller).releaseFunds()).to.be.revertedWith("Unauthorized");
    });
});
