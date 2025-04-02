# Time Lock

![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-%E2%9C%94-yellow)
![Ethereum](https://img.shields.io/badge/Ethereum-Smart%20Contracts-green)

## 📅 **Time Lock Smart Contract**

### 🔍 **Overview**
Today, I built a **Time Lock** smart contract that locks ETH for a set period before allowing withdrawals. It ensures secure time-based fund releases.

### 📜 **Key Features**
✅ **Time-Based Lock** – Funds are locked for a specific duration before withdrawal
✅ **Owner-Controlled** – Only the contract owner can withdraw funds
✅ **Emergency Withdrawal** – Owner can withdraw funds in emergencies

### 🛠️ **How It Works**
1️⃣ **Owner deposits** ETH into the contract
2️⃣ **Owner can withdraw** after the unlock period
3️⃣ **Emergency withdrawal** is available if needed

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
- Implement **multi-signature approvals for withdrawals**  
- Add **vesting functionality for gradual releases**  
- Create **a frontend UI for user interaction**  

### 🌐 **GitHub Repository**
[🔗 Time Lock Source Code](https://github.com/your-repository-link)

---
#TimeLock #Blockchain #Solidity #Ethereum #SmartContracts #Web3 🚀