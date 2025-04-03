<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%201.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">📅 Advanced TimeLock Smart Contract</h3>
</div>


### 🔍 **Overview**
Today, I built an **Advanced TimeLock** smart contract that allows funds or operations to be locked until a specified unlock time, ensuring delayed execution.

### 📜 **Key Features**
✅ **Lock Mechanism** – Funds or execution locked until a set time
✅ **Time-based Access Control** – Unlock only after the predefined timestamp
✅ **Secure Execution** – Prevents premature unlocking

### 🛠️ **How It Works**
1️⃣ **Owner sets the unlock time upon deployment**
2️⃣ **Funds or operations remain locked until the set time**
3️⃣ **Owner can unlock once the unlock time is reached**

### 🚀 **Setup and Running the Project**
#### **1️⃣ Install Dependencies**
```sh
npm install
```

#### **2️⃣ Compile the Smart Contract**
```sh
npx hardhat compile
```

#### **3️⃣ Deploy the Contract**
To deploy on a local Hardhat network:
```sh
npx hardhat node  
npx hardhat run scripts/deploy.js --network localhost
```
To deploy on Sepolia or another testnet, add the network configuration in **hardhat.config.js** and use:
```sh
npx hardhat run scripts/deploy.js --network sepolia
```

#### **4️⃣ Run Tests**
```sh
npx hardhat test
```

### 🔗 **Next Steps**
- Implement **funds locking mechanism**
- Add **multi-signature unlock support**
- Integrate **frontend UI for tracking lock status**

### 🌐 **GitHub Repository**
[🔗 Advanced TimeLock Source Code](https://github.com/your-repository-link)

---
#AdvancedTimeLock #Blockchain #Solidity #Ethereum #SmartContracts #Web3 🚀
