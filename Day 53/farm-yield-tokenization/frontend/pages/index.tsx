import { ConnectButton } from "@rainbow-me/rainbowkit";
import dynamic from "next/dynamic";

const FarmInteraction = dynamic(() => import("../components/FarmInteraction"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-dark text-primary font-futuristic">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="flex justify-between items-center">
          <h1 className="text-4xl">🌾 Farm Yield DApp</h1>
          <ConnectButton />
        </header>

        <FarmInteraction />
      </div>
    </main>
  );
}
