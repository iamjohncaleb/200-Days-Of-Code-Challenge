# Staking Smart Contract

![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-%E2%9C%94-yellow)
![Ethereum](https://img.shields.io/badge/Ethereum-Smart%20Contracts-green)

## 📅 **Staking Smart Contract**

### 🔍 **Overview**
A decentralized staking smart contract that allows users to stake tokens and earn rewards.

### 📜 **Key Features**
✅ **Stake ERC20 tokens** – Users can stake tokens for rewards  
✅ **Reward system** – Earn rewards over time based on stake duration  
✅ **Secure unstaking** – Users can withdraw their stake and rewards  

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
npx hardhat run scripts/deploy_staking_smartcontract.js --network goerli
```
#### **4️⃣ Run Tests**
```sh
npx hardhat test
```
### 🔗 **Next Steps**
- Implement **time-based boost rewards**
- Add **multi-token staking support**
- Improve **UI for staking interaction**
