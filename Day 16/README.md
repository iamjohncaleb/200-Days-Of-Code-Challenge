# Advanced Escrow

![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-%E2%9C%94-yellow)
![Ethereum](https://img.shields.io/badge/Ethereum-Smart%20Contracts-green)

## 📅 **Advanced Escrow Smart Contract**

### 🔍 **Overview**
Today, I built an **Advanced Escrow** smart contract that securely holds funds until an arbiter releases them to the payee.

### 📜 **Key Features**
✅ **Secure Deposits** – Funds are locked in escrow until release conditions are met
✅ **Arbiter Authorization** – Only a predefined arbiter can release funds
✅ **Transparency & Trust** – Reduces disputes and fraud risk

### 🛠️ **How It Works**
1️⃣ **Payer deposits** funds into escrow
2️⃣ **Arbiter releases** funds to the payee when conditions are met
3️⃣ **Funds are securely transferred** once the arbiter authorizes the transaction

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
- Implement **multi-signature approval** for releasing funds
- Add **automated dispute resolution mechanisms**
- Introduce **time-based refund conditions**

### 🌐 **GitHub Repository**
[🔗 Advanced Escrow Source Code](https://github.com/your-repository-link)

---
#AdvancedEscrow #Blockchain #Solidity #Ethereum #SmartContracts #Web3 🚀