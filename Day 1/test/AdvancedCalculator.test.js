const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AdvancedCalculator", function () {
  let calculator;
  beforeEach(async function () {
    const AdvancedCalculator = await ethers.getContractFactory("AdvancedCalculator");
    calculator = await AdvancedCalculator.deploy();
    await calculator.deployed();
  });

  it("should add two numbers", async function () {
    expect(await calculator.add(2, 3)).to.equal(5);
  });

  it("should subtract two numbers", async function () {
    expect(await calculator.subtract(5, 3)).to.equal(2);
  });

  it("should multiply two numbers", async function () {
    expect(await calculator.multiply(4, 3)).to.equal(12);
  });

  it("should divide two numbers", async function () {
    expect(await calculator.divide(10, 2)).to.equal(5);
  });

  it("should revert on division by zero", async function () {
    await expect(calculator.divide(10, 0)).to.be.revertedWith("Division by zero");
  });
});