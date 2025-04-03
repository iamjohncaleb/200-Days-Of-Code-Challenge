<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/Day%2011.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 11 📅 ERC-20 Airdrop Smart Contract </h3>
</div>


## 🔍 Overview
Today's project is an **Airdrop smart contract** that allows the owner to distribute ERC-20 tokens to multiple recipients in a single transaction.

## 📜 Key Features
✅ Uses an **IERC20 interface** to interact with any ERC-20 token  
✅ Only the **owner** can distribute tokens  
✅ Efficient **batch token transfer** to multiple recipients  

## 🛠️ How It Works
1. The contract is deployed with an ERC-20 token address  
2. The owner calls `distributeTokens()`, passing recipient addresses and amount  
3. The contract **loops through recipients** and sends tokens to each  

## 🚀 Getting Started
### 📌 Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Hardhat](https://hardhat.org/)
- [MetaMask](https://metamask.io/)

### 📥 Installation
Clone the repository and install dependencies:
```sh
# Clone the repository
git clone https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge.git
cd 200-Days-Of-Code-Challenge/Day%2011

# Install dependencies
npm install
```

### ⚙️ Compile Contracts
```sh
npx hardhat compile
```

### 🛠️ Deploy the Contract
```sh
npx hardhat run scripts/deploy.js --network localhost
```

### 🧪 Run Tests
```sh
npx hardhat test
```

### 🚀 Start Local Hardhat Node
```sh
npx hardhat node
```

### 🔗 Interact with Contract
Run the Hardhat console:
```sh
npx hardhat console --network localhost
```
Then interact with the contract manually:
```js
const Airdrop = await ethers.getContractFactory("Airdrop");
const airdrop = await Airdrop.attach("YOUR_CONTRACT_ADDRESS");
await airdrop.distributeTokens(["0xRecipient1", "0xRecipient2"], ethers.parseEther("10"));
```

## 🔗 Next Steps
- Implement **event logging** for better tracking  
- Add **vesting schedules** for time-based token releases  
- Enable **claim-based airdrop** where users request their tokens  

🔗 **GitHub Repository:** [Day 11 - ERC-20 Airdrop Smart Contract](https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/tree/main/Day%2011)  

#Day11 #200DaysOfCode #Solidity #ERC20 #Airdrop #SmartContracts #Blockchain #Web3 🚀

