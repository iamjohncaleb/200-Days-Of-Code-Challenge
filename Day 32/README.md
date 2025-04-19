📅 Day XX: TokenBridge Smart Contract
🔍 Overview
A Token Bridge Smart Contract for secure token transfers between chains via locking and minting mechanisms.

📜 Key Features
✅ Lock Tokens – Users lock tokens on the source chain
✅ Release & Mint Tokens – Bridge admin releases equivalent tokens on the target chain via mint()
✅ Event Emission – Emits Locked and Released events for off-chain tracking
✅ Simple Interface-based Integration

🛠️ How It Works
1️⃣ Deploys with the target bridge address as a parameter
2️⃣ Users lock tokens via lockTokens()
3️⃣ Admin releases tokens and triggers mint on target bridge contract

🚀 Setup and Running the Project
1️⃣ Install Dependencies
bash
Copy
Edit
npm install
2️⃣ Compile the Smart Contracts
bash
Copy
Edit
npx hardhat compile
3️⃣ Deploy the Contract
To a local Hardhat network:

bash
Copy
Edit
npx hardhat run scripts/deploy_token_bridge.js --network localhost
4️⃣ Run Tests
bash
Copy
Edit
npx hardhat test
📌 Next Steps
Implement ERC20 token contract integration

Build a frontend bridge dashboard

Add multi-chain support

#Day32 #200DaysOfCode #Solidity #SmartContracts #TokenBridge #Ethereum #Blockchain #Web3 🚀