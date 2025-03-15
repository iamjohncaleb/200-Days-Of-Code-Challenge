📌 Day 27: Decentralized Identity Smart Contract

 🔍 Overview
For **Day 27** of my **100 Smart Contracts in 100 Days Challenge**, I built a **Decentralized Identity (DID) Smart Contract** in Solidity. This contract allows users to register their identities on the blockchain and enables an admin to verify them.

 📜 Key Concepts

✅ **Identity Registration**
 Users can register their name, email, and date of birth on-chain.
 Each user can register only once.

✅ **Identity Verification**
 The contract owner (admin) has the authority to verify user identities.
 Verified users gain a "verified" status on-chain.

✅ **Smart Contract Functions**
 `registerIdentity(name, email, dob)`: Allows users to register their identity.
 `verifyIdentity(user)`: Enables the admin to verify a registered user.
 Public mapping for querying identity details.

 🛠️ Deployment & Testing
 Deployable on **Ethereum, Polygon, or other EVM-compatible chains**.
 Can be tested using **Remix, Hardhat, or Truffle**.
 Identity verification logic can be expanded to integrate with **oracles** for off-chain validation.

 🔗 Next Steps
🔹 Implement **soulbound NFTs** to represent verified identities.
🔹 Introduce **zero-knowledge proofs** for privacy-preserving identity verification.
🔹 Develop a **frontend** for user-friendly interaction with the contract.

#100DaysOfCode #Web3 #Solidity #SmartContracts #Ethereum #DecentralizedIdentity #Blockchain