<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2033.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">📅Day 33 AlgorithmicStablecoin Smart Contract </h3>
</div>

### 🔍 **Overview**
An algorithmic stablecoin contract that adjusts total supply through rebasing based on price deviations, simulating a pegged value of 1 AST = 1 USD.

📜 Key Features
✅ Rebase Mechanism – Dynamically increases or decreases total supply based on price feed
✅ Oracle-Controlled – Only an authorized oracle address can trigger rebase operations
✅ Basic ERC20-like Transfers and Approvals
✅ Event Emissions for Transfers, Rebases, and Oracle Updates

🛠️ How It Works
1️⃣ Deployed with initial supply and oracle address
2️⃣ Transfers supported via transfer() and transferFrom()
3️⃣ Rebase function adjusts total supply based on provided price input
4️⃣ Oracle address can be updated by the current oracle

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


#Day33 #200DaysOfCode #Solidity #Stablecoins #SmartContracts #Web3 #Blockchain #Ethereum 🚀
