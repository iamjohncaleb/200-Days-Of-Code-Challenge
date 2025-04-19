# 📅 Day 41: Secure Identity Verification Smart Contract

[![Solidity](https://img.shields.io/badge/Solidity-0.8.20-blue.svg)](https://soliditylang.org)
[![Hardhat](https://img.shields.io/badge/Hardhat-2.20.0-yellow.svg)](https://hardhat.org)
[![Ethers.js](https://img.shields.io/badge/Ethers.js-6.8.1-green.svg)](https://docs.ethers.org/v6/)

## 🔍 Overview
Today’s build is a **Secure Identity Verification Smart Contract** — a decentralized identity system where individuals can register their identity data and an admin verifies them on-chain.

## 📜 Key Features
✅ Identity Registration (name + national ID)\
✅ Admin-only verification authority\
✅ On-chain verification status check\
✅ Emits events for registration and verification

## 🛠️ How It Works
1️⃣ Users register with their name and national ID.\
2️⃣ The contract owner (admin) reviews and verifies identities.\
3️⃣ Anyone can query an address’ verification status on-chain.\
4️⃣ Events track key actions for transparency.

## 🚀 Setup and Running the Project

### 1️⃣ Install Dependencies

```sh
npm install
2️⃣ Compile the Smart Contract
sh
Copy
Edit
npx hardhat compile
3️⃣ Deploy the Contract (Local)
sh
Copy
Edit
npx hardhat run scripts/deploy_identity.js --network localhost
4️⃣ Run Tests
sh
Copy
Edit
npx hardhat test
🔗 Next Steps
Integrate decentralized identity (DID) standards

Build a React/Next.js frontend for on-chain identity verification

Add multi-signature admin controls

#Day41 #200DaysOfCode #Solidity #SmartContracts #NationalSecurity #IdentityVerification #Web3 🚀