📅 **Day 11: ERC-20 Airdrop Smart Contract**  

🔍 **Overview**  
Today's project is an **Airdrop smart contract** that allows the owner to distribute ERC-20 tokens to multiple recipients in a single transaction.  

📜 **Key Features**  
✅ Uses an **IERC20 interface** to interact with any ERC-20 token  
✅ Only the **owner** can distribute tokens  
✅ Efficient **batch token transfer** to multiple recipients  

🛠️ **How It Works**  
1️⃣ The contract is deployed with an ERC-20 token address  
2️⃣ The owner calls `distributeTokens()`, passing recipient addresses and amount  
3️⃣ The contract **loops through recipients** and sends tokens to each  

🔗 **Next Steps**  
- Implement **event logging** for better tracking  
- Add **vesting schedules** for time-based token releases  
- Enable **claim-based airdrop** where users request their tokens  

#Day11 #200DaysOfCode #Solidity #ERC20 #Airdrop #SmartContracts #Blockchain #Web3 🚀
