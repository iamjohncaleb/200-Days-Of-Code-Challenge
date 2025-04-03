<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/Day%204.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 4 📅 Weather Checker Smart Contract</h3>
</div>

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
