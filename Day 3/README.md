# Advanced Lottery

![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-%E2%9C%94-yellow)
![Ethereum](https://img.shields.io/badge/Ethereum-Smart%20Contracts-green)

## 📅 **Advanced Lottery Smart Contract**

### 🔍 **Overview**
Today, I built an **Advanced Lottery** smart contract that allows users to enter with a fixed fee, and a winner is randomly selected to receive the total prize pool.

### 📜 **Key Features**
✅ **Entry Mechanism** – Users enter by paying a fixed fee  
✅ **Random Winner Selection** – Ensures fair distribution of winnings  
✅ **Secure Prize Payout** – The contract automatically transfers funds to the winner  

### 🛠️ **How It Works**
1️⃣ **Users enter** the lottery by sending 0.1 ETH  
2️⃣ **Contract randomly picks a winner** when called by the manager  
3️⃣ **Winner receives** the total prize pool automatically  

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
- Implement **multiple winners** feature  
- Add **chainlink VRF for provable randomness**  
- Integrate **frontend UI for ticket purchases**  

### 🌐 **GitHub Repository**
[🔗 Advanced Lottery Source Code](https://github.com/your-repository-link)

---
#AdvancedLottery #Blockchain #Solidity #Ethereum #SmartContracts #Web3 🚀
