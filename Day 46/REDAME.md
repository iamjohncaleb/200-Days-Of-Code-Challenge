<div align="center">
  <br />
  <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2046.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/Built%20With-Hardhat-blue" />
    <img src="https://img.shields.io/badge/Solidity-0.8.21-purple" />
    <img src="https://img.shields.io/badge/Tests-Chai%20%26%20Waffle-green" />
    <img src="https://img.shields.io/badge/Network-Localhost-orange" />
  </div>

  <h3 align="center">📅 Day 46: Emergency Fund Allocation</h3>
</div>

## 🔍 **Overview**

An **Emergency Fund Allocation Smart Contract** — designed to manage emergency fund distribution. Authorized entities can allocate funds to individuals or organizations, and recipients can claim their allocated funds.

---

## 📜 **Key Features**
✅ **Fund Allocation** — Authority can allocate funds to a specific address  
✅ **Fund Claiming** — Recipients can claim their allocated funds once  
✅ **Deposit Mechanism** — External parties can deposit funds into the contract  
✅ **Tracking** — Allocation and claiming are tracked by the contract  

---

## 🛠️ **How It Works**

1️⃣ The **authority** (contract deployer) can allocate funds to any address  
2️⃣ Allocated addresses can claim their funds **once** and only once  
3️⃣ Anyone can deposit **ETH** into the contract to increase the fund pool  
4️⃣ **Total funds allocated** can be checked at any time  

---

## 🚀 **Setup and Running the Project**

#### **1️⃣ Install Dependencies**
```bash
npm install
```

#### **2️⃣ Compile the Smart Contract**
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
- 🔓 Enable **multi-authority allocation**  
- 🌐 Integrate off-chain **oracles** for fund validation  
- 🖥️ Build a **frontend** for emergency fund management  

---

## 🌐 **GitHub Repository**
[🔗 Emergency Fund Allocation Source Code](https://github.com/your-repository-link)

---

#EmergencyFund #Solidity #SmartContracts #Web3 #200DaysOfCode 🚀
