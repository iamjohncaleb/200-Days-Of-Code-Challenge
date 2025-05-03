// pages/_app.tsx
import "@/styles/globals.css";
import ConnectButton from "@/components/ConnectButton";
import { WagmiConfig, createClient, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

const { chains, provider } = configureChains([mainnet], [publicProvider()]);
const { connectors } = getDefaultWallets({ appName: "Farm DApp", chains });
const wagmiClient = createClient({ autoConnect: true, connectors, provider });

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <header>
          <ConnectButton />
        </header>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
