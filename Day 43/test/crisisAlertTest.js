const { expect } = require("chai");

describe("CrisisAlert", function () {
  let crisis, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const CrisisAlert = await ethers.getContractFactory("CrisisAlert");
    crisis = await CrisisAlert.deploy();
    await crisis.deployed();
  });

  it("should allow users to report alerts", async function () {
    await crisis.connect(addr1).reportAlert("Unauthorized access detected!");
    const totalAlerts = await crisis.getTotalAlerts();
    expect(totalAlerts).to.equal(1);
  });

  it("should allow admin to acknowledge alerts", async function () {
    await crisis.connect(addr1).reportAlert("Network breach reported");
    await crisis.acknowledgeAlert(0);
    const alert = await crisis.getAlert(0);
    expect(alert[3]).to.equal(true);
  });
});
