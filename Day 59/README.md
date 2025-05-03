<div align="center">
  <br />
  <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2054.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/Built%20With-Hardhat-blue" />
    <img src="https://img.shields.io/badge/Solidity-0.8.21-purple" />
    <img src="https://img.shields.io/badge/Tests-Chai%20%26%20Waffle-green" />
    <img src="https://img.shields.io/badge/Network-Localhost-orange" />
  </div>

  <h3 align="center">📅 Supply Chain Traceability Contract</h3>
</div>

## 🔍 **Overview**

A **Supply Chain Traceability Smart Contract** designed to track products across different stages of the supply chain. This contract allows the creation of products, status updates, and retrieval of status history, enabling transparency in supply chains.

---

## 📜 **Key Features**

✅ **Product Creation** — Owner can create products and assign their origin.  
✅ **Product Status Updates** — Stakeholders can update the status of products as they move through the supply chain.  
✅ **Status History** — Retrieve the full history of a product's journey.  
✅ **Ownership Control** — Only the contract owner can create products.

---

## 🛠️ **How It Works**

1️⃣ **Create Product**: The owner can create a product and assign it an origin.  
2️⃣ **Update Product Status**: Stakeholders update the status as the product moves through the supply chain.  
3️⃣ **Track Product Status**: Anyone can retrieve the status history of a product.



## 🚀 **Setup and Running the Project**

#### **1️⃣ Install Dependencies**

npm install
2️⃣ Compile the Smart Contract
bash
Copy
Edit
npx hardhat compile
3️⃣ Run Tests
bash
Copy
Edit
npx hardhat test
4️⃣ Deploy the Contract (Local)
bash
Copy
Edit
npx hardhat run scripts/deploy.ts --network localhost
5️⃣ Start the Hardhat Node (for local network)
bash
Copy
Edit
npx hardhat node
🌐 Technologies Used
Solidity for smart contract logic

Hardhat for development, deployment, and testing

TypeScript for smart contract and testing scripts

Ethers.js for Ethereum interaction

🌐 GitHub Repository
🔗 Supply Chain Traceability GitHub

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.