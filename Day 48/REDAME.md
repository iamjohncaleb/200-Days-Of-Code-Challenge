# 📅 Day 48: Intelligence Data Integrity Hash Registry

![Hardhat](https://img.shields.io/badge/Built%20With-Hardhat-blue)
![Solidity](https://img.shields.io/badge/Solidity-0.8.21-purple)
![Tests](https://img.shields.io/badge/Tests-Chai%20%26%20Waffle-green)
![Network](https://img.shields.io/badge/Network-Localhost-orange)

## 🔍 Overview
This smart contract provides a registry for storing and verifying data integrity hashes. It can be used to ensure the integrity of sensitive intelligence data by storing the hash of the data and allowing verification of that hash.

## 📜 Key Features
✅ Register Data Hashes – Admin can register the hash of intelligence data  
✅ Verify Data Integrity – Anyone can verify whether a data hash is registered  
✅ Timestamp Tracking – Store and retrieve the timestamp when the hash was registered  

## 🛠️ How It Works
1️⃣ The admin registers the hash of the intelligence data.  
2️⃣ The contract stores the hash along with the timestamp of registration.  
3️⃣ Anyone can verify the integrity of the data by checking if the hash exists in the registry.  
4️⃣ The contract also provides a way to retrieve the timestamp of the registered hash.  

## 🚀 Setup and Running the Project

### 1️⃣ Install Dependencies
```bash
npm install
2️⃣ Compile the Smart Contract
bash
Copy
Edit
npx hardhat compile
3️⃣ Run Tests
bash
Copy
Edit
npx hardhat test
4️⃣ Deploy the Contract (Localhost)
bash
Copy
Edit
npx hardhat run scripts/deploy.js --network localhost

#Day48 #200DaysOfCode #Solidity #SmartContracts #DataIntegrity #Blockchain #Web3