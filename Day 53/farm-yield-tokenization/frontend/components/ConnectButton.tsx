// components/ConnectButton.tsx
"use client";

import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";

export default function ConnectButton() {
  return (
    <div className="flex justify-end p-4">
      <div className="bg-dark border border-gray-600 rounded-2xl px-4 py-2 shadow-md hover:shadow-lg transition duration-200">
        <RainbowConnectButton
          showBalance={false}
          chainStatus="icon"
          accountStatus="address"
        />
      </div>
    </div>
  );
}
