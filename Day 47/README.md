<div align="center">
  <br />
  <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2047.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/Built%20With-Hardhat-blue" />
    <img src="https://img.shields.io/badge/Solidity-0.8.21-purple" />
    <img src="https://img.shields.io/badge/Tests-Chai%20%26%20Waffle-green" />
    <img src="https://img.shields.io/badge/Network-Localhost-orange" />
  </div>

  <h3 align="center">📅 Day 47: Secure Election & Referendum Voting</h3>
</div>

## 🔍 **Overview**

This **Secure Election & Referendum Voting Smart Contract** enables a transparent, decentralized voting system for elections and referendums. Voters can cast their votes for candidates, and the results are automatically determined once the election period ends. Only the admin can start or end the election and add new candidates.

---

## 📜 **Key Features**
✅ **Election Creation** — Admin can start and configure the election  
✅ **Voting System** — Voters can cast one vote for a candidate  
✅ **Candidate Management** — Admin can add new candidates during the election  
✅ **Election Results** — Automatically determines the winner once the election ends  

---

## 🛠️ **How It Works**

1️⃣ The **admin** starts an election, specifying the title, duration, and candidates  
2️⃣ **Voters** cast their votes for one of the candidates  
3️⃣ The **admin** can add new candidates during the election  
4️⃣ Once the election ends, the contract automatically determines the **winning candidate** based on vote count  

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
- 🔒 Implement **role-based access** for election management  
- 🔄 Enable **multi-round elections** for large referendums  
- 🖥️ Build a **frontend** for voter registration and election results  

---

## 🌐 **GitHub Repository**
[🔗 Secure Election Voting Source Code](https://github.com/your-repository-link)

---

#ElectionVoting #Solidity #SmartContracts #Web3 #200DaysOfCode 🚀
