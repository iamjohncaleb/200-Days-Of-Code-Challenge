// pages/index.tsx
import { useState } from "react";
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { parseEther } from "ethers";
import EquipmentLeasingABI from "../abi/EquipmentLeasing.json";

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

export default function Home() {
  const { address, isConnected } = useAccount();

  const [equipmentName, setEquipmentName] = useState("");
  const [durationDays, setDurationDays] = useState(30);
  const [leaseId, setLeaseId] = useState(0);

  const { config: leaseConfig } = usePrepareContractWrite({
    address: contractAddress,
    abi: EquipmentLeasingABI,
    functionName: "leaseEquipment",
    args: [equipmentName, durationDays],
    overrides: {
      value: parseEther("1"), // Adjust value as needed
    },
  });

  const { write: leaseEquipment, data: leaseTx } = useContractWrite(leaseConfig);

  const { config: terminateConfig } = usePrepareContractWrite({
    address: contractAddress,
    abi: EquipmentLeasingABI,
    functionName: "terminateLease",
    args: [leaseId],
  });

  const { write: terminateLease, data: terminateTx } = useContractWrite(terminateConfig);

  const { isLoading: isLeasing, isSuccess: isLeased } = useWaitForTransaction({
    hash: leaseTx?.hash,
  });

  const { isLoading: isTerminating, isSuccess: isTerminated } = useWaitForTransaction({
    hash: terminateTx?.hash,
  });

  return (
    <div className="bg-futuristic text-white p-6 rounded-2xl shadow-xl space-y-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-primary">🚜 Lease Equipment</h2>
      <input
        type="text"
        placeholder="Equipment Name"
        value={equipmentName}
        onChange={(e) => setEquipmentName(e.target.value)}
        className="w-full p-2 rounded bg-dark text-white"
      />
      <input
        type="number"
        placeholder="Lease Duration (days)"
        value={durationDays}
        onChange={(e) => setDurationDays(Number(e.target.value))}
        className="w-full p-2 rounded bg-dark text-white"
      />
      <button
        onClick={() => leaseEquipment?.()}
        disabled={!leaseEquipment || isLeasing}
        className="w-full p-3 rounded bg-primary text-dark font-bold hover:scale-105 transition"
      >
        {isLeasing ? "Leasing..." : "Lease Equipment"}
      </button>
      {isLeased && <p className="text-green-400">✅ Equipment Leased!</p>}

      <hr className="border-gray-600" />

      <h2 className="text-2xl font-bold text-primary">🛠️ Terminate Lease</h2>
      <input
        type="number"
        placeholder="Lease ID"
        value={leaseId}
        onChange={(e) => setLeaseId(Number(e.target.value))}
        className="w-full p-2 rounded bg-dark text-white"
      />
      <button
        onClick={() => terminateLease?.()}
        disabled={!terminateLease || isTerminating}
        className="w-full p-3 rounded bg-primary text-dark font-bold hover:scale-105 transition"
      >
        {isTerminating ? "Terminating..." : "Terminate Lease"}
      </button>
      {isTerminated && <p className="text-red-400">✅ Lease Terminated!</p>}
    </div>
  );
}
