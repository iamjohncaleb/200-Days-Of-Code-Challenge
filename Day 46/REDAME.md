# 📅 Day 46: Emergency Fund Allocation

![Hardhat](https://img.shields.io/badge/Built%20With-Hardhat-blue)
![Solidity](https://img.shields.io/badge/Solidity-0.8.21-purple)
![Tests](https://img.shields.io/badge/Tests-Chai%20%26%20Waffle-green)
![Network](https://img.shields.io/badge/Network-Localhost-orange)

## 🔍 Overview
This smart contract is designed to manage emergency fund allocations. Authorized entities can allocate emergency funds to individuals or organizations in need, and those recipients can claim their allocated funds. 

## 📜 Key Features
✅ Fund Allocation – Authority can allocate funds to a specific address  
✅ Fund Claiming – Recipients can claim their allocated funds once  
✅ Deposit Mechanism – External parties can deposit funds into the contract  
✅ Tracking – Allocation and claiming are tracked by the contract  

## 🛠️ How It Works
1️⃣ The authority (contract deployer) can allocate funds to any address  
2️⃣ Allocated addresses can claim their funds once and only once  
3️⃣ Anyone can deposit ETH into the contract to increase the fund pool  
4️⃣ Total funds allocated can be checked at any time  

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
🔗 Next Steps
Enable multi-authority allocation

Integrate off-chain oracles for fund validation

Create a frontend for emergency fund management

#Day46 #200DaysOfCode #Solidity #SmartContracts #Web3 #EmergencyFund