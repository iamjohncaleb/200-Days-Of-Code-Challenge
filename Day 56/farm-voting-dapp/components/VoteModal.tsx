"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ProposalCard from "@/components/ProposalCard";
import CreateProposalModal from "@/components/CreateProposalModal";
import { Rocket } from "lucide-react";
import { useContractRead } from "wagmi";
import { abi } from "@/constants/abi";

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`;

export default function Home() {
  const [proposals, setProposals] = useState<any[]>([]);

  const { data, isLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: "getAllProposals",
    watch: true,
  });

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setProposals(data);
    }
  }, [data]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-10"
    >
      <header className="flex justify-between items-center py-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          🌾 Farm Co-op Voting
        </h1>
        <ConnectButton showBalance={false} />
      </header>

      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg text-gray-300 max-w-2xl">
            Empowering farm co-operatives with transparent and tamper-proof voting using blockchain tech.
          </p>
        </motion.div>

        <motion.div
          className="flex gap-4"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <CreateProposalModal contractAddress={CONTRACT_ADDRESS} />
        </motion.div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        {isLoading ? (
          <p className="text-gray-400">Loading proposals...</p>
        ) : proposals.length === 0 ? (
          <p className="text-gray-400">No proposals found.</p>
        ) : (
          proposals.map((proposal, idx) => (
            <ProposalCard
              key={idx}
              id={BigInt(proposal.id)}
              title={proposal.description}
              status={proposal.executed ? "Closed" : "Voting"}
              contractAddress={CONTRACT_ADDRESS}
            />
          ))
        )}
      </section>
    </motion.div>
  );
}
