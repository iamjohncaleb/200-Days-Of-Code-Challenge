 🏛️ Day 31: Governance Token Smart Contract  

 🔍 Overview  
For **Day 31** of my **100 Smart Contracts in 100 Days Challenge**, I built a **Governance Token Smart Contract** in Solidity. This contract allows token holders to create proposals and vote using their token balance as voting power.  

 📜 Key Features  

✅ **Token Functionality**  
 Implements a basic **ERC20-like token** with `transfer()`.  
 Token holders can use their balance to participate in governance.  

✅ **Decentralized Voting System**  
 Users can **create proposals** on-chain.  
 Voting is weighted based on the number of tokens held.  
 Each user can vote **only once per proposal**.  

✅ **Governance Mechanism**  
 Votes are counted directly in the proposal’s `voteCount`.  
 Winning proposals are determined by the **highest vote count**.  

 🛠️ Smart Contract Functions  

 `transfer(to, amount)`: Transfers governance tokens.  
 `createProposal(description)`: Allows users to submit proposals.   `vote(proposalId)`: Users vote using their token balance.  
 `getWinningProposal()`: Returns the proposal with the most votes.  

 🛠️ Deployment & Testing  
 Initial supply of **1,000,000 GOV tokens** is assigned to the deployer.  
 Proposals and voting tested on **Remix** and **local Ethereum testnets**.  

 🔗 Next Steps  
🔹 Implement **delegate voting** to allow voting through representatives.  
🔹 Add **quorum and voting period** for better governance structure.  
🔹 Integrate with **DAO frameworks** for full decentralization.  

#100DaysOfCode #Web3 #Solidity #SmartContracts #Ethereum #Governance #DAO #Blockchain