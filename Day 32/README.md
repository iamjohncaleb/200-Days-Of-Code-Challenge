<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2032.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 32 🏛️ Token Bridge Smart Contract </h3>
</div>


 🔍 Overview  
For **Day 32** of my **100 Smart Contracts in 200 Days Challenge**, I built a **Token Bridge Smart Contract** in Solidity. This contract facilitates cross-chain token transfers by locking tokens on one chain and minting them on another.  

 📜 Key Features  

✅ **Cross-Chain Asset Transfers**  
 Users can **lock tokens** on the source chain.  
 The contract interacts with a **bridge contract** on the target chain to mint equivalent tokens.  

✅ **Security & Transparency**  
 Only tokens that have been locked can be **released**.  
 Prevents unauthorized minting of tokens.  

 🛠️ Smart Contract Functions  

 `lockTokens(amount)`: Locks a user’s tokens in the contract.  
 `releaseTokens(recipient, amount)`: Releases tokens to a recipient by interacting with the target bridge contract.  

 🛠️ Deployment & Testing  
 Requires deployment with a **target bridge contract address**.  
 Tested using **local blockchain networks** and **testnets**.  

 🔗 Next Steps  
🔹 Add **verification mechanisms** to prevent double spending.  
🔹 Implement **multi-signature validation** for enhanced security.  
🔹 Integrate with **oracles** for off-chain verification.  

#100DaysOfCode #Web3 #Solidity #SmartContracts #Ethereum #TokenBridge #Blockchain #DeFi
