import { expect } from "chai";
import { ethers } from "hardhat";

describe("SupplyChainTraceability Contract", function () {
    let supplyChainTraceability: any;
    let owner: any;
    let nonOwner: any;

    beforeEach(async function () {
        [owner, nonOwner] = await ethers.getSigners();
        const SupplyChainTraceability = await ethers.getContractFactory("SupplyChainTraceability");
        supplyChainTraceability = await SupplyChainTraceability.deploy();
        await supplyChainTraceability.deployed();
    });

    it("should create a new product", async function () {
        await supplyChainTraceability.createProduct("Product A", "Factory A");

        const product = await supplyChainTraceability.getProduct(1);
        expect(product.name).to.equal("Product A");
        expect(product.origin).to.equal("Factory A");
    });

    it("should update product status", async function () {
        await supplyChainTraceability.createProduct("Product B", "Factory B");
        await supplyChainTraceability.updateProductStatus(1, "Shipped to Warehouse");

        const product = await supplyChainTraceability.getProduct(1);
        expect(product.statusHistory).to.include("Shipped to Warehouse");
    });

    it("should allow only owner to create product", async function () {
        await expect(
            supplyChainTraceability.connect(nonOwner).createProduct("Product C", "Factory C")
        ).to.be.revertedWith("Only the owner can perform this action");
    });

    it("should return the correct status history", async function () {
        await supplyChainTraceability.createProduct("Product D", "Factory D");
        await supplyChainTraceability.updateProductStatus(1, "Shipped to Distributor");
        await supplyChainTraceability.updateProductStatus(1, "Delivered to Retailer");

        const statusHistory = await supplyChainTraceability.getProductStatusHistory(1);
        expect(statusHistory).to.deep.equal(["Shipped to Distributor", "Delivered to Retailer"]);
    });
});
