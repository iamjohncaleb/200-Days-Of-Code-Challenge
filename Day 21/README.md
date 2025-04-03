



# Twitter Smart Contract

![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-%E2%9C%94-yellow)
![Ethereum](https://img.shields.io/badge/Ethereum-Smart%20Contracts-green)

## 📅 **Twitter Smart Contract**

### 🔍 **Overview**
A simple decentralized Twitter-like smart contract allowing users to post tweets.

### 📜 **Key Features**
✅ **Post Tweets** – Users can post messages on-chain  
✅ **Immutable History** – Tweets are permanently stored on the blockchain  
✅ **Retrieve Tweets** – Anyone can fetch the full list of tweets  

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
```sh
npx hardhat run scripts/deploy_twitter_smartcontract.js --network goerli
```
#### **4️⃣ Run Tests**
```sh
npx hardhat test
```
### 🔗 **Next Steps**
- Implement **likes and retweets**
- Add **follow/unfollow functionality**
- Introduce **tweet deletion mechanism**
