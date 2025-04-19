<div align="center">
  <br />
  <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2043.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/Solidity-0.8.20-blue.svg" />
    <img src="https://img.shields.io/badge/Hardhat-3.0.0-yellow.svg" />
    <img src="https://img.shields.io/badge/Ethers.js-6.0.0-green.svg" />
  </div>

  <h3 align="center">📅 Day 43: Decentralized Crisis Alert & Response Smart Contract</h3>
</div>

## 🔍 **Overview**

A **Decentralized Crisis Alert & Response Smart Contract** empowering citizens and security stakeholders to report and manage crisis alerts on-chain in a tamper-proof, transparent, and censorship-resistant way.

---

## 📜 **Key Features**
✅ **Citizens can report crisis alerts** (incidents, emergencies, security breaches)  
✅ **Admin can acknowledge and track alert statuses**  
✅ **Decentralized log of all alerts with timestamps**  
✅ **Public querying of total count and individual alert details**

---

## 🛠️ **How It Works**

1️⃣ Users call `reportAlert()` with a message  
2️⃣ Each alert is stored on-chain with the reporter's address, timestamp, and status  
3️⃣ Admin uses `acknowledgeAlert()` to mark incidents as acknowledged  
4️⃣ Public functions fetch total alerts and individual report details  

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
npx hardhat run scripts/deploy_crisis_alert.js --network hardhat
```

#### **4️⃣ Run Unit Tests**
```bash
npx hardhat test
```

---

## 📌 **Next Steps**
- 🔐 Integrate **role-based authorization** for regional crisis managers  
- 🚨 Add **severity levels** for alerts (Low, Medium, Critical)  
- 🌐 Build a **React/Next.js frontend** for public incident reporting and monitoring  

---

## 🌐 **GitHub Repository**
[🔗 Decentralized Crisis Alert & Response Source Code](https://github.com/your-repository-link)

---

#CrisisResponse #Solidity #SmartContracts #BlockchainSecurity #Web3 #200DaysOfCode 🚀
