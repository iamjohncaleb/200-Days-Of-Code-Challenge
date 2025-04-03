<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/Day%2017.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 17 📅  Token Vesting Smart Contract</h3>
</div>

### 🔍 **Overview**
Today, I built a **Token Vesting** smart contract that locks tokens for a specific period before they can be released to the beneficiary.

### 📜 **Key Features**
✅ **Time-Locked Release** – Tokens are locked until the vesting period ends
✅ **Secure Transfers** – Ensures tokens can only be released to the designated beneficiary
✅ **Automatic Vesting** – Prevents premature withdrawals

### 🛠️ **How It Works**
1️⃣ **Tokens are locked** at deployment for a specified period
2️⃣ **Once the release time is reached**, the beneficiary can claim the tokens
3️⃣ **No premature withdrawals** are allowed

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
[🔗 Token Vesting Source Code](https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/edit/main/Day%2017)

---
#TokenVesting #Blockchain #Solidity #Ethereum #SmartContracts #Web3 🚀
