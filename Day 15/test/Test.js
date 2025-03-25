const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SubscriptionService", function () {
    let subscriptionService, owner, addr1;
    const subscriptionFee = ethers.utils.parseEther("0.1");

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();
        const SubscriptionService = await ethers.getContractFactory("SubscriptionService");
        subscriptionService = await SubscriptionService.deploy(subscriptionFee);
        await subscriptionService.deployed();
    });

    it("Should deploy and set the correct owner", async function () {
        expect(await subscriptionService.owner()).to.equal(owner.address);
    });

    it("Should allow users to subscribe by paying the correct fee", async function () {
        await expect(subscriptionService.connect(addr1).subscribe({ value: subscriptionFee }))
            .to.emit(subscriptionService, "Subscribed")
            .withArgs(addr1.address, await subscriptionService.subscribers(addr1.address));
        expect(await subscriptionService.checkSubscription(addr1.address)).to.be.true;
    });

    it("Should not allow subscriptions with incorrect fee", async function () {
        await expect(subscriptionService.connect(addr1).subscribe({ value: ethers.utils.parseEther("0.05") }))
            .to.be.revertedWith("Incorrect fee");
    });

    it("Should allow owner to withdraw funds", async function () {
        await subscriptionService.connect(addr1).subscribe({ value: subscriptionFee });
        await expect(subscriptionService.connect(owner).withdrawFunds()).to.changeEtherBalances(
            [owner, subscriptionService], [subscriptionFee, -subscriptionFee]
        );
    });
});