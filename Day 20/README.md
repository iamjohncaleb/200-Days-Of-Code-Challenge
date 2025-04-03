<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2020.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 20 📅  WarFund Crowdfunding Smart Contract </h3>
</div>

### 🔍 **Overview**
This contract allows for decentralized crowdfunding where donations are collected to meet a funding goal. If the goal is met, funds are withdrawn. If not, donors can claim refunds.

### 📜 **Key Features**
✅ **Secure Donations** – Contributors can donate and track their funds  
✅ **Refund Mechanism** – If the goal isn't met, donors can reclaim their funds  
✅ **Goal-Based Withdrawal** – Owner can withdraw funds only if the target is achieved  

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
### 🔗 **Next Steps**
- Implement **donation milestones**
- Add **time-locked withdrawals**
- Introduce **NFT-based contribution rewards**