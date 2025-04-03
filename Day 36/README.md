🐋 **Day 36: Anti-Whale Token Smart Contract**

 🔍 **Overview**
For **Day 36** of my **100 Smart Contracts in 100 Days Challenge**, I built an **Anti-Whale Token (AWT)** in Solidity. This ERC-20-like token prevents large transactions by enforcing a **maximum transaction limit**.

 📜 **Key Features**
✅ **Anti-Whale Mechanism** – Limits transactions to **1% of the total supply** per transfer.  
✅ **Basic ERC-20 Functionality** – Supports transfers between users.  
✅ **Fair Token Distribution** – Prevents excessive influence from large holders.  

 🛠️ **How It Works**
 The contract initializes with a **total supply of 1,000,000 AWT**.  
 Users can transfer tokens **as long as the amount is ≤ 1% of the supply**.  
 Any transaction exceeding the **maxTxAmount** is rejected.  

 🔗 **Next Steps**
🔹 Implement **whale tracking** to monitor large holders.  
🔹 Introduce **progressive tax rates** for big transfers.  
🔹 Add **liquidity pool integration** for decentralized trading.  

#100DaysOfCode #Solidity #SmartContracts #Ethereum #AntiWhale #Blockchain 🚀