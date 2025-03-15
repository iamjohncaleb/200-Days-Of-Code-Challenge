 📌 Day 24: Solidity P2P Lending Smart Contract

 🔍 Overview
For **Day 24** of my **200 Days of Code Challenge**, I built a **Peer-to-Peer (P2P) Lending Smart Contract** in Solidity. This contract enables users to request loans, lenders to fund them, and borrowers to repay loans with interest.

 📜 Key Concepts

 ✅ **Loan Structure**
 `borrower`: The address of the user requesting the loan.
 `amount`: The principal amount borrowed.
 `interest`: The interest that must be paid on the loan.
 `repaid`: Boolean flag to track repayment status.

 ✅ **Mappings for Loan Management**
 `loans`: Maps a borrower’s address to a list of their loan requests.
 `lenderBalance`: Tracks the ETH balance of lenders.

 ✅ **Core Functions**
 `requestLoan()`: Allows users to request a loan by specifying the amount and interest rate.
 `lend()`: Lenders deposit ETH to fund the lending pool.
 `repayLoan()`: Borrowers repay their loan, ensuring the correct amount (principal + interest) is sent.

 ✅ **Event Logging**
 `LoanRequested()`: Emitted when a borrower requests a loan.
 `LoanRepaid()`: Emitted when a borrower successfully repays a loan.

 ⚠️ **Security Considerations**
 **Lack of Loan Matching**: Currently, loans are not matched to specific lenders. A **matching mechanism** should be added.
 **Incorrect Fund Transfer in `repayLoan()`**: The contract **returns funds to the borrower** instead of the lender. This logic needs fixing.
 **No Default Handling**: There are no **collateral mechanisms** or **penalties** for unpaid loans.
 **Reentrancy Risk**: Proper **ReentrancyGuard** should be implemented to prevent exploits.

 🛠️ Deployment & Testing
 Deploy using **Remix**, **Hardhat**, or **Truffle**.
 Borrowers call `requestLoan()` to request a loan.
 Lenders call `lend()` to fund loans.
 Borrowers call `repayLoan()` with the correct amount to mark the loan as repaid.

 🔗 Next Steps
🔹 Implement **loan-lender matching** for direct P2P lending.  
🔹 Fix **fund transfer logic** to send repayments to the correct lender.  
🔹 Add **collateral-based lending** for better security.  
🔹 Develop a **frontend dApp** for seamless interaction.  

#200DaysOfCode #Web3 #Solidity #SmartContracts #Ethereum #Blockchain #P2PLending #DeFi