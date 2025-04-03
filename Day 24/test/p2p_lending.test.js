const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("P2PLendingSmartContract", function () {
    let LendingContract, lending, owner, borrower;

    beforeEach(async function () {
        [owner, borrower] = await ethers.getSigners();
        LendingContract = await ethers.getContractFactory("P2PLendingSmartContract");
        lending = await LendingContract.deploy("TOKEN_ADDRESS", "5");
        await lending.deployed();
    });

    it("Should allow users to request a loan", async function () {
        await lending.connect(borrower).requestLoan(ethers.utils.parseEther("1"), 7 * 24 * 60 * 60);
        expect(await lending.loans(borrower.address).amount).to.equal(ethers.utils.parseEther("1"));
    });
});