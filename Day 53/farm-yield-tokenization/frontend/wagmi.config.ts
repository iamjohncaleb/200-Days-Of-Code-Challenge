import { configureChains, createConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { polygonMumbai } from 'wagmi/chains';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Farm Yield DApp',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // You can get this from cloud.walletconnect.com
  chains,
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export { chains };
