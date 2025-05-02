import { ethers } from "ethers";

const contractAddress = "YOUR_CONTRACT_ADDRESS";
const contractABI = [
  // Your contract ABI here
];

export const purchaseInsurance = async (signer) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const insuranceAmount = ethers.utils.parseEther("1"); // adjust as per your contract
  const tx = await contract.purchaseInsurance({ value: insuranceAmount });
  await tx.wait();
  alert("Insurance Purchased Successfully!");
};

export const makeClaim = async (signer, walletAddress) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tx = await contract.makeClaim();
  await tx.wait();
  alert("Claim Made!");
};

export const issuePayout = async (signer, walletAddress) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tx = await contract.issuePayout(walletAddress);
  await tx.wait();
  alert("Payout Issued!");
};
