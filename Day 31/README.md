<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2031.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 31 📅  GovernanceToken Smart Contract </h3>
</div>

### 🔍 **Overview**

A Governance Token Smart Contract that allows token holders to participate in decentralized decision-making by creating proposals and voting with their token balance as voting power.

📜 Key Features
✅ ERC20-like Token Mechanics – Simple transfer functionality
✅ Proposal Creation – Anyone can initiate proposals
✅ Voting System – Token-weighted voting system
✅ Winning Proposal Detection – Query the highest voted proposal

🛠️ How It Works
1️⃣ Deploys with total supply allocated to contract creator
2️⃣ Tokens can be transferred between addresses
3️⃣ Anyone can create proposals describing a governance action
4️⃣ Token holders vote on proposals, weighted by their token holdings
5️⃣ Winning proposal can be retrieved on-chain


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

#Day 31 #200DaysOfCode #Solidity #SmartContracts #GovernanceToken #DAO #Web3 🚀
