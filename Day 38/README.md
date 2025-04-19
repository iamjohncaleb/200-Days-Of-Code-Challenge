📊 Day 38: SubscriptionService
🔍 Overview
A simple smart contract for handling subscription services, where users can subscribe to a service for a fixed fee and duration.

📜 Features
✅ Fixed subscription fee and duration
✅ Subscription expiry after 30 days
✅ Event logging for each subscription
✅ Subscription status check

🛠️ Project Setup
1️⃣ Install dependencies
bash
Copy
Edit
npm install
2️⃣ Compile contracts
bash
Copy
Edit
npx hardhat compile
3️⃣ Deploy to localhost
bash
Copy
Edit
npx hardhat run scripts/deploy_subscription.js --network localhost
4️⃣ Run unit tests
bash
Copy
Edit
npx hardhat test
📌 Possible Enhancements
Add subscription tier levels (e.g., monthly, yearly)

Include automated renewals

Integrate with ERC20 tokens for payment