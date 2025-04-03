🎁 **Day 35: Airdrop Smart Contract**

 🔍 **Overview**
For **Day 35** of my **100 Smart Contracts in 100 Days Challenge**, I built an **Airdrop Smart Contract** in Solidity. This contract allows the distribution of ERC-20 tokens to multiple recipients in a single transaction.

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