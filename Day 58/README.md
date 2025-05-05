<div align="center">
  <br />
  <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2058.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/Built%20With-Hardhat-blue" />
    <img src="https://img.shields.io/badge/Solidity-0.8.21-purple" />
    <img src="https://img.shields.io/badge/Tests-Chai%20%26%20Waffle-green" />
    <img src="https://img.shields.io/badge/Network-Localhost-orange" />
  </div>

  <h3 align="center">📅Day 58 Soil & Input Quality Verification Contract</h3>
</div>

## 🔍 **Overview**

A **Soil & Input Quality Verification Smart Contract** designed to provide transparency and traceability in agricultural quality assessments. This contract allows verifiers to submit quality reports for soil and agricultural inputs (seeds, fertilizers) and enables farmers to access and validate these reports.

---

## 📜 **Key Features**

✅ **Verifier Registration** — Only authorized verifiers can submit quality reports.  
✅ **Submit Quality Reports** — Registered verifiers can submit soil and input quality reports.  
✅ **Invalidate Reports** — The contract owner can invalidate any report if needed.  
✅ **Transparency** — Farmers can access the reports at any time.

---

## 🛠️ **How It Works**

1️⃣ **Register Verifiers**: The owner registers verifiers who are authorized to submit reports.  
2️⃣ **Submit Reports**: Verifiers submit reports for soil and input quality, with each report being timestamped.  
3️⃣ **Invalidate Reports**: The contract owner can invalidate any report that is found to be incorrect.

---

## 🚀 **Setup and Running the Project**

#### **1️⃣ Install Dependencies**

npm install
2️⃣ Compile the Smart Contract
bash
Copy
Edit
npx hardhat compile
3️⃣ Run Tests
bash
Copy
Edit
npx hardhat test
4️⃣ Deploy the Contract (Local)
bash
Copy
Edit
npx hardhat run scripts/deploy.ts --network localhost
5️⃣ Start the Hardhat Node (for local network)
bash
Copy
Edit
npx hardhat node
🌐 Technologies Used
Solidity for smart contract logic

Hardhat for development, deployment, and testing

TypeScript for smart contract and testing scripts

Ethers.js for Ethereum interaction

🌐 GitHub Repository
🔗 Soil & Input Quality Verification Contract Source Code

#Agriculture #SmartContracts #Blockchain #SoilVerification #200DaysOfCode
