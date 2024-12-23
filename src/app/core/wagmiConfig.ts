import { http, createConfig } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { injected, coinbaseWallet, metaMask } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [baseSepolia],
  connectors: [
    injected(),
    coinbaseWallet({ appName: "Demo DApp" }),
    metaMask({ dappMetadata: { name: "Demo DApp" } }),
  ],
  transports: {
    [baseSepolia.id]: http(),
  },
});
