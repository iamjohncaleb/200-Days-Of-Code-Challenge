"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { abi } from "@/constants/abi";
import { parseEther } from "viem";

export default function CreateProposalModal({ contractAddress }: { contractAddress: string }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { config } = usePrepareContractWrite({
    address: contractAddress as `0x${string}`,
    abi,
    functionName: "createProposal",
    args: [title, description],
    enabled: Boolean(title && description),
  });

  const { write, isLoading } = useContractWrite({
    ...config,
    onSuccess: () => {
      toast.success("Proposal submitted successfully");
      setTitle("");
      setDescription("");
    },
    onError: (error) => toast.error(error.message),
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-500">New Proposal</Button>
      </DialogTrigger>
      <DialogContent className="bg-[#1a1a2f] border border-gray-700">
        <DialogHeader>
          <DialogTitle>Create New Proposal</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            placeholder="Proposal Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-900 text-white"
          />
          <Textarea
            placeholder="Proposal Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-gray-900 text-white"
          />
          <Button disabled={!write || isLoading} onClick={() => write?.()}>
            {isLoading ? "Submitting..." : "Submit Proposal"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
