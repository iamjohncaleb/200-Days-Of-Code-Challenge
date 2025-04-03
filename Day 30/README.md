<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2030.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 30 📅 Liquidity Pool Smart Contract </h3>
</div>


### 🔍 **Overview**
Today, I built a **Liquidity Pool** smart contract that allows users to add liquidity and swap tokens in a decentralized manner.

### 📜 **Key Features**
✅ **Liquidity Provision** – Users can add liquidity by depositing token pairs
✅ **Token Swaps** – Users can trade between token pairs in the pool
✅ **Automated Pricing** – Uses reserves to determine swap rates

### 🛠️ **How It Works**
1️⃣ **Users provide liquidity** by depositing token pairs
2️⃣ **Traders swap tokens** based on available reserves
3️⃣ **Pricing is adjusted** dynamically based on liquidity changes

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
- Implement **fee structures** for liquidity providers
- Add **slippage control mechanisms**
- Introduce **cross-chain liquidity support**

### 🌐 **GitHub Repository**
[🔗 Liquidity Pool Source Code](https://github.com/your-repository-link)

---
#LiquidityPool #Blockchain #Solidity #Ethereum #SmartContracts #Web3 🚀
