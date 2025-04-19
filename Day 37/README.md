<div align="center">
  <br />
  <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2037.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">📊 Day 37: Reputation System Smart Contract</h3>
</div>

## 🔍 **Overview**

A lightweight, decentralized **Reputation Management Smart Contract** for tracking and managing user reputations directly on-chain.  
It supports increasing, decreasing, and querying wallet reputations with event logs for every update — perfect for dApps and decentralized marketplaces.

---

## 📜 **Key Features**
✅ **Increment/Decrement user reputation**  
✅ **Query reputation score by wallet address**  
✅ **Emits `ReputationUpdated` event** on every change  

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
npx hardhat run scripts/deploy_reputation.js --network localhost
```

#### **4️⃣ Run Unit Tests**
```bash
npx hardhat test
```

---

## 📌 **Possible Enhancements**
- 🔒 Add **access control modifiers** (e.g. `onlyOwner`) for adjusting reputations  
- 🌐 Integrate with **marketplaces, dApps, and decentralized platforms**  
- 🪙 Convert reputation into **ERC-20 tokens or NFTs** as identity badges  

---

## 🌐 **GitHub Repository**
[🔗 Reputation System Source Code](https://github.com/your-repository-link)

---

#ReputationSystem #Solidity #SmartContracts #Blockchain #Web3 #200DaysOfCode 🚀
