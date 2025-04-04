<div align="center">
  <br />
      <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2040.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3dotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/hardhat-F3BA2F?style=for-the-badge&logo=ethereum&logoColor=black" />
  </div>

  <h3 align="center">Day 40 🎰📈 Prediction Market Smart Contract </h3>
</div>

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
