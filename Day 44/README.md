<div align="center">
  <br />
  <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2044.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/Solidity-0.8.20-blue.svg" />
    <img src="https://img.shields.io/badge/Hardhat-3.0.0-yellow.svg" />
    <img src="https://img.shields.io/badge/Ethers.js-6.0.0-green.svg" />
  </div>

  <h3 align="center">📅 Day 44: Military Equipment Maintenance Logs Smart Contract</h3>
</div>

## 🔍 **Overview**

A **Military Equipment Maintenance Logs Smart Contract** — a decentralized logbook for securely recording and auditing maintenance activities on critical military equipment, ensuring transparency and traceability.

---

## 📜 **Key Features**
✅ **Record maintenance logs per equipment ID**  
✅ **Track technician address, description, and timestamp**  
✅ **Public retrieval of maintenance logs by equipment ID**  
✅ **Total record count tracking per equipment**

---

## 🛠️ **How It Works**

1️⃣ Technicians call `logMaintenance()` with an equipment ID and maintenance description  
2️⃣ Each log is stored on-chain with a timestamp and caller's address  
3️⃣ Anyone can retrieve maintenance logs using `getMaintenanceRecords()` by equipment ID  
4️⃣ `getRecordCount()` returns the total number of logs for each equipment  

---

## 🚀 **Setup and Running the Project**

#### **1️⃣ Install Dependencies**
```bash
npm install
```

#### **2️⃣ Compile Smart Contracts**
```bash
npx hardhat compile
```

#### **3️⃣ Deploy to Localhost**
```bash
npx hardhat run scripts/deploy_equipment_maintenance.js --network hardhat
```

#### **4️⃣ Run Unit Tests**
```bash
npx hardhat test
```

---

## 📌 **Next Steps**
- 🔐 Add **role-based access control** for authorized military technicians  
- ⚙️ Implement **equipment status tracking** (active, under repair, decommissioned)  
- 🌐 Build a **React/Next.js dashboard** for browsing and searching maintenance logs  

---

## 🌐 **GitHub Repository**
[🔗 Military Equipment Maintenance Logs Source Code](https://github.com/your-repository-link)

---

#MilitaryLogistics #Solidity #SmartContracts #BlockchainSecurity #Web3 #200DaysOfCode 🚀
