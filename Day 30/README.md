 🌊 Day 30: Liquidity Pool Smart Contract  

 🔍 Overview  
For **Day 30** of my **100 Smart Contracts in 100 Days Challenge**, I built a **Liquidity Pool Smart Contract** in Solidity. This contract allows users to provide liquidity by depositing two tokens and enables token swaps using a simple **constant product formula**.  

 📜 Key Features  

✅ **Liquidity Provision**  
 Users can **add liquidity** by depositing equal values of two tokens.  
 Liquidity providers receive a share of the pool proportional to their deposit.  

✅ **Token Swapping**  
 Users can swap between two tokens based on available reserves.  
 Uses a **simple pricing model**: `amountOut = (amountIn * reserveOut) / (reserveIn + amountIn)`.  

✅ **Decentralized Trading**  
 No reliance on centralized order books.  
 Prices adjust dynamically based on liquidity in the pool.  

 🛠️ Smart Contract Functions  

 `addLiquidity(amountA, amountB)`: Deposits two tokens into the pool.  
 `swap(fromToken, amountIn)`: Swaps between tokenA and tokenB based on liquidity.  

 🛠️ Deployment & Testing  
 Requires **two ERC20 token addresses** during deployment.  
 Tested using **simulated liquidity providers and traders**.  

 🔗 Next Steps  
🔹 Improve **pricing mechanism** with a more advanced AMM formula.  
🔹 Implement **liquidity provider rewards** through fee-sharing.  
🔹 Integrate with **decentralized exchanges** like Uniswap.  

#100DaysOfCode #Web3 #Solidity #SmartContracts #Ethereum #LiquidityPools #DeFi