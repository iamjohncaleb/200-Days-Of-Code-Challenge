# Escrow Smart Contract

![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-%E2%9C%94-yellow)
![Ethereum](https://img.shields.io/badge/Ethereum-Smart%20Contracts-green)

## 📅 **Escrow Smart Contract**

### 🔍 **Overview**
A decentralized escrow smart contract that ensures fair transactions between buyers and sellers.

### 📜 **Key Features**
✅ **Buyer funds escrow** – Ensures seller gets paid only after conditions are met  
✅ **Arbiter resolves disputes** – Provides an extra layer of security  
✅ **Funds can be refunded or released** – Ensures fair handling of transactions  

### 🚀 **Setup and Running the Project**
#### **1️⃣ Install Dependencies**
```sh
npm install
```
#### **2️⃣ Compile the Smart Contract**
```sh
npx hardhat compile
```
#### **3️⃣ Deploy the Contract**
```sh
npx hardhat run scripts/deploy_escrow_smartcontract.js --network goerli
```
#### **4️⃣ Run Tests**
```sh
npx hardhat test
```
### 🔗 **Next Steps**
- Implement **multi-party arbitration**
- Add **time-based auto-release of funds**
- Introduce **deposit withdrawal functionality**
