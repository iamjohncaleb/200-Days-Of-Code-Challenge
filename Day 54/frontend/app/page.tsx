"use client";

import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { parseEther } from "viem";

const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS_HERE";
const ABI = [
  {
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "location", type: "string" },
      { internalType: "uint256", name: "sizeInHectares", type: "uint256" },
      { internalType: "string", name: "cropType", type: "string" },
    ],
    name: "registerFarm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "farmer", type: "address" }],
    name: "getFarm",
    outputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "location", type: "string" },
      { internalType: "uint256", name: "sizeInHectares", type: "uint256" },
      { internalType: "string", name: "cropType", type: "string" },
      { internalType: "bool", name: "isRegistered", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "hectares", type: "uint256" },
    ],
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
  },
];

export default function Home() {
  const { address, isConnected } = useAccount();
  const [hectares, setHectares] = useState(0);
  const [form, setForm] = useState({
    name: "",
    location: "",
    size: 0,
    crop: "",
  });

  const { data: farmData, refetch: refetchFarm } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: "getFarm",
    args: [address],
    enabled: !!address,
  });

  const { data: balance, refetch: refetchBalance } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: "balanceOf",
    args: [address],
    enabled: !!address,
  });

  const {
    write: registerFarm,
    data: txFarmData,
    isLoading: isRegistering,
  } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: "registerFarm",
    onSuccess: () => {
      refetchFarm();
    },
  });

  const {
    write: mint,
    data: txMintData,
    isLoading: isMinting,
  } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: "mint",
  });

  const { isLoading: txPending, isSuccess } = useWaitForTransaction({
    hash: txMintData?.hash,
    onSuccess: () => {
      refetchBalance();
      setHectares(0);
    },
  });

  const handleRegister = () => {
    registerFarm({
      args: [form.name, form.location, form.size, form.crop],
    });
  };

  const handleMint = () => {
    if (address && hectares > 0) {
      mint({ args: [address, hectares] });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
        🌾 Farm Yield Tokenization
      </h1>
      <p className="text-lg text-gray-300 mb-6">
        Register your farm and mint FYT tokens for your yields.
      </p>

      <ConnectButton />

      {isConnected && (
        <div className="w-full max-w-md mt-6">
          {/* ✅ Farm Registration */}
          {!farmData?.[4] ? (
            <div className="bg-[#1a1a1a] border border-gray-700 p-6 rounded-xl mb-6">
              <h2 className="text-xl font-semibold mb-4">Register Your Farm</h2>
              <input
                className="w-full mb-2 p-2 rounded bg-[#222] text-white"
                placeholder="Farm Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                className="w-full mb-2 p-2 rounded bg-[#222] text-white"
                placeholder="Location"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />
              <input
                className="w-full mb-2 p-2 rounded bg-[#222] text-white"
                placeholder="Size in Hectares"
                type="number"
                value={form.size}
                onChange={(e) => setForm({ ...form, size: Number(e.target.value) })}
              />
              <input
                className="w-full mb-3 p-2 rounded bg-[#222] text-white"
                placeholder="Crop Type"
                value={form.crop}
                onChange={(e) => setForm({ ...form, crop: e.target.value })}
              />
              <button
                onClick={handleRegister}
                disabled={isRegistering}
                className="w-full py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl"
              >
                {isRegistering ? "Registering..." : "Register Farm"}
              </button>
            </div>
          ) : (
            <div className="bg-[#111] p-6 rounded-xl border border-gray-600 mb-6 text-left">
              <h3 className="font-semibold text-lg mb-2">Your Registered Farm</h3>
              <p><strong>Name:</strong> {farmData[0]}</p>
              <p><strong>Location:</strong> {farmData[1]}</p>
              <p><strong>Size:</strong> {Number(farmData[2])} hectares</p>
              <p><strong>Crop:</strong> {farmData[3]}</p>
            </div>
          )}

          {/* ✅ Mint FYT */}
          <div className="bg-[#1a1a1a] border border-gray-700 p-6 rounded-xl mb-6">
            <label className="block mb-2 text-left">Enter Hectares to Mint FYT:</label>
            <input
              type="number"
              value={hectares}
              onChange={(e) => setHectares(Number(e.target.value))}
              className="w-full px-4 py-2 rounded-xl bg-[#111] text-white border border-gray-600 mb-4"
              min="1"
            />
            <button
              onClick={handleMint}
              disabled={isMinting || txPending}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold"
            >
              {isMinting || txPending ? "Minting..." : "Mint FYT Tokens"}
            </button>

            {txMintData?.hash && (
              <p className="text-sm mt-3 text-blue-400">
                Tx pending:{" "}
                <a
                  href={`https://mumbai.polygonscan.com/tx/${txMintData.hash}`}
                  target="_blank"
                  className="underline"
                >
                  View on Polygonscan
                </a>
              </p>
            )}

            {isSuccess && <p className="text-green-400 mt-3">✅ Mint successful!</p>}

            <div className="mt-6 text-gray-300">
              <p className="text-sm">Your FYT Balance:</p>
              <p className="text-2xl font-bold">
                {balance ? (Number(balance) / 1e18).toFixed(2) : "0.00"} FYT
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
