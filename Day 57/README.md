<div align="center">
  <br />
  <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2054.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/Built%20With-Hardhat-blue" />
    <img src="https://img.shields.io/badge/Solidity-0.8.21-purple" />
    <img src="https://img.shields.io/badge/Tests-Chai%20%26%20Waffle-green" />
    <img src="https://img.shields.io/badge/Network-Localhost-orange" />
  </div>

  <h3 align="center">📅Day 57 Commodity Futures Smart Contract</h3>
</div>

## 🔍 **Overview**

A **Commodity Futures Smart Contract** that allows users to create, close, and trade commodity futures contracts. It empowers users to trade future delivery contracts of commodities securely using blockchain technology.

---

## 📜 **Key Features**

✅ **Create Futures Contract** — Users can create futures contracts specifying price, quantity, and expiry.  
✅ **Close Futures Contract** — Contract creators can close the contract once it’s no longer needed.  
✅ **Trade Futures Contract** — Futures contracts can be traded by others once the contract is open.  

---

## 🛠️ **How It Works**

1️⃣ **Create Contract**: A user can create a contract specifying the price, quantity, and expiry.  
2️⃣ **Close Contract**: Only the contract creator can close the contract.  
3️⃣ **Trade Contract**: Any user can trade an open contract at or above the specified price.

---

## 🚀 **Setup and Running the Project**

#### **1️⃣ Install Dependencies**

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
4️⃣ Deploy the Contract (Local)
bash
Copy
Edit
npx hardhat run scripts/deploy.ts --network localhost
5️⃣ Start the Hardhat Node (for local network)
bash
Copy
Edit
npx hardhat node
🌐 Technologies Used
Solidity for smart contract logic

Hardhat for development, deployment, and testing

TypeScript for smart contract and testing scripts

Ethers.js for Ethereum interaction

🌐 GitHub Repository
🔗 Commodity Futures Smart Contract Source Code

# CommodityFutures #Solidity #SmartContracts #Web3 #Blockchain