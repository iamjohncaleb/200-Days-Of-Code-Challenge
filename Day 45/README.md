<div align="center">
  <br />
  <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2045.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/Built%20With-Hardhat-blue" />
    <img src="https://img.shields.io/badge/Solidity-0.8.21-purple" />
    <img src="https://img.shields.io/badge/Tests-Chai%20%26%20Waffle-green" />
    <img src="https://img.shields.io/badge/Network-Localhost-orange" />
  </div>

  <h3 align="center">📅 Day 45: Border Control Permit & Visa Tokenization</h3>
</div>

## 🔍 **Overview**

A **Border Control Permit & Visa Tokenization Smart Contract** — a decentralized solution for issuing and revoking border permits and visa authorizations, where each permit is represented as a token on the blockchain.

---

## 📜 **Key Features**
✅ **Tokenized Border Permits**  
✅ **Issue & Revoke Permits**  
✅ **Check Permit Status**  
✅ **Track Total Permits Issued**

---

## 🛠️ **How It Works**

1️⃣ Only the contract deployer (authority) can issue or revoke permits  
2️⃣ Each permit’s status is stored in a mapping  
3️⃣ Issuance of a permit increments total supply, revocation decrements it  
4️⃣ Anyone can check the status of a permit by address  

---

## 🚀 **Setup and Running the Project**

#### **1️⃣ Install Dependencies**
```bash
npm install
```

#### **2️⃣ Compile Smart Contracts**
```bash
npx hardhat compile
```

#### **3️⃣ Run Tests**
```bash
npx hardhat test
```

#### **4️⃣ Deploy the Contract (Local)**
```bash
npx hardhat run scripts/deploy.js --network localhost
```

---

## 📌 **Next Steps**
- 🔒 Add **multi-signature approval** for issuing/revoking permits  
- 🌐 Integrate with a **front-end interface** for permit management  
- 🏷️ Expand the contract to support **visa tokenization** for different countries  

---

## 🌐 **GitHub Repository**
[🔗 Border Control Permit & Visa Tokenization Source Code](https://github.com/your-repository-link)

---

#BorderSecurity #Solidity #SmartContracts #Web3 #200DaysOfCode 🚀
