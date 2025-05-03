import { useState } from "react";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { parseEther } from "viem";
import FarmYieldTokenABI from "../abi/FarmYieldToken.json";
import { toast } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

export default function FarmInteraction() {
  const { address, isConnected } = useAccount();

  const [farmName, setFarmName] = useState("");
  const [farmLocation, setFarmLocation] = useState("");
  const [landSize, setLandSize] = useState(0);
  const [cropType, setCropType] = useState("");
  const [mintAmount, setMintAmount] = useState("1");

  const [showModal, setShowModal] = useState(false);

  const { config: registerConfig } = usePrepareContractWrite({
    address: contractAddress,
    abi: FarmYieldTokenABI,
    functionName: "registerFarm",
    args: [farmName, farmLocation, landSize, cropType],
    enabled:
      Boolean(farmName) &&
      Boolean(farmLocation) &&
      landSize > 0 &&
      Boolean(cropType),
  });

  const { write: registerFarm, data: registerTx } = useContractWrite({
    ...registerConfig,
    onSuccess: () => toast.success("Farm registration initiated"),
    onError: (error) =>
      toast.error(`Registration failed: ${error.message.split("\n")[0]}`),
  });

  const { config: mintConfig } = usePrepareContractWrite({
    address: contractAddress,
    abi: FarmYieldTokenABI,
    functionName: "mint",
    args: [address, parseEther(mintAmount || "0")],
    enabled: Boolean(address) && parseFloat(mintAmount) > 0,
  });

  const { write: mintTokens, data: mintTx } = useContractWrite({
    ...mintConfig,
    onSuccess: () => toast.success("Minting started"),
    onError: (error) =>
      toast.error(`Mint failed: ${error.message.split("\n")[0]}`),
  });

  const { isLoading: isRegistering, isSuccess: isRegistered } = useWaitForTransaction({
    hash: registerTx?.hash,
    onSuccess: () => {
      toast.success("✅ Farm Registered!");
      setShowModal(true);
    },
  });

  const { isLoading: isMinting, isSuccess: isMinted } = useWaitForTransaction({
    hash: mintTx?.hash,
    onSuccess: () => toast.success("✅ Tokens Minted!"),
  });

  return (
    <div className="bg-futuristic text-white p-6 rounded-2xl shadow-xl space-y-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-primary">🌿 Register Your Farm</h2>
      <input
        type="text"
        placeholder="Farm Name"
        value={farmName}
        onChange={(e) => setFarmName(e.target.value)}
        className="w-full p-2 rounded bg-dark text-white"
      />
      <input
        type="text"
        placeholder="Location"
        value={farmLocation}
        onChange={(e) => setFarmLocation(e.target.value)}
        className="w-full p-2 rounded bg-dark text-white"
      />
      <input
        type="number"
        placeholder="Land Size (hectares)"
        value={landSize}
        onChange={(e) => setLandSize(Number(e.target.value))}
        className="w-full p-2 rounded bg-dark text-white"
      />
      <input
        type="text"
        placeholder="Crop Type"
        value={cropType}
        onChange={(e) => setCropType(e.target.value)}
        className="w-full p-2 rounded bg-dark text-white"
      />
      <button
        onClick={() => {
          if (!isConnected) return toast.error("Wallet not connected");
          if (!registerFarm) return toast.error("Form incomplete");
          registerFarm();
        }}
        disabled={!registerFarm || isRegistering}
        className="w-full p-3 rounded bg-primary text-dark font-bold hover:scale-105 transition"
      >
        {isRegistering ? (
          <span className="flex items-center justify-center gap-2">
            <FaSpinner className="animate-spin" /> Registering...
          </span>
        ) : (
          "Register Farm"
        )}
      </button>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-dark p-6 rounded-xl shadow-xl max-w-md w-full text-white"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <h3 className="text-xl font-bold mb-2 text-green-400">✅ Farm Registered</h3>
              <p><strong>Name:</strong> {farmName}</p>
              <p><strong>Location:</strong> {farmLocation}</p>
              <p><strong>Land Size:</strong> {landSize} hectares</p>
              <p><strong>Crop:</strong> {cropType}</p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 bg-primary text-dark px-4 py-2 rounded hover:bg-opacity-80"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <hr className="border-gray-600" />

      <h2 className="text-2xl font-bold text-primary">🌱 Mint Tokens</h2>
      <input
        type="number"
        placeholder="Amount"
        value={mintAmount}
        onChange={(e) => setMintAmount(e.target.value)}
        className="w-full p-2 rounded bg-dark text-white"
      />
      <button
        onClick={() => {
          if (!isConnected) return toast.error("Wallet not connected");
          if (!mintTokens) return toast.error("Invalid mint amount");
          mintTokens();
        }}
        disabled={!mintTokens || isMinting}
        className="w-full p-3 rounded bg-primary text-dark font-bold hover:scale-105 transition"
      >
        {isMinting ? (
          <span className="flex items-center justify-center gap-2">
            <FaSpinner className="animate-spin" /> Minting...
          </span>
        ) : (
          "Mint Tokens"
        )}
      </button>
    </div>
  );
}
