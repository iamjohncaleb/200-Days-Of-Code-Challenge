import { Chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { polygon, sepolia } from 'wagmi/chains';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const { chains, provider } = configureChains(
  [polygon, sepolia],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY })]
);

const wagmiClient = createClient({
  autoConnect: true,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={lightTheme()}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
