"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LaunchCampaignModal({ onClose }: { onClose: () => void }) {
  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = async () => {
    // Interact with the smart contract (smart contract logic here)
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-md shadow-xl">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Launch New Campaign</h2>
        <input
          className="w-full mb-4 px-3 py-2 rounded bg-gray-100 text-gray-700"
          placeholder="Campaign Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="w-full mb-4 px-3 py-2 rounded bg-gray-100 text-gray-700"
          placeholder="Goal (ETH)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <div className="flex justify-between">
          <Button onClick={onClose} variant="outline">Cancel</Button>
          <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-500 text-white">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
