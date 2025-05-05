'use client';

import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 backdrop-blur bg-white/80 border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-green-700 text-2xl font-bold tracking-wide">
          🌿 AgriFund
        </Link>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-green-600">Home</a></li>
          <li><a href="#features" className="hover:text-green-600">Features</a></li>
          <li><a href="#products" className="hover:text-green-600">Products</a></li>
          <li><a href="#services" className="hover:text-green-600">Services</a></li>
        </ul>
        <div className="ml-4">
          <ConnectButton showBalance={false} />
        </div>
      </div>
    </motion.nav>
  );
}
