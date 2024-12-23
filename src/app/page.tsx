import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "./core/wagmiConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <div></div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
