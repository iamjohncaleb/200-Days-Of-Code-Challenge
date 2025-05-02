# 📅 Day 50: Satellite Imagery Access NFTs

![Hardhat](https://img.shields.io/badge/Built%20With-Hardhat-blue)
![Solidity](https://img.shields.io/badge/Solidity-0.8.21-purple)
![NFTs](https://img.shields.io/badge/Feature-NFTs-yellow)
![Ethereum](https://img.shields.io/badge/Network-Ethereum-green)

## 🔍 Overview
This smart contract allows users to mint NFTs that provide access to satellite imagery data. These NFTs serve as tokens granting access to specific datasets, images, or metadata from satellite missions.

## 📜 Key Features
✅ Mint NFTs for Satellite Imagery Access – Users can mint NFTs to gain access to satellite data  
✅ Set NFT Price – The contract owner can set the price for minting an NFT  
✅ Withdraw Funds – The contract owner can withdraw the funds collected from NFT sales  
✅ Event Emission – Emits an event when an NFT is minted and provides metadata access  

## 🛠️ How It Works
1️⃣ The contract owner sets a price for minting the NFT.  
2️⃣ Users can mint NFTs by paying the set price, receiving access to a specific satellite image or data.  
3️⃣ The contract owner can withdraw collected funds from NFT sales.  
4️⃣ Users can view the metadata of the satellite imagery associated with their NFTs.

## 🚀 Setup and Running the Project

### 1️⃣ Install Dependencies
```bash
npm install
2️⃣ Compile the Smart Contract
bash
Copy
Edit
npx hardhat compile
3️⃣ Run Tests
bash
Copy
Edit
npx hardhat test
4️⃣ Deploy the Contract (Localhost)
bash
Copy
Edit
npx hardhat run scripts/deploy.js --network localhost
🔗 Next Steps
Integrate the smart contract with a frontend to allow users to browse and mint NFTs.

Extend the metadata for satellite images to include additional details such as timestamp, location, and satellite type.

Allow users to transfer NFTs as proof of access to satellite imagery data.

#Day50 #200DaysOfCode #Solidity #SmartContracts #NFTs #Ethereum #SatelliteImagery-