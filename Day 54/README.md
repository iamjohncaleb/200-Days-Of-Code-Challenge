<div align="center">
  <br />
  <img src="https://github.com/iamjohncaleb/200-Days-Of-Code-Challenge/blob/main/Thumbnails/the%20Day%2054.jpg" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/Built%20With-Hardhat-blue" />
    <img src="https://img.shields.io/badge/Solidity-0.8.21-purple" />
    <img src="https://img.shields.io/badge/Frontend-Next.js%20%26%20TailwindCSS-yellow" />
    <img src="https://img.shields.io/badge/Web3-Wagmi%20%26%20RainbowKit-teal" />
    <img src="https://img.shields.io/badge/Network-Localhost-orange" />
  </div>

  <h3 align="center">📅 Day 54: Equipment Leasing Smart Contract</h3>
</div>

## 🔍 **Overview**

A **Web3 Equipment Leasing Platform** that allows equipment owners to lease assets on-chain and users to rent them securely using ETH. Built with Solidity, Hardhat, and a futuristic Next.js frontend.

---

## 📜 **Key Features**

✅ **List Equipment** — Owners can list equipment for lease with daily pricing
✅ **Lease Equipment** — Users can rent available equipment by paying in ETH
✅ **Track Leases** — Smart contract ensures only available equipment is rented
✅ **Return Equipment** — Rented assets can be returned, freeing them up again

---

## 🛠️ **How It Works**

1️⃣ **Owner** lists equipment and specifies lease cost per day
2️⃣ **User** selects and leases available equipment with connected wallet
3️⃣ Contract logs each **active lease**, tracking duration and user
4️⃣ Upon return, lease is **cleared**, making it available for others

---

## 🚀 **Setup and Running the Project**

### **1️⃣ Install Dependencies**

```bash
npm install
```

### **2️⃣ Compile the Smart Contract**

```bash
npx hardhat compile
```

### **3️⃣ Run Tests**

```bash
npx hardhat test
```

### **4️⃣ Deploy to Local Network**

```bash
npx hardhat run scripts/deploy.js --network localhost
```

### **5️⃣ Run the Frontend**

```bash
npm run dev
```

---

## ✨ **UI Snapshot**

A sleek futuristic UI with wallet connection, lease interaction, and equipment listings.

---

## 📌 **Next Steps**

* 🗃️ Add IPFS metadata for equipment details
* 🌐 Deploy to a testnet (Goerli, Sepolia)
* ⏱️ Add lease expiration automation via Chainlink Keepers

---

## 🌐 **GitHub Repository**

[🔗 Equipment Leasing DApp Source Code](https://github.com/your-repository-link)

---

\#EquipmentLeasing #Solidity #Hardhat #NextJS #Web3 #200DaysOfCode 🚀
