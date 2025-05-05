<div align="center">
  <br />
  <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2056.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/Built%20With-Hardhat-blue" />
    <img src="https://img.shields.io/badge/Solidity-0.8.21-purple" />
    <img src="https://img.shields.io/badge/Tests-Chai%20%26%20Waffle-green" />
    <img src="https://img.shields.io/badge/Network-Localhost-orange" />
  </div>

  <h3 align="center">📅 Day 56: Decentralized Farm Co-operative Voting</h3>
</div>

---

## 🔍 **Overview**

A **Decentralized Voting DApp for Farm Co-operatives** — empowering verified co-op members to create proposals and vote on initiatives transparently using blockchain technology.

---

## 📜 **Key Features**

✅ **Member Registration** — Only approved members can vote  
✅ **Proposal Creation** — Registered members can submit proposals  
✅ **Voting System** — Each member can vote once per proposal  
✅ **Tally Results** — Results are computed automatically on-chain  

---

## 🛠️ **How It Works**

1️⃣ The **co-operative owner** (contract deployer) adds verified members  
2️⃣ Members can submit **proposals** describing changes or requests  
3️⃣ Each member casts **one vote** (yes/no) per proposal  
4️⃣ Results are **automatically tallied** after the voting period ends  

---

## 🚀 **Setup and Running the Project**

#### **1️⃣ Install Dependencies**
```bash
npm install
````

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

#### **5️⃣ Launch the Frontend**

```bash
npm run dev
```

---

## 🌐 **Technologies Used**

* **Solidity** for smart contract logic
* **Hardhat** for development, deployment, and testing
* **Next.js + Tailwind CSS** for sleek futuristic frontend
* **Wagmi + RainbowKit** for smooth wallet integration

---

## 📌 **Next Steps**

* 🧾 Add proposal description validation
* ⏱️ Enable voting deadline control
* 🌐 Enable multi-cooperative DAO support
* 📈 On-chain activity dashboard

---

## 🌐 **GitHub Repository**

[🔗 Farm Co-op Voting Source Code](https://github.com/your-repository-link)

---

#FarmDAO #Solidity #SmartContracts #Web3 #200DaysOfCode
