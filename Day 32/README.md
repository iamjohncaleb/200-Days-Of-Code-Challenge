<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2032.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">📅 Day 32: TokenBridge Smart Contract </h3>
</div>


A Token Bridge Smart Contract for secure token transfers between chains via locking and minting mechanisms.

📜 Key Features
✅ Lock Tokens – Users lock tokens on the source chain
✅ Release & Mint Tokens – Bridge admin releases equivalent tokens on the target chain via mint()
✅ Event Emission – Emits Locked and Released events for off-chain tracking
✅ Simple Interface-based Integration

🛠️ How It Works
1️⃣ Deploys with the target bridge address as a parameter
2️⃣ Users lock tokens via lockTokens()
3️⃣ Admin releases tokens and triggers mint on target bridge contract

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

#Day32 #200DaysOfCode #Solidity #SmartContracts #TokenBridge #Ethereum #Blockchain #Web3 🚀
