import { configureChains, createConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

export const config = createConfig({
  autoConnect: true,
  publicClient: configureChains([goerli], [publicProvider()]).publicClient,
});
