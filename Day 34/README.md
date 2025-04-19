📅Day 35 TimeLockedVault Smart Contract
🔍 Overview
A Time-Locked Vault smart contract that securely holds ETH deposits for a specified lock duration. Users can deposit ETH, and withdraw it only after their personal unlock time has passed.

📜 Key Features
✅ Time-Locked Deposits – Funds are locked for a specified duration per deposit
✅ User-Specific Unlock Time – Each user manages their own vault duration
✅ Secure ETH Withdrawals – Only possible after lock duration expires
✅ Event Emissions for Deposits and Withdrawals

🛠️ How It Works
1️⃣ Deposit ETH with a custom lock time (in seconds)
2️⃣ Withdraw ETH after unlock time has passed
3️⃣ Event logs track deposits and withdrawals

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
npx hardhat run scripts/deploy_vault.js --network localhost
4️⃣ Run Tests
bash
Copy
Edit
npx hardhat test

#Day35 #200DaysOfCode #Solidity #SmartContracts #Web3 #Blockchain #Ethereum 🚀