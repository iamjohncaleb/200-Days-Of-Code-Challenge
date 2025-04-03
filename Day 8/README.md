<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/Day%208.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 8 📅 Lottery Smart Contract</h3>
</div>

🔍 **Overview**  
Today, I built a **Lottery smart contract** that allows users to enter by sending ETH, with a randomly selected winner receiving the entire prize pool.  

📜 **Key Features**  
✅ Users enter by sending at least **0.01 ETH**  
✅ The contract randomly picks a winner  
✅ The entire balance is transferred to the winner  
✅ Only the **owner** can pick the winner  

🛠️ **How It Works**  
1️⃣ Players enter the lottery by sending **ETH**  
2️⃣ The contract stores participants in an array  
3️⃣ The owner picks a random winner using `keccak256`  
4️⃣ Funds are transferred, and the lottery resets  

🔗 **Next Steps**  
- Improve randomness (VRF or Chainlink integration)  
- Implement an automated winner selection mechanism  

#Day8 #200DaysOfCode #Solidity #SmartContracts #Ethereum #Blockchain #Web3 🚀
