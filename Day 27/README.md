<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2027.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 27 📅 Decentralized Identity Smart Contract </h3>
</div>

### 🔍 **Overview**
Today, I built a **Decentralized Identity** smart contract that allows users to create and manage their own digital identity in a secure and trustless manner.

### 📜 **Key Features**
✅ **Self-Sovereign Identity** – Users have full control over their identity
✅ **Decentralized Storage** – Identity data is securely stored on-chain
✅ **Permissionless Access** – Anyone can verify identities but only users can update them

### 🛠️ **How It Works**
1️⃣ **User registers** their identity with name, email, and metadata
2️⃣ **Identity is stored** on the blockchain under the user’s address
3️⃣ **User can update** their identity at any time

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
- Implement **verifiable credentials** for trusted authentication
- Add **support for on-chain attestations**
- Introduce **decentralized identity revocation mechanism**

### 🌐 **GitHub Repository**
[🔗 Decentralized Identity Source Code](https://github.com/your-repository-link)

---
#DecentralizedIdentity #Blockchain #Solidity #Ethereum #SmartContracts #Web3 🚀


#100DaysOfCode #Web3 #Solidity #SmartContracts #Ethereum #DecentralizedIdentity #Blockchain
