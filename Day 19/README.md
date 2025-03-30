![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)  
![Hardhat](https://img.shields.io/badge/Hardhat-%E2%9C%94-yellow)  
![Ethereum](https://img.shields.io/badge/Ethereum-Smart%20Contracts-green)  

## 📅 **Day 19: Token Vesting Smart Contract**  

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

### 🔗 **Next Steps**  
- Implement **cliff vesting** for time-based release schedules  
- Add **multiple beneficiary support**  
- Enable **vesting schedule updates** if needed  

### 🌐 **GitHub Repository**  
[🔗 Token Vesting Source Code](https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/tree/main/Day%2019)  

---  
#SmartContracts #Solidity #Ethereum #Blockchain #TokenVesting #Web3 🚀

