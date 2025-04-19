🏦 Day 39: MultiSigWallet
🔍 Overview
A multi-signature wallet where transactions require approval from multiple owners before being executed.

📜 Features
Multiple owners can create and approve transactions.

Configurable number of required approvals for transaction execution.

Prevents unauthorized transaction execution.

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
npx hardhat run scripts/deploy_multi_sig_wallet.js --network localhost
4️⃣ Run unit tests
bash
Copy
Edit
npx hardhat test
📌 Possible Enhancements
Add more sophisticated transaction filtering and tracking

Implement withdrawal functionality for owners

Improve security for owners (e.g., multi-factor authentication)

