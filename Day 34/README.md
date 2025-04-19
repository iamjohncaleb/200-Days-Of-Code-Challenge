<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2034.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">📅 Day 34 TimeLockedVault Smart Contract </h3>
</div>

### 🔍 **Overview**
A Time-Locked Vault smart contract that securely holds ETH deposits for a specified lock duration. Users can deposit ETH, and withdraw it only after their personal unlock time has passed.

📜 Key Features

✅ Time-Locked Deposits – Funds are locked for a specified duration per deposit

✅ User-Specific Unlock Time – Each user manages their own vault duration

✅ Secure ETH Withdrawals – Only possible after lock duration expires

✅ Event Emissions for Deposits and Withdrawals

🛠️ How It Works
1️⃣ Deposit ETH with a custom lock time (in seconds)

2️⃣ Withdraw ETH after unlock time has passed

3️⃣ Event logs track deposits and withdrawals

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
```sh
npx hardhat run scripts/deploy_warfund_crowdfunding.js --network goerli
```
#### **4️⃣ Run Tests**
```sh
npx hardhat test
```

#Day34 #200DaysOfCode #Solidity #SmartContracts #Web3 #Blockchain #Ethereum 🚀
