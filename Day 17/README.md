📅 **Day 17: Token Vesting Smart Contract**  

🔍 **Overview**  
Today's contract is a **Token Vesting Smart Contract**, designed to lock tokens for a specific period before releasing them to the **beneficiary**. This is commonly used in **token distributions, employee incentives, and project funding**.  

📜 **Key Features**  
✅ **Time-Locked Token Release** – Tokens are held until a specified time  
✅ **Immutable Conditions** – Once deployed, the vesting schedule cannot be changed  
✅ **Secure Token Transfer** – Uses ERC-20 standards for smooth integration  

🛠️ **How It Works**  
1️⃣ The **contract is deployed** with token address, beneficiary, start time, release time, and amount  
2️⃣ Tokens remain **locked** until the **release time**  
3️⃣ When the **vesting period ends**, the **beneficiary** can call `release()` to receive the tokens  

🔗 **Next Steps**  
- Implement **gradual release (linear vesting)** instead of a single unlock  
- Add **cliff periods** for better vesting strategies  
- Introduce **multi-beneficiary support** for broader use cases  

#Day17 #200DaysOfCode #Solidity #Crypto #TokenVesting #Blockchain 🚀
