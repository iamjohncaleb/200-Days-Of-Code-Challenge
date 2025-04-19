# 📅 Day 44: Military Equipment Maintenance Logs Smart Contract

![Solidity](https://img.shields.io/badge/Solidity-0.8.20-blue.svg)
![Hardhat](https://img.shields.io/badge/Hardhat-3.0.0-yellow.svg)
![Ethers.js](https://img.shields.io/badge/Ethers.js-6.0.0-green.svg)

## 🔍 Overview
Today's build is a **Military Equipment Maintenance Logs Smart Contract** — a decentralized logbook for recording and auditing maintenance performed on sensitive military equipment.

## 📜 Key Features
✅ Record maintenance logs per equipment ID  
✅ Includes technician address, description, and timestamp  
✅ Public retrieval of maintenance logs by equipment ID  
✅ Tracks total record count per equipment  

## 🛠️ How It Works
1️⃣ Technicians call `logMaintenance()` with equipment ID and description  
2️⃣ Logs are stored with timestamp and caller address  
3️⃣ Anyone can view maintenance logs for a specific equipment via `getMaintenanceRecords()`  
4️⃣ Total log counts available via `getRecordCount()`  

## 🚀 Setup and Running the Project

### 1️⃣ Install Dependencies

```bash
npm install
2️⃣ Compile the Smart Contract
bash
Copy
Edit
npx hardhat compile
3️⃣ Deploy the Contract (locally)
bash
Copy
Edit
npx hardhat run scripts/deploy_equipment_maintenance.js --network hardhat
4️⃣ Run Tests
bash
Copy
Edit
npx hardhat test
🔗 Next Steps
Integrate role-based access control for approved military technicians

Add equipment status (active, under repair, decommissioned)

Build a React/Next.js dashboard to browse and search logs

#Day44 #200DaysOfCode #Solidity #SmartContracts #NationalSecurity #MilitaryLogistics #Web3 🚀