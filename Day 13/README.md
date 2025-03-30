# Crowdfunding Smart Contract

![Solidity](https://img.shields.io/badge/Solidity-%5E0.8.0-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-%5E2.0-yellow)
![Ethereum](https://img.shields.io/badge/Ethereum-SmartContract-orange)
![Node.js](https://img.shields.io/badge/Node.js-%5E16.0-green)

## Overview
Today's Solidity project is a **Crowdfunding Smart Contract**, allowing users to contribute funds toward a goal within a set timeframe. If the goal is met, the owner can withdraw; otherwise, contributors can request refunds.

## Key Features
- **Goal & Deadline** – Funds must be raised before the deadline  
- **Contributions Tracking** – Keeps track of each contributor's donations  
- **Withdrawals** – Owner can withdraw only if the goal is met  
- **Refund Mechanism** – Contributors can get refunds if the goal is not reached  

## How It Works
1. Users **contribute ETH** to the campaign before the deadline  
2. If the **goal is met**, the owner **withdraws the funds**  
3. If the **goal is not met** after the deadline, contributors **can claim refunds**  

## Installation & Setup

### 1. Clone the repository
```sh
git clone https://github.com/your-username/crowdfunding-contract.git
cd crowdfunding-contract
```

### 2. Install dependencies
```sh
npm install
```

### 3. Compile the contract
```sh
npx hardhat compile
```

### 4. Deploy the contract (Hardhat Local Network)
```sh
npx hardhat run scripts/deploy.js --network localhost
```

### 5. Run tests
```sh
npx hardhat test
```

## Scripts

### Deploy Script (deploy.js)
```javascript
const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const Crowdfunding = await hre.ethers.getContractFactory("Crowdfunding");
    const crowdfunding = await Crowdfunding.deploy(hre.ethers.parseEther("10"), 604800);
    await crowdfunding.waitForDeployment();

    console.log("Crowdfunding contract deployed at:", crowdfunding.target);
}

main().catch((error) => {
    console.error("Deployment failed:", error);
    process.exitCode = 1;
});
```

### Test Script (test/Crowdfunding.test.js)
```javascript
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Crowdfunding", function () {
    let crowdfunding, owner, addr1, addr2;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();
        const Crowdfunding = await ethers.getContractFactory("Crowdfunding");
        crowdfunding = await Crowdfunding.deploy(ethers.parseEther("10"), 604800);
        await crowdfunding.deployed();
    });

    it("Should deploy and set the correct owner", async function () {
        expect(await crowdfunding.owner()).to.equal(owner.address);
    });

    it("Should accept contributions", async function () {
        await crowdfunding.connect(addr1).contribute({ value: ethers.parseEther("1") });
        expect(await crowdfunding.contributions(addr1.address)).to.equal(ethers.parseEther("1"));
    });

    it("Should allow owner to withdraw funds if goal is met", async function () {
        await crowdfunding.connect(addr1).contribute({ value: ethers.parseEther("10") });
        await expect(crowdfunding.connect(owner).withdrawFunds()).to.changeEtherBalances(
            [owner, crowdfunding], [ethers.parseEther("10"), -ethers.parseEther("10")]
        );
    });

    it("Should allow refunds if the goal is not met after the deadline", async function () {
        await crowdfunding.connect(addr1).contribute({ value: ethers.parseEther("5") });
        await ethers.provider.send("evm_increaseTime", [604800]); // Move time forward 7 days
        await ethers.provider.send("evm_mine");
        await expect(crowdfunding.connect(addr1).refund()).to.changeEtherBalances(
            [addr1, crowdfunding], [ethers.parseEther("5"), -ethers.parseEther("5")]
        );
    });
});
```

## Next Steps
- Implement **progress tracking UI** for better visibility  
- Add **penalty/reward mechanisms** for early or late contributions  
- Explore **integration with ERC20 tokens** instead of ETH  

#Day13 #200DaysOfCode #Solidity #Crowdfunding #SmartContracts #Ethereum #Web3 🚀

