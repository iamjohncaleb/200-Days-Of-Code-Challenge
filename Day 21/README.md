# 📌 Day 21: Solidity Multi-Signature Wallet Smart Contract

 🔍 Overview
For **Day 21** of my **200 Days of Code Challenge**, I built a **Multi-Signature Wallet Smart Contract** in Solidity. This contract requires multiple owners to approve transactions before execution, enhancing security and decentralization.

 📜 Key Concepts

 ✅ **Multi-Signature Wallet Basics**
 Requires **multiple approvals** before a transaction is executed.
 Increases security by preventing a single point of failure.

 ✅ **State Variables**
 `owners`: Stores the list of wallet owners. `requiredApprovals`: Defines the minimum number of approvals needed for a transaction.
 `transactions`: Keeps track of proposed transactions.
 `hasApproved`: Maps transactions to owners who have approved them.

 ✅ **Transaction Struct**
Each transaction consists of:
 `to`: The recipient address.
 `amount`: The amount to be sent.
 `approvals`: The number of approvals received.
 `executed`: A flag indicating whether the transaction has been executed.

 ✅ **Core Functions**
 `isOwner()`: Checks if an address is an owner.
 `proposeTransaction()`: Allows an owner to propose a transaction.
 `approveTransaction()`: Enables an owner to approve a transaction.
 `executeTransaction()`: Executes the transaction once required approvals are met.

 ✅ **Access Control**
 `onlyOwner` modifier restricts functions to wallet owners.
 Transactions can only be executed after receiving the required number of approvals.

 ✅ **Event Logging**
 `TransactionCreated()`: Emitted when a transaction is proposed.
 `TransactionApproved()`: Emitted when an owner approves a transaction.
 `TransactionExecuted()`: Emitted when a transaction is successfully executed.

 ⚠️ **Security Considerations**
 **Reentrancy Protection**: Implement **checks-effects-interactions pattern** or **ReentrancyGuard** to prevent reentrancy attacks.
 **Proper Owner Management**: Add functionality for owner addition/removal in future improvements.
 **Off-Chain Signing**: Consider integrating **EIP-712** for gas-efficient off-chain approvals.

 🛠️ Deployment & Testing
 Deploy using **Remix**, **Hardhat**, or **Truffle**.
 Fund the contract by sending ETH to it.
 Owners propose, approve, and execute transactions in a **multi-signature** fashion.

 🔗 Next Steps
🔹 Implement **EIP-712** for gasless approvals.  
🔹 Add the ability to **remove and replace owners**.  
🔹 Integrate a **frontend dApp** using **React & Web3.js** for better UX.  

#200DaysOfCode #Web3 #Solidity #SmartContracts #Ethereum #Blockchain #Multisig #Security #RemixIDE
