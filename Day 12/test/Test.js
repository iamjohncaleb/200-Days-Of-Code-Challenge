const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MultiSigWallet", function () {
    let wallet, owner, addr1, addr2;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();
        const MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");

        // ✅ Fix: Ensure requiredApprovals is less than or equal to number of owners
        wallet = await MultiSigWallet.deploy([owner.address, addr1.address], 2);
        await wallet.waitForDeployment();
    });

    it("Should deploy the contract and set owners correctly", async function () {
        expect(await wallet.owners(0)).to.equal(owner.address);
        expect(await wallet.owners(1)).to.equal(addr1.address);
        expect(await wallet.requiredApprovals()).to.equal(2);
    });

    it("Should allow an owner to propose a transaction", async function () {
        await wallet.connect(owner).proposeTransaction(addr2.address, ethers.parseEther("1"));
        
        const txn = await wallet.transactions(0);
        expect(txn.to).to.equal(addr2.address);
        expect(txn.amount).to.equal(ethers.parseEther("1"));
        expect(txn.executed).to.equal(false);
    });

    it("Should allow owners to approve a transaction", async function () {
        await wallet.connect(owner).proposeTransaction(addr2.address, ethers.parseEther("1"));
        await wallet.connect(owner).approveTransaction(0);
        await wallet.connect(addr1).approveTransaction(0);

        expect(await wallet.approvals(0, owner.address)).to.equal(true);
        expect(await wallet.approvals(0, addr1.address)).to.equal(true);
    });

    it("Should execute a transaction once approved by required owners", async function () {
        await wallet.connect(owner).proposeTransaction(addr2.address, ethers.parseEther("1"));
        await wallet.connect(owner).approveTransaction(0);
        await wallet.connect(addr1).approveTransaction(0);

        // ✅ Fix: Send ETH to the contract before executing the transaction
        await owner.sendTransaction({
            to: wallet.target,
            value: ethers.parseEther("1.5"),
        });

        await wallet.connect(owner).executeTransaction(0);

        const txn = await wallet.transactions(0);
        expect(txn.executed).to.equal(true);
    });
});
