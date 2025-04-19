📅 Day 40: PredictionMarket Smart Contract
🔍 Overview
Today’s build is a Prediction Market Smart Contract — a decentralized platform where users bet ETH on the outcome of a future event, and winners share the prize pool proportionally based on their bet size.

📜 Key Features
✅ Place YES/NO ETH bets before a deadline
✅ Admin declares the event result after a predefined result time
✅ Winners claim rewards based on their bet size relative to total winning pool
✅ Transparent, on-chain event result and reward distribution

🛠️ How It Works
1️⃣ The contract is initialized with a betting duration and result duration
2️⃣ Users place a YES/NO bet (true/false) before the betting deadline
3️⃣ After the result time, only the admin can declare the final event result
4️⃣ Winning bettors can claim their ETH rewards — proportionally calculated from the losing pool
5️⃣ Pools and user bets are trackable via public functions

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
To deploy locally:

bash
Copy
Edit
npx hardhat run scripts/deploy.js --network localhost
4️⃣ Run Tests
bash
Copy
Edit
npx hardhat test


#Day40 #200DaysOfCode #Solidity #SmartContracts #PredictionMarket #Ethereum #Web3 🚀