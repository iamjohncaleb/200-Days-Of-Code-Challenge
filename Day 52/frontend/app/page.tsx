"use client";
import WalletConnect from "../components/ConnectButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl mb-6 font-bold">🌾 Agricultural Loan DApp</h1>
      <WalletConnect />
      <p className="mt-4 text-gray-400">Apply for a loan and monitor disbursements securely</p>
    </main>
  );
}
