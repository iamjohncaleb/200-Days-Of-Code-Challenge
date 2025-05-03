import { useEffect, useState } from 'react';
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { ethers } from 'ethers';
import abi from '../abi/FarmCoopVoting.json';

const contractAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';

export default function Home() {
  const { address, isConnected } = useAccount();
  const [proposalCount, setProposalCount] = useState(0);
  const [proposals, setProposals] = useState<{ description: string, voteCount: number }[]>([]);

  const getProposals = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const count = await contract.proposalCount();
    setProposalCount(count.toNumber());

    const allProposals = [];
    for (let i = 0; i < count; i++) {
      const p = await contract.getProposal(i);
      allProposals.push({ description: p[0], voteCount: p[1].toNumber() });
    }
    setProposals(allProposals);
  };

  useEffect(() => {
    if (isConnected) getProposals();
  }, [isConnected]);

  const voteFor = async (index: number) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const tx = await contract.vote(index);
    await tx.wait();
    getProposals();
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🌾 Farm Co-operative Voting</h1>

      {proposals.map((p, index) => (
        <div key={index} className="bg-gray-800 rounded-2xl p-4 mb-4 shadow-lg">
          <p className="text-xl">{p.description}</p>
          <p className="text-sm text-gray-400">Votes: {p.voteCount}</p>
          <button
            onClick={() => voteFor(index)}
            className="mt-2 px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600"
          >
            Vote
          </button>
        </div>
      ))}
    </main>
  );
}
