🎁 Day 35: Airdrop Smart Contract
🔍 Overview
A token airdrop contract for distributing ERC-20 tokens to multiple recipients in a single transaction.

📜 Key Features
✅ Bulk token distribution
✅ Input validation for matched array lengths
✅ Plug-and-play with any ERC-20 token

🛠️ How It Works
1️⃣ Deploy the contract with a token address
2️⃣ Call distribute() with recipient addresses and amounts
3️⃣ The contract sends tokens from its balance to recipients

🚀 Setup and Running the Project
1️⃣ Install Dependencies
bash
Copy
Edit
npm install
2️⃣ Compile Contracts
bash
Copy
Edit
npx hardhat compile
3️⃣ Deploy Airdrop Contract
bash
Copy
Edit
npx hardhat run scripts/deploy_airdrop.js --network localhost
4️⃣ Run Tests
bash
Copy
Edit
npx hardhat test
📌 Optional Enhancements
Allow owners to withdraw unclaimed tokens

Add claim-based airdrops

Integrate with frontend using Ethers.js

