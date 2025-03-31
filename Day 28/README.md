# Decentralized Voting

![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-%E2%9C%94-yellow)
![Ethereum](https://img.shields.io/badge/Ethereum-Smart%20Contracts-green)

## 📅 **Decentralized Voting Smart Contract**

### 🔍 **Overview**
Today, I built a **Decentralized Voting** smart contract that enables secure, tamper-proof voting on the blockchain.

### 📜 **Key Features**
✅ **Admin-Managed Voter Registration** – Only authorized users can vote
✅ **Proposal Creation** – Admins can create multiple proposals
✅ **Transparent Voting** – Votes are stored immutably on-chain

### 🛠️ **How It Works**
1️⃣ **Admin registers** voters
2️⃣ **Admin creates** proposals
3️⃣ **Voters cast** their votes securely

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
To deploy on a local Hardhat network:
```sh
npx hardhat node  
npx hardhat run scripts/deploy.js --network localhost
```
To deploy on Sepolia or another testnet, add the network configuration in **hardhat.config.js** and use:
```sh
npx hardhat run scripts/deploy.js --network sepolia
```

#### **4️⃣ Run Tests**
```sh
npx hardhat test
```

### 🔗 **Next Steps**
- Implement **anonymous voting**
- Add **vote delegation** for better accessibility
- Introduce **voter eligibility criteria**

### 🌐 **GitHub Repository**
[🔗 Decentralized Voting Source Code](https://github.com/your-repository-link)

---
#DecentralizedVoting #Blockchain #Solidity #Ethereum #SmartContracts #Web3 🚀