"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Timer } from "lucide-react";

export default function ProposalCard({ title, status }: { title: string; status: "Voting" | "Closed" }) {
  const isVoting = status === "Voting";
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Card className="bg-gradient-to-br from-[#111] to-[#1f1f2e] border border-gray-700 text-white shadow-xl">
        <CardHeader className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <Badge className={`text-white ${isVoting ? "bg-green-600" : "bg-gray-500"}`}>
            {isVoting ? <Timer className="h-4 w-4 mr-1" /> : <CheckCircle className="h-4 w-4 mr-1" />} {status}
          </Badge>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Proposal description goes here.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
