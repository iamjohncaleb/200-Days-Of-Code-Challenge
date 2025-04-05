<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2022.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 22 📅 Unique Escrow Smart Contract </h3>
</div>

### 🔍 **Overview**  
Today, I built a **Unique Escrow Smart Contract** to securely manage transactions between a buyer and a seller with the help of an arbiter. It guarantees fair outcomes for both parties.

### 📜 **Key Features**  
✅ **Buyer Funds Escrow** – Funds are locked in the contract until conditions are fulfilled  
✅ **Arbiter Resolves Disputes** – A neutral party can release or refund based on agreement  
✅ **Funds Released or Refunded** – Ensures secure and balanced fund handling  

### 🛠️ **How It Works**  
1️⃣ **Buyer deposits** ETH into the contract  
2️⃣ **Arbiter reviews** the transaction outcome  
3️⃣ **Funds are either released** to the seller or refunded to the buyer  

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
To deploy on Goerli testnet:
```sh
npx hardhat run scripts/deploy_escrow_smartcontract.js --network goerli
```

#### **4️⃣ Run Tests**  
```sh
npx hardhat test
```

---
#Day22 #200DaysOfCode #Solidity #SmartContracts #Escrow #Ethereum #Web3 #Blockchain 🚀


