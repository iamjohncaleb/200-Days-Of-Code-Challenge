# 📅 Day 45: Border Control Permit & Visa Tokenization

![Hardhat](https://img.shields.io/badge/Built%20With-Hardhat-blue)
![Solidity](https://img.shields.io/badge/Solidity-0.8.21-purple)
![Tests](https://img.shields.io/badge/Tests-Chai%20%26%20Waffle-green)
![Network](https://img.shields.io/badge/Network-Localhost-orange)

## 🔍 Overview
This contract tokenizes border control permits and visa authorizations on-chain. Each verified address can be issued or revoked a permit NFT-like token by an authorized authority.

## 📜 Key Features
✅ Tokenized Border Permit  
✅ Issue & Revoke Permits  
✅ Check Permit Status  
✅ Total Permits Tracked  

## 🛠️ How It Works
1️⃣ Only the contract deployer (authority) can issue or revoke permits  
2️⃣ Permit status is stored in a mapping  
3️⃣ Issuance increments totalSupply, revocation decrements it  
4️⃣ Anyone can check permit status by address  

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


#Day45 #200DaysOfCode #Solidity #SmartContracts #Web3 #BorderSecurity