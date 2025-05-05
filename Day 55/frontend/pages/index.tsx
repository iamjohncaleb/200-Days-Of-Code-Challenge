"use client";
import { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CampaignCard from "@/components/CampaignCard";
import LaunchCampaignModal from "@/components/LaunchCampaignModal";
import { useContractRead } from "wagmi";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/constants";

export default function Home() {
  const [campaigns, setCampaigns] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const { data } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "getAllCampaigns",
    watch: true,
  });

  useEffect(() => {
    if (data) setCampaigns(data);
  }, [data]);

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center p-5 shadow-lg">
        <h1 className="text-3xl font-bold text-green-600">🌱 AgriFund</h1>
        <ConnectButton />
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center flex-1 space-y-10 px-6 py-10">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-lg text-gray-600 max-w-2xl text-center"
        >
          <p>Fuel the future of agriculture by funding real farmers and agri-projects across the globe.</p>
        </motion.section>

        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-end w-full"
        >
          <Button
            onClick={() => setShowModal(true)}
            className="bg-green-600 hover:bg-green-500 text-white"
          >
            Launch Campaign
          </Button>
        </motion.div>

        {/* Campaign Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 w-full">
          {campaigns.map((c: any, i: number) => (
            <CampaignCard key={i} campaign={c} />
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center text-white py-5">
        <p>&copy; 2025 AgriFund. All rights reserved.</p>
      </footer>

      {/* Launch Campaign Modal */}
      {showModal && <LaunchCampaignModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
