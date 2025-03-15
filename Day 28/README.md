 🗳️ Day 28: Decentralized Voting Smart Contract  

 🔍 Overview  
For **Day 28** of my **100 Smart Contracts in 100 Days Challenge**, I built a **Decentralized Voting Smart Contract** in Solidity. This contract allows users to vote securely and transparently on the blockchain.  

 📜 Key Features  

✅ **Candidate Registration**  
 Candidates are registered during contract deployment.  
 Voters can choose from a predefined list of candidates.  

✅ **Secure Voting System**  
 Each voter can **vote only once**.  
 Votes are **immutable** and stored on-chain.  

✅ **Fair Election Process**  
 The contract keeps track of each candidate’s vote count.  
 A function retrieves the **winner** based on the highest votes.  

 🛠️ Smart Contract Functions  

 `vote(candidateIndex)`: Allows users to vote for a candidate by index.  
 `getWinner()`: Returns the name of the candidate with the most votes.  

 🛠️ Deployment & Testing  
 Deployed on a **local blockchain** using Remix or Hardhat.  
 Tested by casting votes and retrieving the winner.  

 🔗 Next Steps  
🔹 Implement **role-based access control** for election authorities.  
🔹 Add **vote verification** using cryptographic signatures.  
🔹 Enable **real-time vote tallying** via a frontend with **Web3.js**.  

#100DaysOfCode #Web3 #Solidity #SmartContracts #Ethereum #Voting #Blockchain  
