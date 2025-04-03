<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/Day%205.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 5 📅 Time Lock Smart Contract</h3>
</div>

### 🔍 **Overview**
Today, I built a **Time Lock** smart contract that locks ETH for a set period before allowing withdrawals. It ensures secure time-based fund releases.

### 📜 **Key Features**
✅ **Time-Based Lock** – Funds are locked for a specific duration before withdrawal
✅ **Owner-Controlled** – Only the contract owner can withdraw funds
✅ **Emergency Withdrawal** – Owner can withdraw funds in emergencies

### 🛠️ **How It Works**
1️⃣ **Owner deposits** ETH into the contract
2️⃣ **Owner can withdraw** after the unlock period
3️⃣ **Emergency withdrawal** is available if needed

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


### 🌐 **GitHub Repository**
[🔗 Time Lock Source Code](https://github.com/your-repository-link)

---
#TimeLock #Blockchain #Solidity #Ethereum #SmartContracts #Web3 🚀
