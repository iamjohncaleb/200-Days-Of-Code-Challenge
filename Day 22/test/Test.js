const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EscrowSmartContract", function () {
    let EscrowContract, escrow, buyer, seller, arbiter;

    beforeEach(async function () {
        [buyer, seller, arbiter] = await ethers.getSigners();
        EscrowContract = await ethers.getContractFactory("EscrowSmartContract");
        escrow = await EscrowContract.deploy(seller.address, arbiter.address);
        await escrow.deployed();
    });

    it("Should allow buyer to fund escrow", async function () {
        await escrow.connect(buyer).fundEscrow({ value: ethers.utils.parseEther("1") });
        expect(await ethers.provider.getBalance(escrow.address)).to.equal(ethers.utils.parseEther("1"));
    });

    it("Should allow arbiter to release funds to seller", async function () {
        await escrow.connect(buyer).fundEscrow({ value: ethers.utils.parseEther("1") });
        await escrow.connect(arbiter).releaseFunds();
        expect(await ethers.provider.getBalance(seller.address)).to.be.above(ethers.utils.parseEther("1"));
    });
});
