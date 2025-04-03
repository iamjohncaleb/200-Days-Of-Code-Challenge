<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/Day%2012.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 12 📅 Unique Multi-Signature Wallet Smart Contract/h3>
</div>

### 🔍 **Overview**  
Today, I built a **Unique Multi-Signature Wallet** smart contract that requires multiple owners to approve transactions before execution. This increases security and decentralization in fund management.  

### 📜 **Key Features**  
✅ **Multiple Owners** – Only designated owners can propose, approve, and execute transactions  
✅ **Approval Mechanism** – Transactions need a minimum number of approvals before execution  
✅ **Secure Fund Transfers** – Ensures funds are not sent unless properly authorized  

### 🛠️ **How It Works**  
1️⃣ **Owners propose** a transaction with recipient address & amount  
2️⃣ **Other owners approve** the transaction  
3️⃣ Once the required approvals are met, the transaction **can be executed**  

### 🚀 **Setup and Running the Project**  
#### **1️⃣ Install Dependencies**  
Ensure you have **Node.js** and **npm** installed. Then, run:  
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
- Implement **event logging** for better transparency  
- Add **revocation of approvals** before execution  
- Include **time-based transaction expiration** for unapproved proposals  

### 🌐 **GitHub Repository**  
[🔗 MultiSig Wallet Source Code](https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/tree/main/Day%2012)  

---  
#Day12 #200DaysOfCode #Solidity #MultiSig #SmartContracts #Ethereum #Blockchain #Web3 🚀

