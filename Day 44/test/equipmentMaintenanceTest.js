const { expect } = require("chai");

describe("EquipmentMaintenance", function () {
  let maintenance, owner, technician;

  beforeEach(async function () {
    [owner, technician] = await ethers.getSigners();
    const EquipmentMaintenance = await ethers.getContractFactory("EquipmentMaintenance");
    maintenance = await EquipmentMaintenance.deploy();
    await maintenance.deployed();
  });

  it("should allow technicians to log maintenance records", async function () {
    await maintenance.connect(technician).logMaintenance("EQP001", "Routine engine check");
    const count = await maintenance.getRecordCount("EQP001");
    expect(count).to.equal(1);
  });

  it("should retrieve maintenance records by equipment ID", async function () {
    await maintenance.connect(technician).logMaintenance("EQP001", "Software update");
    const records = await maintenance.getMaintenanceRecords("EQP001");
    expect(records[0].description).to.equal("Software update");
  });
});
