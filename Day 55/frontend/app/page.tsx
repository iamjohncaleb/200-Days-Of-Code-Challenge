'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-28 space-y-24 px-6">
        <section id="home" className="text-center">
          <h1 className="text-4xl font-bold text-green-800">Empowering Agriculture Through Decentralized Funding</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A transparent and secure platform where farmers and investors connect directly to fund agricultural innovation.
          </p>
        </section>

        <section id="features" className="text-center bg-green-50 py-12 rounded-lg">
          <h2 className="text-3xl font-semibold text-green-800">Features</h2>
          <ul className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700">
            <li>✅ Smart Contract Governance</li>
            <li>✅ Real-time Campaign Tracking</li>
            <li>✅ Secure Wallet Integration</li>
            <li>✅ Transparent Fund Allocation</li>
          </ul>
        </section>

        <section id="products" className="text-center">
          <h2 className="text-3xl font-semibold text-green-800">Products</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-green-700">Crowdfunding Campaigns</h3>
              <p className="mt-2 text-gray-600">Support verified agricultural ventures and track impact.</p>
            </div>
            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-green-700">Yield Tokenization</h3>
              <p className="mt-2 text-gray-600">Trade tokenized farm outputs with traceability.</p>
            </div>
            <div className="border p-6 rounded-xl shadow hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-green-700">Verification Modules</h3>
              <p className="mt-2 text-gray-600">Verify soil, seeds, and carbon credits transparently.</p>
            </div>
          </div>
        </section>

        <section id="services" className="text-center bg-green-50 py-12 rounded-lg">
          <h2 className="text-3xl font-semibold text-green-800">Services</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold">🛡️ Contract Auditing</h4>
              <p className="text-gray-600">Ensure funding safety with expert smart contract review.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">🚀 Campaign Support</h4>
              <p className="text-gray-600">Guidance to plan, launch and manage funding rounds.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">🔌 Integration Services</h4>
              <p className="text-gray-600">Plug your farm into Web3 with full-stack integration.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
