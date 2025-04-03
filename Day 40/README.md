📅 **Day 40: Prediction Market Smart Contract 🎰📈**

🔍 **Overview**
For **Day 40** of my **100 Smart Contracts in 100 Days Challenge**, I built a **Prediction Market** contract where users can place bets on the outcome of an event. After the event, winners claim their rewards based on the total pool size.

📜 **Key Features**
✅ **Decentralized Betting** – Users bet on **YES** or **NO** outcomes.  
✅ **Secure Time Locks** – Betting closes after a set deadline, and results can only be declared at the appropriate time.  
✅ **Fair Payouts** – Winners are paid based on the proportion of the losing pool.  

🛠️ **How It Works**
1️⃣ **Users place bets** using **placeBet(bool prediction)** before the deadline.  
2️⃣ **Admin declares the event result** using **declareResult(bool outcome)**.  
3️⃣ **Winning bettors claim rewards** using **claimReward()**, calculated based on total losing bets.  

🔗 **Next Steps**
🔹 Add **oracle integration** to automate event results.  
🔹 Implement **governance voting** for result verification.  
🔹 Develop **frontend UI** for a seamless user experience.  

#100DaysOfCode #Solidity #PredictionMarket #DeFi #BlockchainBetting 🚀