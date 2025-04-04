<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2031.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 31 🏛️ Governance Token Smart Contract </h3>
</div>
 

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
