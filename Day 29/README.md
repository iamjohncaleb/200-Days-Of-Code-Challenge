# Flash Loan

![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-%E2%9C%94-yellow)
![Ethereum](https://img.shields.io/badge/Ethereum-Smart%20Contracts-green)

## 📅 **Flash Loan Smart Contract**

### 🔍 **Overview**
Today, I built a **Flash Loan** smart contract that allows users to borrow funds without collateral, provided they repay the loan within the same transaction.

### 📜 **Key Features**
✅ **No Collateral Required** – Borrow instantly if repayment happens within the same transaction
✅ **Liquidity Provider Model** – Users can deposit liquidity for flash loans
✅ **Secure Execution** – Ensures borrowed funds are returned before the transaction ends

### 🛠️ **How It Works**
1️⃣ **Liquidity provider deposits** funds
2️⃣ **Borrower requests** a flash loan
3️⃣ **Loan must be repaid** within the transaction

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
- Implement **fee mechanisms** for liquidity providers
- Add **flash loan execution monitoring**
- Introduce **multi-token flash loan support**

### 🌐 **GitHub Repository**
[🔗 Flash Loan Source Code](https://github.com/your-repository-link)

---
#FlashLoan #Blockchain #Solidity #Ethereum #SmartContracts #Web3 🚀
