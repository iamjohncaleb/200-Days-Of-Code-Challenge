 📌 Day 23: Solidity Staking Smart Contract

 🔍 Overview
For **Day 23** of my **200 Days of Code Challenge**, I built a **Staking Smart Contract** in Solidity. This contract allows users to stake ETH, earn rewards, and withdraw their funds along with accumulated rewards.

 📜 Key Concepts

 ✅ **Staking Mechanism**
 Users can deposit ETH as **stake**.
 Rewards are distributed proportionally based on the staked amount.
 Users can **withdraw** their original stake along with rewards.

 ✅ **State Variables**
 `stakedBalance`: Tracks the amount each user has staked.
 `rewards`: Stores earned rewards for each user.
 `totalStaked`: The total amount of ETH staked in the contract.
 `owner`: The contract deployer, responsible for reward distribution.

 ✅ **Core Functions**
 `stake()`: Allows users to deposit ETH and participate in staking.
 `distributeRewards()`: Owner distributes rewards (currently set at **10%** of the staked amount).
 `withdraw()`: Users can withdraw their **staked ETH** along with accumulated rewards.

 ✅ **Access Control**
 Only the **owner** can distribute rewards.
 Users can only withdraw their own staked funds and rewards.

 ✅ **Event Logging**
 `Staked()`: Emitted when a user stakes ETH.
 `Withdrawn()`: Emitted when a user withdraws their stake and rewards.

 ⚠️ **Security Considerations**
 **Loop in `distributeRewards()`**: The current implementation loops over `totalStaked`, which is incorrect. A proper **mapping iteration strategy** or **batch reward distribution** should be used.
 **Reentrancy Protection**: Implement **ReentrancyGuard** or ensure withdrawals follow the **checks-effects-interactions** pattern.
 **Reward Calculation Improvement**: Instead of looping, consider a **global reward rate** and an **efficient staking model**.

 🛠️ Deployment & Testing
 Deploy using **Remix**, **Hardhat**, or **Truffle**.
 Users call `stake()` to deposit ETH.
 The owner calls `distributeRewards()` periodically.
 Users call `withdraw()` to claim their stake and rewards.

 🔗 Next Steps
🔹 Fix **reward distribution logic** to avoid inefficient looping.  
🔹 Add a **staking duration** mechanism for dynamic rewards.  
🔹 Implement **penalties for early withdrawal**.  
🔹 Develop a **frontend dApp** for seamless interaction.  

#200DaysOfCode #Web3 #Solidity #SmartContracts #Ethereum #Blockchain #Staking #PassiveIncome
