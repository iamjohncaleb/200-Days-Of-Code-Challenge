# 📌 Day 2: Solidity TimeLock Smart Contract

🔍 Overview
For **Day 2** of my **200 Days of Code Challenge**, I built a **TimeLock Smart Contract** in Solidity. This contract locks funds for a specified period before allowing withdrawals.

## 📜 Key Concepts

 ✅ **Solidity Basics**
 **SPDX License & Pragma Version**: Specifies the open-source license and Solidity version (`^0.8.0`).
 **Contract Declaration**: Defines the `TimeLock` contract.

 ✅ **State Variables**
 `unlockTime`: Stores the timestamp when funds can be withdrawn.
 `owner`: Stores the address of the contract deployer.

 ✅ **Constructor Function**
 Accepts `_time` as an input and sets `unlockTime` by adding `_time` to the current block timestamp.
 Assigns the deployer (`msg.sender`) as the contract `owner`.

 ✅ **Withdrawal Function**
 `withdraw()`: Allows withdrawal only after `unlockTime` has passed.
 Uses `require()` to enforce the time lock and prevent premature withdrawals.

 🛠️ Deployment & Testing
 Can be deployed and tested using **Remix**, **Hardhat**, or **Truffle**.
 Interact by setting `_time` during deployment and attempting withdrawal before and after `unlockTime`.

🔗 Next Steps
🔹 Implement actual fund transfer logic.  
🔹 Add role-based access control for withdrawals.  
🔹 Extend functionality for multiple beneficiaries.  

#200DaysOfCode #Web3 #Solidity #SmartContracts #Ethereum #Blockchain #TimeLock #RemixIDE
