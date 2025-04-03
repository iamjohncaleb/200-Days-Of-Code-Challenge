<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2023.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 23 📅 Staking Smart Contract </h3>
</div>


### 🔍 **Overview**
A decentralized staking smart contract that allows users to stake tokens and earn rewards.

### 📜 **Key Features**
✅ **Stake ERC20 tokens** – Users can stake tokens for rewards  
✅ **Reward system** – Earn rewards over time based on stake duration  
✅ **Secure unstaking** – Users can withdraw their stake and rewards  

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
npx hardhat run scripts/deploy_staking_smartcontract.js --network goerli
```
#### **4️⃣ Run Tests**
```sh
npx hardhat test
```
### 🔗 **Next Steps**
- Implement **time-based boost rewards**
- Add **multi-token staking support**
- Improve **UI for staking interaction**
