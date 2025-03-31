# Subscription Service

![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-%E2%9C%94-yellow)
![Ethereum](https://img.shields.io/badge/Ethereum-Smart%20Contracts-green)

## 📅 **Subscription Service Smart Contract**

### 🔍 **Overview**
Today, I built a **Subscription Service** smart contract that allows users to subscribe by paying a fee, granting access for a fixed period.

### 📜 **Key Features**
✅ **Pay-to-Subscribe** – Users pay a fixed fee to subscribe for 30 days
✅ **Subscription Check** – Users can verify their active subscription status
✅ **Owner Withdrawals** – The contract owner can withdraw collected funds

### 🛠️ **How It Works**
1️⃣ **Users send a fixed fee** to subscribe
2️⃣ **Subscription lasts for 30 days** before renewal is required
3️⃣ **The contract owner can withdraw** accumulated funds

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
- Implement **tiered subscription plans**
- Add **automated renewals** with smart contract logic
- Introduce **refund functionality** for early cancellations

### 🌐 **GitHub Repository**
[🔗 Subscription Service Source Code](https://github.com/your-repository-link)

---
#SubscriptionService #Blockchain #Solidity #Ethereum #SmartContracts #Web3 🚀
