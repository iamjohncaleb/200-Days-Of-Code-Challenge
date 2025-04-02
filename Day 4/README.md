# Weather Checker

![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-%E2%9C%94-yellow)
![Ethereum](https://img.shields.io/badge/Ethereum-Smart%20Contracts-green)

## 📅 **Weather Checker Smart Contract**

### 🔍 **Overview**
Today, I built a **Weather Checker** smart contract that allows the owner to update temperatures for different cities, and users can query the stored temperatures.

### 📜 **Key Features**
✅ **Owner Controlled** – Only the owner can update city temperatures  
✅ **Public Querying** – Anyone can check the temperature of a city  
✅ **On-Chain Storage** – Stores and retrieves weather data on-chain  

### 🛠️ **How It Works**
1️⃣ **Owner updates** the temperature of a city  
2️⃣ **Users query** the temperature for any stored city  

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
- Implement **oracle integration** for real-time weather data  
- Add **historical temperature storage** for analytics  
- Integrate **frontend UI for user-friendly access**  

### 🌐 **GitHub Repository**
[🔗 Weather Checker Source Code](https://github.com/your-repository-link)

---
#WeatherChecker #Blockchain #Solidity #Ethereum #SmartContracts #Web3 🚀