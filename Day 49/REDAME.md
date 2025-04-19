# 📅 Day 49: Counter-Terrorism Transaction Monitor

![Hardhat](https://img.shields.io/badge/Built%20With-Hardhat-blue)
![Solidity](https://img.shields.io/badge/Solidity-0.8.21-purple)
![Tests](https://img.shields.io/badge/Tests-Chai%20%26%20Waffle-green)
![Network](https://img.shields.io/badge/Network-Localhost-orange)

## 🔍 Overview
This smart contract monitors transactions to detect high-value and suspicious activity that could be related to terrorism financing or other illicit activities. The contract records transactions and flags those that exceed a suspicious threshold.

## 📜 Key Features
✅ Record Transactions – Log all transactions made by users  
✅ Trigger Suspicious Events – Flag high-value transactions that exceed a defined threshold  
✅ Adjustable Threshold – The admin can modify the suspicious threshold  
✅ Track User Balances – Users can deposit and transfer ETH while their balances are tracked  

## 🛠️ How It Works
1️⃣ The admin sets a suspicious transaction threshold (e.g., 1000 ETH).  
2️⃣ Users can deposit and transfer ETH, with each transaction being recorded.  
3️⃣ If a transaction exceeds the threshold, it is flagged as suspicious.  
4️⃣ The contract allows the admin to adjust the suspicious threshold.

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


#Day49 #200DaysOfCode #Solidity #SmartContracts #CounterTerrorism #Blockchain #Web3