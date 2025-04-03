# Decentralized Identity

![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-%E2%9C%94-yellow)
![Ethereum](https://img.shields.io/badge/Ethereum-Smart%20Contracts-green)

## 📅 **Decentralized Identity Smart Contract**

### 🔍 **Overview**
Today, I built a **Decentralized Identity** smart contract that allows users to create and manage their own digital identity in a secure and trustless manner.

### 📜 **Key Features**
✅ **Self-Sovereign Identity** – Users have full control over their identity
✅ **Decentralized Storage** – Identity data is securely stored on-chain
✅ **Permissionless Access** – Anyone can verify identities but only users can update them

### 🛠️ **How It Works**
1️⃣ **User registers** their identity with name, email, and metadata
2️⃣ **Identity is stored** on the blockchain under the user’s address
3️⃣ **User can update** their identity at any time

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
- Implement **verifiable credentials** for trusted authentication
- Add **support for on-chain attestations**
- Introduce **decentralized identity revocation mechanism**

### 🌐 **GitHub Repository**
[🔗 Decentralized Identity Source Code](https://github.com/your-repository-link)

---
#DecentralizedIdentity #Blockchain #Solidity #Ethereum #SmartContracts #Web3 🚀


#100DaysOfCode #Web3 #Solidity #SmartContracts #Ethereum #DecentralizedIdentity #Blockchain