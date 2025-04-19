🐋 Day 36: AntiWhaleToken
🔍 Overview
A simple ERC-20 style token contract that enforces a 1% transaction limit on transfers to discourage whale activity.

📜 Features
✅ 1% transaction limit per transfer
✅ Total supply minted to deployer
✅ Simple and gas-efficient implementation

🛠️ Project Setup
1️⃣ Install dependencies
bash
Copy
Edit
npm install
2️⃣ Compile the contracts
bash
Copy
Edit
npx hardhat compile
3️⃣ Deploy contract
bash
Copy
Edit
npx hardhat run scripts/deploy_awt.js --network localhost
4️⃣ Run unit tests
bash
Copy
Edit
npx hardhat test
📌 Possible Enhancements
Add ERC-20 approve and transferFrom functionality

Owner-adjustable maxTxAmount

Burn/mint functions