📅 **Day 18: Enhanced NFT Smart Contract**  

🔍 **Overview**  
Today’s contract is an **Enhanced NFT Smart Contract**, adding functionality beyond a basic ERC-721 implementation. It includes **whitelisting, mint price enforcement, pausing capabilities, and fund withdrawal**.  

📜 **Key Features**  
✅ **Whitelisted Minting** – Only approved users can mint NFTs  
✅ **Mint Price Enforcement** – Ensures users pay the correct ETH amount  
✅ **Max Supply Limit** – Prevents minting beyond a set supply  
✅ **Pause & Unpause Minting** – Owner can halt minting if needed  
✅ **Secure Fund Withdrawal** – Owner can collect funds from mint sales  

🛠️ **How It Works**  
1️⃣ The **owner sets max supply and mint price** during deployment  
2️⃣ Users **must be whitelisted** to mint NFTs  
3️⃣ Minting is **paused/unpaused** by the owner for better control  
4️⃣ Minted NFTs have **unique URIs** linked to metadata  
5️⃣ The contract **receives ETH** and allows the owner to withdraw funds  

🔗 **Next Steps**  
- Implement **dynamic whitelist slots (e.g., time-limited access)**  
- Add **royalties for secondary sales** using ERC-2981  
- Integrate **randomized traits** for uniqueness  

#Day18 #200DaysOfCode #Solidity #NFTs #Blockchain #Crypto 🚀
