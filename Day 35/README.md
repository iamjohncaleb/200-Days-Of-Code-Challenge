<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2035.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 35 🏛️ Airdrop Smart Contract </h3>
</div>

 🔍 **Overview**
For **Day 35** of my **100 Smart Contracts in 200 Days Challenge**, I built an **Airdrop Smart Contract** in Solidity. This contract allows the distribution of ERC-20 tokens to multiple recipients in a single transaction.

 📜 **Key Features**
✅ **Bulk Token Distribution** – Send tokens to multiple addresses in one call.  
✅ **Gas Efficiency** – Saves transaction fees compared to sending individually.  
✅ **Flexible Allocation** – Supports different amounts per recipient.  

 🛠️ **How It Works**
 The contract is initialized with the **ERC-20 token address**.  
 Users call `distribute(recipients, amounts)`, specifying a list of addresses and corresponding token amounts.  
 The contract loops through the recipients and transfers the respective amounts.  

 🔗 **Next Steps**
🔹 Implement **owner-only access** for controlled airdrops.  
🔹 Add **batch size limits** to prevent excessive gas usage.  
🔹 Include **Merkle proof verification** for secure claim-based airdrops.  

#200DaysOfCode #Solidity #SmartContracts #Ethereum #Airdrop #Blockchain 🚀
