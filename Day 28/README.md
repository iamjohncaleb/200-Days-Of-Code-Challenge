<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2028.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 28 📅 Decentralized Voting Smart Contract </h3>
</div>


### 🔍 **Overview**
Today, I built a **Decentralized Voting** smart contract that enables secure, tamper-proof voting on the blockchain.

### 📜 **Key Features**
✅ **Admin-Managed Voter Registration** – Only authorized users can vote
✅ **Proposal Creation** – Admins can create multiple proposals
✅ **Transparent Voting** – Votes are stored immutably on-chain

### 🛠️ **How It Works**
1️⃣ **Admin registers** voters
2️⃣ **Admin creates** proposals
3️⃣ **Voters cast** their votes securely

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

### 🔗 **Next Steps**
- Implement **anonymous voting**
- Add **vote delegation** for better accessibility
- Introduce **voter eligibility criteria**

### 🌐 **GitHub Repository**
[🔗 Decentralized Voting Source Code](https://github.com/your-repository-link)

---
#DecentralizedVoting #Blockchain #Solidity #Ethereum #SmartContracts #Web3 🚀
