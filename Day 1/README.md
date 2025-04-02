# Advanced Calculator

![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-%E2%9C%94-yellow)
![Ethereum](https://img.shields.io/badge/Ethereum-Smart%20Contracts-green)

## 📅 **Advanced Calculator Smart Contract**

### 🔍 **Overview**
Today, I built an **Advanced Calculator** smart contract that performs basic arithmetic operations such as addition, subtraction, multiplication, and division.

### 📜 **Key Features**
✅ **Addition, Subtraction, Multiplication, and Division** – Performs standard arithmetic operations
✅ **Error Handling** – Prevents division by zero
✅ **Efficient Computation** – Uses Solidity's built-in mathematical functions

### 🛠️ **How It Works**
1️⃣ **Users call functions** to perform calculations
2️⃣ **Smart contract returns the result**
3️⃣ **Division is safeguarded against zero-division errors**

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
- Implement **exponential and modulus operations**
- Add **support for floating-point arithmetic using fixed-point math**
- Develop **a frontend integration for interactive use**

### 🌐 **GitHub Repository**
[🔗 Advanced Calculator Source Code](https://github.com/your-repository-link)

---
#AdvancedCalculator #Blockchain #Solidity #Ethereum #SmartContracts #Web3 🚀
