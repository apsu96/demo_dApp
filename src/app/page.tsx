"use client";

import { WagmiProvider, useAccount } from "wagmi";
import { wagmiConfig } from "./core/wagmiConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ConnectWallet from "./components/ConnectWallet";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ConnectWallet />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
