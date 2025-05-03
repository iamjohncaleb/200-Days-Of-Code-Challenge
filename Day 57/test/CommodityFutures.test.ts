import { expect } from "chai";
import { ethers } from "hardhat";

describe("CommodityFutures Contract", function () {
    let commodityFutures: any;
    let owner: any;
    let user: any;

    beforeEach(async function () {
        [owner, user] = await ethers.getSigners();
        const CommodityFutures = await ethers.getContractFactory("CommodityFutures");
        commodityFutures = await CommodityFutures.deploy();
        await commodityFutures.deployed();
    });

    it("should create a new contract", async function () {
        await commodityFutures.createContract(100, 10, 1678905600); // price, quantity, expiry

        const contract = await commodityFutures.getContract(1);
        expect(contract.price).to.equal(100);
        expect(contract.quantity).to.equal(10);
        expect(contract.expiry).to.equal(1678905600);
        expect(contract.status).to.equal(0); // Status.Open
    });

    it("should close the contract", async function () {
        await commodityFutures.createContract(100, 10, 1678905600);
        await commodityFutures.closeContract(1);

        const contract = await commodityFutures.getContract(1);
        expect(contract.status).to.equal(1); // Status.Closed
    });

    it("should trade the contract", async function () {
        await commodityFutures.createContract(100, 10, 1678905600);
        await commodityFutures.tradeContract(1, 150);

        const contract = await commodityFutures.getContract(1);
        expect(contract.price).to.equal(100);
    });
});
