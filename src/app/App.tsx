import { useAccount } from "wagmi";
import Account from "./components/Account";
import ConnectWallet from "./components/ConnectWallet";
import Header from "./components/Header";

const App = () => {
  const { isConnected } = useAccount();
  return (
    <div className="min-h-screen container mx-auto px-4 flex flex-col">
      <Header />
      {isConnected ? <Account /> : <ConnectWallet />}
    </div>
  );
};

export default App;
