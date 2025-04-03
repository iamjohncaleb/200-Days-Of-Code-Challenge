<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2019.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 19 📅  Token Vesting Smart Contract </h3>
</div>

### 🔍 **Overview**  
Today, I built a **Token Vesting Smart Contract** that ensures a beneficiary gradually receives tokens over a set duration. This prevents early dumping and supports fair token distribution.  

### 📜 **Key Features**  
✅ **Supports ERC-20 Tokens** – Any ERC-20 token can be used for vesting  
✅ **Gradual Token Release** – Tokens are unlocked over a set period  
✅ **Secure Withdrawals** – Beneficiary can claim vested tokens incrementally  

### 🛠️ **How It Works**  
1️⃣ The contract **locks tokens** for a specified duration  
2️⃣ The beneficiary **calls release()** to withdraw vested tokens  
3️⃣ The contract **automatically calculates** the amount available for withdrawal  

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
npx hardhat run scripts/deploy_token_vesting.js --network localhost  
```
To deploy on Goerli or another testnet, add the network configuration in **hardhat.config.js** and use:  
```sh
npx hardhat run scripts/deploy_token_vesting.js --network goerli  
```

#### **4️⃣ Run Tests**  
```sh  
npx hardhat test  
```
This will simulate vesting scenarios and validate correct behavior.  



### 🌐 **GitHub Repository**  
[🔗 Token Vesting Source Code](https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/tree/main/Day%2019)  

---  
#SmartContracts #Solidity #Ethereum #Blockchain #TokenVesting #Web3 🚀

