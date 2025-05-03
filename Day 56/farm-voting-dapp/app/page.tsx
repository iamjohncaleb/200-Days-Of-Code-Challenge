"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ProposalCard from "@/components/ProposalCard";
import { Rocket } from "lucide-react";

export default function Home() {
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
          <Button className="bg-green-600 hover:bg-green-500 text-white">
            <Rocket className="mr-2 h-4 w-4" /> Create Proposal
          </Button>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        <ProposalCard title="Install Solar Panels" status="Voting" />
        <ProposalCard title="Add New Member" status="Closed" />
        <ProposalCard title="Subsidize Seeds" status="Voting" />
      </section>
    </motion.div>
  );
}
