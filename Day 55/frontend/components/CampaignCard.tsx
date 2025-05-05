import { motion } from "framer-motion";

export default function CampaignCard({ campaign }: { campaign: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white border-2 border-green-500 p-5 rounded-xl shadow-md transition duration-200"
    >
      <h3 className="text-lg font-semibold text-green-600 mb-2">{campaign.title}</h3>
      <p className="text-gray-600">Goal: {campaign.goalAmount} ETH</p>
      <p className="text-gray-600">Raised: {campaign.raisedAmount} ETH</p>
    </motion.div>
  );
}
