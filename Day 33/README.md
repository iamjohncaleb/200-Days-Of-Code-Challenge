📅Day 33 AlgorithmicStablecoin Smart Contract
🔍 Overview
An algorithmic stablecoin contract that adjusts total supply through rebasing based on price deviations, simulating a pegged value of 1 AST = 1 USD.

📜 Key Features
✅ Rebase Mechanism – Dynamically increases or decreases total supply based on price feed
✅ Oracle-Controlled – Only an authorized oracle address can trigger rebase operations
✅ Basic ERC20-like Transfers and Approvals
✅ Event Emissions for Transfers, Rebases, and Oracle Updates

🛠️ How It Works
1️⃣ Deployed with initial supply and oracle address
2️⃣ Transfers supported via transfer() and transferFrom()
3️⃣ Rebase function adjusts total supply based on provided price input
4️⃣ Oracle address can be updated by the current oracle

🚀 Setup and Running the Project
1️⃣ Install Dependencies
bash
Copy
Edit
npm install
2️⃣ Compile the Smart Contract
bash
Copy
Edit
npx hardhat compile
3️⃣ Deploy the Contract
bash
Copy
Edit
npx hardhat run scripts/deploy_stablecoin.js --network localhost
4️⃣ Run Tests
bash
Copy
Edit
npx hardhat test
📌 Next Improvements
Integrate with Chainlink price feed oracle

Implement access control for critical functions

Build a web dashboard for viewing supply, price, and rebase history

#Day33 #200DaysOfCode #Solidity #Stablecoins #SmartContracts #Web3 #Blockchain #Ethereum 🚀