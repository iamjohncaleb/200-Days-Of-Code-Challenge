 📌 Day 26: NFT Auction Smart Contract

 🔍 Overview
For **Day 26** of my **100 Smart Contracts in 100 Days Challenge**, I built an **NFT Auction Smart Contract** in Solidity. This contract allows users to auction their NFTs, place bids, and transfer ownership to the highest bidder.

 📜 Key Concepts

✅ **Auction Mechanism**
 Sellers can list their NFTs for auction with a minimum bid.
 Bidders compete to offer the highest bid before the auction ends.
 The highest bidder wins when the auction concludes.

✅ **Security Features**
 Uses **ReentrancyGuard** to prevent reentrancy attacks.
 Implements **pendingReturns** to allow safe withdrawal of overbid funds.

✅ **Smart Contract Functions**
 `startAuction(tokenId, minBid)`: Seller lists an NFT for auction.
 `bid(tokenId)`: Users place bids higher than the current highest bid.
 `withdraw(tokenId)`: Previous bidders can reclaim their unsuccessful bids.
 `endAuction(tokenId)`: Transfers NFT to the highest bidder and pays the seller.

 🛠️ Deployment & Testing
 Requires deployment with an **ERC721 NFT contract address**.
 Can be tested using **Remix**, **Hardhat**, or **Truffle**.
 Bidding and auction interactions can be simulated in a local blockchain environment.

 🔗 Next Steps
🔹 Add **time extensions** for last-minute bids.  
🔹 Implement **royalty mechanisms** for NFT creators.  
🔹 Integrate with a frontend using **Web3.js** or **ethers.js**.  

#100DaysOfCode #Web3 #Solidity #SmartContracts #Ethereum #NFTs #Auction #Blockchain

