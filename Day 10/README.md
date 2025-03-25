[![Hardhat](https://img.shields.io/badge/Built%20With-Hardhat-yellow)](https://hardhat.org/)  
[![Solidity](https://img.shields.io/badge/Solidity-0.8.20-blue)](https://soliditylang.org/)  
[![Ethereum](https://img.shields.io/badge/Ethereum-Smart%20Contracts-green)](https://ethereum.org/en/developers/docs/smart-contracts/)  

# 📅 **Day 10: Simple Auction Smart Contract**

## 🔍 Overview
Today, I built a **simple auction smart contract** where users can place bids, and the highest bidder wins. The contract ensures secure bidding and withdrawal mechanisms.

## 📜 Key Features
✅ Users can place bids, with only the highest bid being accepted  
✅ Previous highest bidder can **withdraw** their funds if outbid  
✅ Only the **owner** can **end the auction** and claim the highest bid  

## 🛠️ How It Works
1. Users bid by sending ETH, ensuring it's **higher than the current bid**  
2. If a new highest bid is placed, the previous highest bidder can withdraw their bid  
3. The owner can **end the auction** and receive the highest bid amount  

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
git clone https://github.com/your-repo/simple-auction.git
cd simple-auction

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
const Auction = await ethers.getContractFactory("SimpleAuction");
const auction = await Auction.attach("YOUR_CONTRACT_ADDRESS");
await auction.bid({ value: ethers.parseEther("1") });
```

## 🔗 Next Steps
- Implement **auction time limits**  
- Add **automated refunding** of previous bids  
- Introduce **NFT-based auctions** for real-world assets  

#Day10 #200DaysOfCode #Solidity #SmartContracts #Ethereum #Blockchain #Web3 🚀

