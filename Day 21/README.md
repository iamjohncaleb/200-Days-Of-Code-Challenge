<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2021.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 21 📅 Twitter Smart Contract </h3>
</div>

### 🔍 **Overview**  
Today, I built a **Twitter-like decentralized application** smart contract that allows users to post tweets on-chain. It brings transparency and immutability to social interactions.

### 📜 **Key Features**  
✅ **Post Tweets** – Users can write and store messages on-chain  
✅ **Immutable History** – Once posted, tweets cannot be deleted or altered  
✅ **Retrieve Tweets** – Anyone can access all stored tweets at any time  

### 🛠️ **How It Works**  
1️⃣ **Users send a transaction** to post their message  
2️⃣ **Messages are stored immutably** in the blockchain  
3️⃣ **Anyone can read** the full list of tweets via a public function  

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
To deploy on Goerli testnet:
```sh
npx hardhat run scripts/deploy_twitter_smartcontract.js --network goerli
```

#### **4️⃣ Run Tests**  
```sh
npx hardhat test
```

### 🔗 **Next Steps**  
- Add **like and retweet** functionality  
- Introduce **hashtags** and **filters**  
- Build a **React frontend** for seamless interaction  

---

#Day21 #200DaysOfCode #Solidity #SmartContracts #Ethereum #Blockchain #Web3 🚀
