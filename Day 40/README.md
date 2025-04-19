<div align="center">
  <br />
  <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2040.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">📅 Day 40: Prediction Market Smart Contract</h3>
</div>

## 🔍 **Overview**

A decentralized, on-chain **Prediction Market Smart Contract** where users can place ETH bets on the outcome of a future event.  
Winners split the prize pool based on their bet size proportionally after the final result is declared.

---

## 📜 **Key Features**
✅ **YES/NO ETH bets** placed before a deadline  
✅ **Admin declares event result** after a predefined result time  
✅ **Claim rewards** proportionally based on winning bet sizes  
✅ **Transparent, on-chain result tracking and reward distribution**

---

## 🛠️ **How It Works**

1️⃣ The contract is deployed with a **betting duration** and **result announcement duration**  
2️⃣ Users place a **YES/NO bet** (`true/false`) before the betting deadline  
3️⃣ After the result time, the **admin declares the final event outcome**  
4️⃣ **Winning bettors claim their ETH rewards**, proportionally calculated from the total losing pool  
5️⃣ Public functions provide **real-time pool balances and individual bet data**

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

#### **3️⃣ Deploy to Localhost**
```bash
npx hardhat run scripts/deploy.js --network localhost
```

#### **4️⃣ Run Unit Tests**
```bash
npx hardhat test
```

---

## 🌐 **GitHub Repository**
[🔗 Prediction Market Source Code](https://github.com/your-repository-link)

---

#PredictionMarket #Solidity #SmartContracts #Ethereum #Web3 #200DaysOfCode 🚀
