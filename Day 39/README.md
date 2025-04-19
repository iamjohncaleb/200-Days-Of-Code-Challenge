<div align="center">
  <br />
  <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2039.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">🏦 Day 39: MultiSig Wallet Smart Contract</h3>
</div>

## 🔍 **Overview**

An on-chain **Multi-Signature Wallet Smart Contract** where transactions require approval from multiple wallet owners before execution.  
Ideal for DAOs, treasury management, or shared custody of funds.

---

## 📜 **Key Features**
✅ **Multiple owners** can propose and approve transactions  
✅ **Configurable number of required approvals** for transaction execution  
✅ **Prevents unauthorized transaction execution** by enforcing multi-signature verification  

---

## 🛠️ **Project Setup**

#### **1️⃣ Install Dependencies**
```bash
npm install
```

#### **2️⃣ Compile Smart Contracts**
```bash
npx hardhat compile
```

#### **3️⃣ Deploy to Localhost**
```bash
npx hardhat run scripts/deploy_multi_sig_wallet.js --network localhost
```

#### **4️⃣ Run Unit Tests**
```bash
npx hardhat test
```

---

## 📌 **Possible Enhancements**
- 📑 Add **advanced transaction filtering and history tracking**  
- 🏧 Implement **withdrawal functionality** for owners  
- 🔒 Improve **owner security features** (e.g., multi-factor authentication, role-based permissions)  

---

## 🌐 **GitHub Repository**
[🔗 MultiSig Wallet Source Code](https://github.com/your-repository-link)

---

#MultiSigWallet #Solidity #SmartContracts #Blockchain #Web3 #DAO #200DaysOfCode 🚀
