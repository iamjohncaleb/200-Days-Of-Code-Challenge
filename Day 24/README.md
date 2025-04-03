# P2P Lending Smart Contract

![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-%E2%9C%94-yellow)
![Ethereum](https://img.shields.io/badge/Ethereum-Smart%20Contracts-green)

## 📅 **P2P Lending Smart Contract**

### 🔍 **Overview**
A decentralized peer-to-peer lending smart contract that enables users to request and repay loans securely.

### 📜 **Key Features**
✅ **Request Loans** – Borrowers can request loans with a specified amount and duration  
✅ **Interest Mechanism** – Lenders earn interest when loans are repaid  
✅ **Secure Repayment** – Borrowers must repay loans before the due date  

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
npx hardhat run scripts/deploy_p2p_lending.js --network goerli
```
#### **4️⃣ Run Tests**
```sh
npx hardhat test
```
### 🔗 **Next Steps**
- Implement **collateral-based lending**
- Add **multi-lender pooling system**
- Improve **loan tracking dashboard**