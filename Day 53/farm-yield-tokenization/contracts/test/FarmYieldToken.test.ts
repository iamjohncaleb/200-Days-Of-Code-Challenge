import { expect } from "chai";
import { ethers } from "hardhat";

describe("FarmYieldToken", function () {
  it("Should deploy and register a farm", async function () {
    const [owner] = await ethers.getSigners();
    const FarmYieldToken = await ethers.getContractFactory("FarmYieldToken");
    const token = await FarmYieldToken.deploy();
    await token.waitForDeployment();

    await token.registerFarm("MyFarm", "Nigeria", 10, "Maize");
    const farm = await token.getFarmInfo(owner.address);

    expect(farm[0]).to.equal("MyFarm");
    expect(farm[2]).to.equal(10);
  });

  it("Should mint tokens", async function () {
    const [owner] = await ethers.getSigners();
    const FarmYieldToken = await ethers.getContractFactory("FarmYieldToken");
    const token = await FarmYieldToken.deploy();
    await token.waitForDeployment();

    await token.mint(owner.address, ethers.parseEther("100"));
    const balance = await token.balanceOf(owner.address);

    expect(balance.toString()).to.equal(ethers.parseEther("100").toString());
  });
});
