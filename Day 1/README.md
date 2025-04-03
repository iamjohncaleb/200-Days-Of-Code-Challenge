<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%201.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">🚀 Advanced Calculator Smart Contract</h3>
</div>

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
