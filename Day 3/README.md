<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/Day%203.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">📅 Advanced Lottery Smart Contract</h3>
</div>

### 🔍 **Overview**
Today, I built an **Advanced Lottery** smart contract that allows users to enter with a fixed fee, and a winner is randomly selected to receive the total prize pool.

### 📜 **Key Features**
✅ **Entry Mechanism** – Users enter by paying a fixed fee  
✅ **Random Winner Selection** – Ensures fair distribution of winnings  
✅ **Secure Prize Payout** – The contract automatically transfers funds to the winner  

### 🛠️ **How It Works**
1️⃣ **Users enter** the lottery by sending 0.1 ETH  
2️⃣ **Contract randomly picks a winner** when called by the manager  
3️⃣ **Winner receives** the total prize pool automatically  

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
[🔗 Advanced Lottery Source Code](https://github.com/your-repository-link)

---
#AdvancedLottery #Blockchain #Solidity #Ethereum #SmartContracts #Web3 🚀
