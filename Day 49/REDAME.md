<div align="center">
  <br />
  <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2049.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/Built%20With-Hardhat-blue" />
    <img src="https://img.shields.io/badge/Solidity-0.8.21-purple" />
    <img src="https://img.shields.io/badge/Tests-Chai%20%26%20Waffle-green" />
    <img src="https://img.shields.io/badge/Network-Localhost-orange" />
  </div>

  <h3 align="center">📅 Day 49: Counter-Terrorism Transaction Monitor</h3>
</div>

## 🔍 **Overview**

This **Counter-Terrorism Transaction Monitor Smart Contract** tracks and monitors transactions to detect suspicious or high-value activities that could indicate potential terrorism financing or other illicit activities. The contract logs all transactions and flags those that exceed a pre-defined threshold.

---

## 📜 **Key Features**
✅ **Record Transactions** — Log all transactions made by users  
✅ **Trigger Suspicious Events** — Flag high-value transactions that exceed a defined threshold  
✅ **Adjustable Threshold** — The admin can modify the suspicious threshold  
✅ **Track User Balances** — Users can deposit and transfer ETH while their balances are tracked  

---

## 🛠️ **How It Works**

1️⃣ The **admin** sets a **suspicious transaction threshold** (e.g., 1000 ETH).  
2️⃣ **Users** can deposit and transfer ETH, with each transaction being recorded.  
3️⃣ If a transaction exceeds the threshold, it is **flagged as suspicious**.  
4️⃣ The contract allows the **admin** to adjust the suspicious threshold.

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
- 🔒 Implement **role-based access control** for the admin  
- 🧑‍💻 Create a **frontend** to view flagged transactions and modify the threshold  
- 🔄 Integrate with **off-chain monitoring** systems for real-time alerts  

---

## 🌐 **GitHub Repository**
[🔗 Counter-Terrorism Transaction Monitor Source Code](https://github.com/your-repository-link)

---

#CounterTerrorism #Solidity #SmartContracts #Blockchain #Web3 #200DaysOfCode 🚀
