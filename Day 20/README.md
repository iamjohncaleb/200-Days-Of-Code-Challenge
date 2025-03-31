# WarFund Crowdfunding Smart Contract

![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-%E2%9C%94-yellow)
![Ethereum](https://img.shields.io/badge/Ethereum-Smart%20Contracts-green)

## 📅 **WarFund Crowdfunding Smart Contract**

### 🔍 **Overview**
This contract allows for decentralized crowdfunding where donations are collected to meet a funding goal. If the goal is met, funds are withdrawn. If not, donors can claim refunds.

### 📜 **Key Features**
✅ **Secure Donations** – Contributors can donate and track their funds  
✅ **Refund Mechanism** – If the goal isn't met, donors can reclaim their funds  
✅ **Goal-Based Withdrawal** – Owner can withdraw funds only if the target is achieved  

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
npx hardhat run scripts/deploy_warfund_crowdfunding.js --network goerli
```
#### **4️⃣ Run Tests**
```sh
npx hardhat test
```
### 🔗 **Next Steps**
- Implement **donation milestones**
- Add **time-locked withdrawals**
- Introduce **NFT-based contribution rewards**
