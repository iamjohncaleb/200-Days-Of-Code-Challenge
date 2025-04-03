<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2026.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 26 📅 NFT Auction </h3>
</div>

### 🔍 **Overview**  
Today, I built an **NFT Auction** smart contract that allows users to create and bid on NFT auctions in a decentralized manner. This ensures fair bidding and secure transfers of NFTs.  

### 📜 **Key Features**  
✅ **Auction Creation** – Users can list their NFTs for auction with a starting price and duration  
✅ **Bidding Mechanism** – Participants can place bids, with only the highest bid being valid  
✅ **Secure NFT Transfers** – Ensures the highest bidder receives the NFT after auction completion  

### 🛠️ **How It Works**  
1️⃣ **Seller lists** an NFT with a minimum starting price and auction duration  
2️⃣ **Bidders compete** by placing bids, ensuring only the highest bid is recorded  
3️⃣ When the auction ends, **the highest bidder wins** and receives the NFT  

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
- Implement **event logging** for better tracking  
- Add **bid extensions** if bids are placed near the auction end  
- Introduce **minimum bid increments** to prevent spamming  

### 🌐 **GitHub Repository**  
[🔗 NFT Auction Source Code](https://github.com/your-repository-link)  

---  
#NFTAuction #Blockchain #Solidity #Ethereum #SmartContracts #Web3 🚀


#100DaysOfCode #Web3 #Solidity #SmartContracts #Ethereum #NFTs #Auction #Blockchain

