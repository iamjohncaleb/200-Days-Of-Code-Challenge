# 📌 Day 3: Solidity Lottery Smart Contract

 🔍 Overview
For **Day 3** of my **200 Days of Code Challenge**, I built a **Lottery Smart Contract** in Solidity. This contract allows players to enter the lottery by sending ETH, and the owner picks a random winner.

 📜 Key Concepts

 ✅ **Solidity Basics**
 **SPDX License & Pragma Version**: Specifies the open-source license and Solidity version (`^0.8.0`).
 **Contract Declaration**: Defines the `Lottery` contract.

 ✅ **State Variables**
 `players`: Stores the list of participants.
 `owner`: Stores the address of the contract deployer.

 ✅ **Entry Function**
 `enter()`: Allows players to enter the lottery by sending at least **0.01 ETH**.
 Uses `require()` to enforce the minimum entry fee.
 Adds the sender to the `players` array.

 ✅ **Winner Selection & Reward**
 `pickWinner()`: Can only be called by the contract **owner**.
 Ensures there are players before selecting a winner.
 Uses a `random()` function (pseudo-random) to pick a winner.
 Transfers the entire contract balance to the winner.
 Resets the `players` array for a new round.

 ✅ **Randomness Function**
 `random()`: Generates a pseudo-random number using block variables.
 Uses `keccak256` hashing with `block.timestamp`, `block.difficulty`, and `players.length`.

 ✅ **Fallback Function**
 `receive() external payable {}`: Allows the contract to receive ETH directly.

 ⚠️ **Security Considerations**
 The `random()` function is **not truly secure** as miners can influence `block.timestamp`.
 A better approach is using **Chainlink VRF** for verifiable randomness.

 🛠️ Deployment & Testing
 Deploy using **Remix**, **Hardhat**, or **Truffle**.
 Players enter by sending ETH, and the owner picks a winner.
 The contract balance is transferred to the winner automatically.

 🔗 Next Steps
🔹 Implement **Chainlink VRF** for provable randomness.  
🔹 Add event logging for better tracking.  
🔹 Include a function to allow players to withdraw if the lottery is canceled.  

#200DaysOfCode #Web3 #Solidity #SmartContracts #Ethereum #Blockchain #Lottery #RemixIDE
