<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/Day%2018.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 18 📅  Enhanced NFT Smart Contract </h3>
</div>

🔍 **Overview**  
Today’s contract is an **Enhanced NFT Smart Contract**, adding functionality beyond a basic ERC-721 implementation. It includes **whitelisting, mint price enforcement, pausing capabilities, and fund withdrawal**.  

📜 **Key Features**  
✅ **Whitelisted Minting** – Only approved users can mint NFTs  
✅ **Mint Price Enforcement** – Ensures users pay the correct ETH amount  
✅ **Max Supply Limit** – Prevents minting beyond a set supply  
✅ **Pause & Unpause Minting** – Owner can halt minting if needed  
✅ **Secure Fund Withdrawal** – Owner can collect funds from mint sales  

🛠️ **How It Works**  
1️⃣ The **owner sets max supply and mint price** during deployment  
2️⃣ Users **must be whitelisted** to mint NFTs  
3️⃣ Minting is **paused/unpaused** by the owner for better control  
4️⃣ Minted NFTs have **unique URIs** linked to metadata  
5️⃣ The contract **receives ETH** and allows the owner to withdraw funds  

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
npx hardhat run scripts/deploy_token_vesting.js --network localhost  
```
To deploy on Goerli or another testnet, add the network configuration in **hardhat.config.js** and use:  
```sh
npx hardhat run scripts/deploy_token_vesting.js --network goerli  
```

#### **4️⃣ Run Tests**  
```sh  
npx hardhat test  
```
This will simulate vesting scenarios and validate correct behavior.  



### 🌐 **GitHub Repository**  
[🔗 Token Vesting Source Code](https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/tree/main/Day%2018)  

---  

#Day18 #200DaysOfCode #Solidity #NFTs #Blockchain #Crypto 🚀
