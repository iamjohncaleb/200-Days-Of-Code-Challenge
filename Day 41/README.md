<div align="center">
  <br />
  <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2041.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-0.8.20-blue.svg" />
    <img src="https://img.shields.io/badge/hardhat-2.20.0-yellow.svg" />
    <img src="https://img.shields.io/badge/ethers.js-6.8.1-green.svg" />
  </div>

  <h3 align="center">📅 Day 41: Secure Identity Verification Smart Contract</h3>
</div>

## 🔍 **Overview**

A decentralized **Secure Identity Verification Smart Contract** that enables individuals to register identity details and allows an admin to verify them on-chain.  
Designed to support transparent, tamper-proof identity management for decentralized apps and services.

---

## 📜 **Key Features**
✅ **Identity registration** with name and national ID  
✅ **Admin-only verification authority** for approving identities  
✅ **On-chain verification status checks** via public functions  
✅ **Event emissions** for both registration and verification actions  

---

## 🛠️ **How It Works**

1️⃣ **Users register** with their name and national ID.  
2️⃣ The **contract owner (admin)** reviews and verifies identities.  
3️⃣ **Anyone can query** the verification status of a wallet address.  
4️⃣ **Event logs track all registrations and verifications** for transparency and auditability.

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
npx hardhat run scripts/deploy_identity.js --network localhost
```

#### **4️⃣ Run Unit Tests**
```bash
npx hardhat test
```

---

## 📌 **Next Steps**
- 🌐 Integrate with **Decentralized Identity (DID) standards**
- 🖥️ Build a **React/Next.js frontend** for on-chain identity management
- 🔐 Add **multi-signature admin controls** for extra security

---

## 🌐 **GitHub Repository**
[🔗 Secure Identity Verification Source Code](https://github.com/your-repository-link)

---

#IdentityVerification #Solidity #SmartContracts #Web3 #NationalSecurity #200DaysOfCode 🚀
