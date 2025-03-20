📅 **Day 19: Enhanced NFT with Minter Approvals**  

🔍 **Overview**  
Today's contract builds upon the previous **Enhanced NFT contract**, adding **approved minters** instead of a public whitelist. This makes it ideal for **controlled NFT distributions**, where only **trusted addresses** can mint.  

📜 **Key Features**  
✅ **Owner & Approved Minters** – Only specific addresses can mint  
✅ **Mint Price Enforcement** – Ensures correct ETH is sent  
✅ **Max Supply Limit** – Prevents minting beyond a set cap  
✅ **Pause & Unpause Minting** – Owner can halt minting if needed  
✅ **Secure Fund Withdrawal** – Owner can collect funds from mint sales  

🛠️ **How It Works**  
1️⃣ The **owner sets max supply and mint price** during deployment  
2️⃣ Only **approved minters or the owner** can mint NFTs  
3️⃣ Minting can be **paused/unpaused** for security and control  
4️⃣ The contract **receives ETH** and allows the owner to withdraw funds  

🔗 **Next Steps**  
- Implement **minting limits per minter** to prevent abuse  
- Add **royalties for secondary sales** using ERC-2981  
- Integrate **on-chain metadata generation** for dynamic NFTs  

#Day19 #200DaysOfCode #Solidity #NFTs #Blockchain #Crypto 🚀
