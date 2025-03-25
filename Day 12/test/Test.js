const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MultiSigWallet", function () {
    let wallet, owner, addr1, addr2;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();
        const MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");
        wallet = await MultiSigWallet.deploy([owner.address, addr1.address], 2);
        await wallet.deployed();
    });

    it("Should deploy the contract and set owners", async function () {
        expect(await wallet.owners(0)).to.equal(owner.address);
        expect(await wallet.owners(1)).to.equal(addr1.address);
    });

    it("Should allow an owner to propose a transaction", async function () {
        await wallet.connect(owner).proposeTransaction(addr2.address, ethers.utils.parseEther("1"));
        expect((await wallet.transactions(0)).to).to.equal(addr2.address);
    });

    it("Should allow owners to approve a transaction", async function () {
        await wallet.connect(owner).proposeTransaction(addr2.address, ethers.utils.parseEther("1"));
        await wallet.connect(owner).approveTransaction(0);
        await wallet.connect(addr1).approveTransaction(0);
        expect(await wallet.approvals(0, owner.address)).to.equal(true);
        expect(await wallet.approvals(0, addr1.address)).to.equal(true);
    });

    it("Should execute a transaction once approved by required owners", async function () {
        await wallet.connect(owner).proposeTransaction(addr2.address, ethers.utils.parseEther("1"));
        await wallet.connect(owner).approveTransaction(0);
        await wallet.connect(addr1).approveTransaction(0);
        await wallet.connect(owner).executeTransaction(0);
        expect((await wallet.transactions(0)).executed).to.equal(true);
    });
});
