# Token Vesting

![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-%E2%9C%94-yellow)
![Ethereum](https://img.shields.io/badge/Ethereum-Smart%20Contracts-green)

## 📅 **Token Vesting Smart Contract**

### 🔍 **Overview**
Today, I built a **Token Vesting** smart contract that locks tokens for a specific period before they can be released to the beneficiary.

### 📜 **Key Features**
✅ **Time-Locked Release** – Tokens are locked until the vesting period ends
✅ **Secure Transfers** – Ensures tokens can only be released to the designated beneficiary
✅ **Automatic Vesting** – Prevents premature withdrawals

### 🛠️ **How It Works**
1️⃣ **Tokens are locked** at deployment for a specified period
2️⃣ **Once the release time is reached**, the beneficiary can claim the tokens
3️⃣ **No premature withdrawals** are allowed

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
- Implement **vesting schedules** with multiple release stages
- Add **cliff periods** to delay initial releases
- Introduce **revoke functionality** for administrators

### 🌐 **GitHub Repository**
[🔗 Token Vesting Source Code](https://github.com/your-repository-link)

---
#TokenVesting #Blockchain #Solidity #Ethereum #SmartContracts #Web3 🚀
