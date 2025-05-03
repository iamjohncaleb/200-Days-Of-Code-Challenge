<div align="center">
  <br />
  <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2053.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/Built%20With-Hardhat-blue" />
    <img src="https://img.shields.io/badge/Solidity-0.8.21-purple" />
    <img src="https://img.shields.io/badge/Frontend-Next.js%20%26%20TailwindCSS-yellow" />
    <img src="https://img.shields.io/badge/Web3-Wagmi%20%26%20RainbowKit-teal" />
    <img src="https://img.shields.io/badge/Network-Localhost-orange" />
  </div>

  <h3 align="center">📅 Day 55: Subsidy Distribution Smart Contract</h3>
</div>

## 🔍 **Overview**

A **Subsidy Distribution DApp** that registers beneficiaries and allows them to claim ETH-based subsidies. Built with Solidity, Hardhat, and a futuristic Next.js UI powered by RainbowKit and Wagmi.

---

## 📜 **Key Features**

✅ **Register Beneficiaries** — Admins can register wallet addresses as eligible subsidy recipients
✅ **Claim Subsidy** — Eligible users can claim their allocated subsidy (only once)
✅ **Track Claims** — On-chain state verifies if a user has claimed
✅ **Admin-Controlled** — Only the contract owner can register beneficiaries

---

## 🛠️ **How It Works**

1️⃣ Contract deployer acts as the **admin**
2️⃣ Admin registers wallet addresses as **beneficiaries**
3️⃣ Registered users can connect their wallet and **claim** ETH once
4️⃣ Claim events are **logged** for transparency

---

## 🚀 **Setup and Running the Project**

### **1️⃣ Install Dependencies**

```bash
npm install
```

### **2️⃣ Compile the Smart Contract**

```bash
npx hardhat compile
```

### **3️⃣ Run Tests**

```bash
npx hardhat test
```

### **4️⃣ Deploy to Local Network**

```bash
npx hardhat run scripts/deploy.js --network localhost
```

### **5️⃣ Run the Frontend**

```bash
npm run dev
```

---

## ✨ **UI Snapshot**

A clean, futuristic interface for wallet connection, subsidy registration, and claiming.

---

## 📌 **Next Steps**

* 🔐 Add role-based permissions for multi-admin control
* 🌍 Deploy to a testnet (e.g., Goerli or Sepolia)
* 📦 Enable metadata logging for claims on IPFS

---

## 🌐 **GitHub Repository**

[🔗 Subsidy Distribution Source Code](https://github.com/your-repository-link)

---

#SubsidyDApp #SmartContracts #Wagmi #RainbowKit #NextJS #200DaysOfCode 🚀
