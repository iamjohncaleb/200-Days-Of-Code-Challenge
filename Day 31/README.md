📅 Day 31: GovernanceToken Smart Contract
🔍 Overview
A Governance Token Smart Contract that allows token holders to participate in decentralized decision-making by creating proposals and voting with their token balance as voting power.

📜 Key Features
✅ ERC20-like Token Mechanics – Simple transfer functionality
✅ Proposal Creation – Anyone can initiate proposals
✅ Voting System – Token-weighted voting system
✅ Winning Proposal Detection – Query the highest voted proposal

🛠️ How It Works
1️⃣ Deploys with total supply allocated to contract creator
2️⃣ Tokens can be transferred between addresses
3️⃣ Anyone can create proposals describing a governance action
4️⃣ Token holders vote on proposals, weighted by their token holdings
5️⃣ Winning proposal can be retrieved on-chain

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
To a local Hardhat node:

bash
Copy
Edit
npx hardhat run scripts/deploy_governance_token.js --network localhost
Or to Goerli:

bash
Copy
Edit
npx hardhat run scripts/deploy_governance_token.js --network goerli
4️⃣ Run Tests
bash
Copy
Edit
npx hardhat test
🔗 Next Steps
Add proposal deadlines and quorum requirements

Enable delegated voting (vote by proxy)

Build a frontend for voting dashboard

#Day 31 #200DaysOfCode #Solidity #SmartContracts #GovernanceToken #DAO #Web3 🚀
