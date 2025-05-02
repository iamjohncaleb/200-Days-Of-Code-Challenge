import { useState } from "react";
import { ethers } from "ethers";
import { purchaseInsurance, makeClaim, issuePayout } from "../utils/contract";

const InsuranceActions = ({ signer, walletAddress }) => {
  const [isClaimMade, setIsClaimMade] = useState(false);

  const handleInsurancePurchase = async () => {
    await purchaseInsurance(signer);
  };

  const handleClaim = async () => {
    await makeClaim(signer, walletAddress);
    setIsClaimMade(true);
  };

  const handlePayout = async () => {
    await issuePayout(signer, walletAddress);
  };

  return (
    <div className="actions">
      <button onClick={handleInsurancePurchase}>Purchase Insurance</button>
      <button onClick={handleClaim} disabled={isClaimMade}>
        {isClaimMade ? "Claim Made" : "Make Claim"}
      </button>
      <button onClick={handlePayout}>Claim Payout</button>
    </div>
  );
};

export default InsuranceActions;
