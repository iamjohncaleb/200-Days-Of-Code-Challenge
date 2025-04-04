<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2034.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 34 🏛️ Time-Locked Vault Smart Contract </h3>
</div>

 🔍 **Overview**
For **Day 34** of my **200 Smart Contracts in 100 Days Challenge**, I built a **Time-Locked Vault** in Solidity. This contract allows users to deposit ETH that gets locked for a specified duration before withdrawal.

 📜 **Key Features**
✅ **Deposit with Lock Time** – Users can deposit ETH and specify how long it remains locked.  
✅ **Secure Fund Locking** – Funds cannot be withdrawn before the unlock time.  
✅ **Automatic Withdrawal** – Once the lock period ends, users can withdraw their ETH.  

 🛠️ **How It Works**
 Users call `deposit(lockDuration)` and send ETH, specifying how long the funds should be locked.  
 The contract records the **deposit amount** and **unlock timestamp**.  
 Once the lock period expires, users can call `withdraw()` to retrieve their funds.  

 🔗 **Next Steps**
🔹 Add **support for ERC20 tokens** instead of just ETH.  
🔹 Implement **multiple deposits with different lock times**.  
🔹 Add **beneficiary options**, allowing deposits for other users.  

#100DaysOfCode #Solidity #SmartContracts #Blockchain #Ethereum #DeFi
