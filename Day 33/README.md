💱 Overview  
For **Day 33** of my **100 Smart Contracts in 100 Days Challenge**, I built an **Algorithmic Stablecoin** in Solidity. This contract dynamically adjusts supply to maintain price stability around a target value.  

 📜 Key Features  

✅ **Supply Adjustment Mechanism**  
 If **price rises** above the target, new tokens are **minted** and distributed.  
 If **price drops**, tokens are **burned** to reduce supply.  

✅ **Oracle Integration**  
 An **oracle** updates the stablecoin price.  
 The contract **rebases** supply based on the deviation from the target price.  

 🛠️ Smart Contract Functions  

 `transfer(to, amount)`: Transfers stablecoins between users.  
 `approve(spender, amount)`: Allows another address to spend tokens on behalf of the user.  
 `transferFrom(from, to, amount)`: Transfers tokens using an allowance.  
 `rebase(currentPrice)`: Adjusts supply based on market price.  
 `updateOracle(newOracle)`: Updates the oracle address.  

 🛠️ Deployment & Testing  
 Requires an **oracle address** for price updates.  
 Tested using **simulated price variations**.  
 Can be deployed on **Ethereum testnets** for further evaluation.  

 🔗 Next Steps  
🔹 Improve **rebase strategy** to reduce volatility.  
🔹 Integrate with **DEX liquidity pools** for better price stability.  
🔹 Implement **governance mechanisms** to control rebase parameters.  

#200DaysOfCode #Web3 #Solidity #SmartContracts #Ethereum #Stablecoins #DeFi #Blockchain  