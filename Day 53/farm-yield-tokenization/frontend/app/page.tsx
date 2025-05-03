"use client";

import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContractRead, useContractWrite, useWaitForTransaction } from "wagmi";
import { parseEther } from "viem";

const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS_HERE";
const ABI = [
  {
    inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "hectares", type: "uint256" }],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  }
];

export default function Home() {
  const { address, isConnected } = useAccount();
  const [hectares, setHectares] = useState(0);
  const [txHash, setTxHash] = useState<string | null>(null);

  const { data: balance, refetch } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: "balanceOf",
    args: [address],
    enabled: !!address,
  });

  const { write: mint, data: txData, isLoading: isMinting } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: "mint",
  });

  const { isLoading: isPending, isSuccess } = useWaitForTransaction({
    hash: txData?.hash,
    onSuccess() {
      refetch();
      setTxHash(null);
      setHectares(0);
    },
  });

  const handleMint = () => {
    if (address && hectares > 0) {
      mint({ args: [address, hectares] });
      setTxHash(txData?.hash || null);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
        Farm Yield Tokenization
      </h1>
      <p className="text-lg text-gray-300 mb-6">
        Tokenize your farmland yields and mint FYT tokens.
      </p>

      <ConnectButton />

      {isConnected && (
        <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl p-6 mt-6 w-full max-w-md">
          <label className="block mb-2 text-left text-gray-400">Enter Hectares:</label>
          <input
            type="number"
            value={hectares}
            onChange={(e) => setHectares(Number(e.target.value))}
            className="w-full px-4 py-2 rounded-xl bg-[#111] text-white border border-gray-600 focus:outline-none mb-4"
            min="1"
          />

          <button
            onClick={handleMint}
            disabled={isMinting || isPending}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold hover:opacity-90 transition"
          >
            {isMinting || isPending ? "Minting..." : "Mint FYT Tokens"}
          </button>

          {txData?.hash && (
            <p className="text-sm mt-3 text-blue-400">
              Tx pending: <a href={`https://mumbai.polygonscan.com/tx/${txData.hash}`} target="_blank" className="underline">View on Polygonscan</a>
            </p>
          )}

          {isSuccess && (
            <p className="text-green-400 mt-3">✅ Mint successful!</p>
          )}

          <div className="mt-6 text-gray-300">
            <p className="text-sm">Your FYT Balance:</p>
            <p className="text-2xl font-bold">
              {balance ? (Number(balance) / 1e18).toFixed(2) : "0.00"} FYT
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
