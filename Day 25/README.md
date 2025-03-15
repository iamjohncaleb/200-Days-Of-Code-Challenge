📌 Day 25: NFT Marketplace Smart Contract

 🔍 Overview
For **Day 25** of my **200 Days of Code Challenge**, I developed a **NFT Marketplace Smart Contract** using Solidity. This contract allows users to mint, list, buy, and withdraw earnings from NFT sales.

 📜 Key Concepts

✅ **ERC-721 Standard**
 Utilizes OpenZeppelin's **ERC721URIStorage** for NFT storage.
 Implements **minting**, **transferring**, and **listing** functionalities.

✅ **Smart Contract Security**
 Uses **Ownable** to restrict ownership-related functions.
 Ensures proper **validation** for listing and buying NFTs.
 Implements **pendingWithdrawals** to handle payments securely.

✅ **Marketplace Functionality**
 **Minting:** Users can create NFTs with a unique `tokenURI`.
 **Listing:** NFT owners can set a price and put their NFT for sale.
 **Buying:** Buyers can purchase listed NFTs by sending ETH.
 **Withdrawing:** Sellers can withdraw their earnings securely.

 🛠️ Deployment & Testing
 Can be deployed using **Remix**, **Hardhat**, or **Truffle**.
 Interacts with a frontend via **Web3.js** or **ethers.js**.

 🔗 Next Steps
🔹 Add bidding and auction functionality.
🔹 Implement royalty payments for NFT creators.
🔹 Improve UI/UX for better marketplace experience.

#200DaysOfCode #Web3 #NFTMarketplace #SmartContracts #Solidity #Blockchain #Ethereum #NFT
