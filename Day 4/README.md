# 📌 Day 4: Solidity Weather Checker Smart Contract

 🔍 Overview
For **Day 4** of my **200 Days of Code Challenge**, I built a **Weather Checker Smart Contract** in Solidity. This contract allows an oracle to update weather data, which can then be retrieved by users.

 📜 Key Concepts

 ✅ **Solidity Basics**
 **SPDX License & Pragma Version**: Specifies the open-source license and Solidity version (`^0.8.0`).
 **Contract Declaration**: Defines the `WeatherChecker` contract.

 ✅ **State Variables**
 `owner`: Stores the contract deployer's address.
 `oracle`: Stores the address of the trusted oracle that updates weather data.
 `latestWeather`: Stores the most recent weather information.

 ✅ **Weather Data Struct**
 `temperature`: Stores temperature in Celsius.
 `condition`: Stores weather condition as a string (e.g., "Sunny", "Rainy").
 `timestamp`: Records when the weather data was last updated.

 ✅ **Access Control Modifiers**
 `onlyOwner`: Restricts function execution to the contract owner.
 `onlyOracle`: Restricts function execution to the designated oracle.

 ✅ **Core Functions**
 `setOracle()`: Allows the owner to assign an oracle address.
 `updateWeather()`: Allows the oracle to update the weather data.
 `getLatestWeather()`: Returns the latest weather information.

 ✅ **Event Logging**
 `WeatherUpdated()`: Emits an event when weather data is updated.

 ⚠️ **Security Considerations**
 **Oracle Dependency**: The contract relies on an external oracle to provide accurate weather data.
 **Trust & Centralization**: A single oracle introduces centralization; consider using decentralized oracle networks like **Chainlink**.

 🛠️ Deployment & Testing
 Deploy using **Remix**, **Hardhat**, or **Truffle**.
 The owner assigns an oracle, and the oracle updates weather data.
 Users call `getLatestWeather()` to fetch the latest weather information.

 🔗 Next Steps
🔹 Integrate with **Chainlink Oracles** for decentralized and reliable data.  
🔹 Implement multiple oracles with **consensus mechanisms**.  
🔹 Add historical weather data storage for analysis.  

#200DaysOfCode #Web3 #Solidity #SmartContracts #Ethereum #Blockchain #Weather #Oracles #RemixIDE
