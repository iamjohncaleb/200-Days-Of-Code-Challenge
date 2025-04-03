<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2029.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 29 📅 Flash Loan Smart Contract </h3>
</div>

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
