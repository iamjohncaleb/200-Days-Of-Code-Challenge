# 📅 Day 47: Secure Election & Referendum Voting

![Hardhat](https://img.shields.io/badge/Built%20With-Hardhat-blue)
![Solidity](https://img.shields.io/badge/Solidity-0.8.21-purple)
![Tests](https://img.shields.io/badge/Tests-Chai%20%26%20Waffle-green)
![Network](https://img.shields.io/badge/Network-Localhost-orange)

## 🔍 Overview
This smart contract enables a secure and transparent election and referendum system. Voters can cast their votes for candidates, and the results can be determined once the election period ends. Only the admin can start or end the election and add new candidates.

## 📜 Key Features
✅ Election Creation – Admin can start and configure the election  
✅ Voting System – Voters can cast one vote for a candidate  
✅ Candidate Management – Admin can add new candidates during the election  
✅ Election Results – Automatically determines the winner once the election ends  

## 🛠️ How It Works
1️⃣ The admin starts an election, specifying the title, duration, and candidates  
2️⃣ Voters cast their votes for one of the candidates  
3️⃣ The admin can add new candidates during the election  
4️⃣ Once the election ends, the contract determines the winning candidate based on vote count  

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


#Day49 #200DaysOfCode #Solidity #SmartContracts #ElectionVoting #Web3