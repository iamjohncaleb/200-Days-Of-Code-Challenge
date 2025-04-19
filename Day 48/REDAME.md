<div align="center">
  <br />
  <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2048.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/Built%20With-Hardhat-blue" />
    <img src="https://img.shields.io/badge/Solidity-0.8.21-purple" />
    <img src="https://img.shields.io/badge/Tests-Chai%20%26%20Waffle-green" />
    <img src="https://img.shields.io/badge/Network-Localhost-orange" />
  </div>

  <h3 align="center">📅 Day 48: Intelligence Data Integrity Hash Registry</h3>
</div>

## 🔍 **Overview**

This **Intelligence Data Integrity Hash Registry Smart Contract** ensures the integrity of sensitive intelligence data by storing its hash and providing a mechanism for verifying its authenticity. This registry helps ensure that intelligence data hasn't been tampered with by comparing the stored hash with the hash of the original data.

---

## 📜 **Key Features**
✅ **Register Data Hashes** — Admin can register the hash of intelligence data  
✅ **Verify Data Integrity** — Anyone can verify whether a data hash is registered  
✅ **Timestamp Tracking** — Store and retrieve the timestamp when the hash was registered  

---

## 🛠️ **How It Works**

1️⃣ The **admin** registers the hash of the intelligence data.  
2️⃣ The contract stores the hash along with the **timestamp** of registration.  
3️⃣ Anyone can verify the integrity of the data by checking if the hash exists in the registry.  
4️⃣ The contract also provides a way to retrieve the **timestamp** of the registered hash.  

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
- 🔒 Implement **role-based access** for data hash management  
- 🔄 Integrate **off-chain storage** for large data with hash verification  
- 🖥️ Build a **frontend** for data registration and integrity checks  

---

## 🌐 **GitHub Repository**
[🔗 Intelligence Data Hash Registry Source Code](https://github.com/your-repository-link)

---

#DataIntegrity #Solidity #SmartContracts #Blockchain #Web3 #200DaysOfCode 🚀
