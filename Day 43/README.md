# 📅 Day 43: Decentralized Crisis Alert & Response Smart Contract

![Solidity](https://img.shields.io/badge/Solidity-0.8.20-blue.svg)
![Hardhat](https://img.shields.io/badge/Hardhat-3.0.0-yellow.svg)
![Ethers.js](https://img.shields.io/badge/Ethers.js-6.0.0-green.svg)

## 🔍 Overview
Today's build is a **Decentralized Crisis Alert & Response Smart Contract** — empowering citizens and security stakeholders to report and manage crisis alerts on-chain in a tamper-proof, transparent way.

## 📜 Key Features
✅ Citizens can report crisis alerts (incidents, security breaches, emergencies)  
✅ Admin can acknowledge and track alert statuses  
✅ Decentralized log of all alerts with timestamps  
✅ Total count and individual alert querying  

## 🛠️ How It Works
1️⃣ Users call `reportAlert()` with a message  
2️⃣ Each report is saved on-chain with the reporter’s address, timestamp, and acknowledged status  
3️⃣ The admin can `acknowledgeAlert()` an incident, updating its status  
4️⃣ Viewers can fetch individual alerts or the total count  

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
npx hardhat run scripts/deploy_crisis_alert.js --network hardhat
4️⃣ Run Tests
bash
Copy
Edit
npx hardhat test
🔗 Next Steps
Integrate role-based authorization for regional crisis managers

Add severity levels for alerts (low, medium, critical)

Build a simple React/Next.js frontend for public monitoring

#Day43 #200DaysOfCode #Solidity #SmartContracts #NationalSecurity #CrisisResponse #Ethereum #Web3 🚀