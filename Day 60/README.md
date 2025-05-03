<div align="center">
  <br />
  <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2058.jpg" alt="Project Banner" width="100%" />

  <div>
    <img src="https://img.shields.io/badge/Built%20With-Hardhat-blue" />
    <img src="https://img.shields.io/badge/Solidity-0.8.21-purple" />
    <img src="https://img.shields.io/badge/Tests-Chai%20%26%20Waffle-green" />
    <img src="https://img.shields.io/badge/Network-Localhost-orange" />
  </div>

  <h3 align="center">🌍Day 60 Carbon Credit Verification and Trading Contract</h3>
</div>

---

## 🔍 Overview

A secure **Carbon Credit DApp** that enables verified issuers to mint and trade carbon credits transparently using blockchain technology.

---

## ✅ Key Features

- 🆔 **Credit Issuance** — Any user can issue a carbon credit  
- ✅ **Verifier Role** — Only verifier can approve credits  
- 🔁 **Trading System** — Verified credits can be traded once  
- 🔎 **Credit Lookup** — View full credit data by ID  

---

## 🛠 How It Works

1. A user issues a credit (amount of carbon offset)
2. The verifier confirms the credit’s authenticity
3. The issuer can trade the credit to a buyer
4. All states and events are stored on-chain



## 🧪 Run Locally

npm install
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.ts --network localhost
💻 Tech Stack
Solidity — smart contract

Hardhat — development and testing

Chai — testing assertions

TypeScript — for scripts/tests

🌱 Next Steps
🔄 Add event history dashboard

🌍 Deploy to public testnet

🏛 DAO governance of credit validation

🌐 GitHub Repository
🔗 Carbon Credit Trading Source Code

📝 License
This project is licensed under the MIT License - see the LICENSE file.