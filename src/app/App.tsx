import { useAccount } from "wagmi";
import Account from "./components/Account";
import ConnectWallet from "./components/ConnectWallet";
import Header from "./components/Header";
import Status from "./components/Status";

const App = () => {
  const { isConnected } = useAccount();
  return (
    <div className="min-h-screen container mx-auto px-4 flex flex-col">
      <Header />
      <Status isConnected={isConnected} />
      {isConnected ? <Account /> : <ConnectWallet />}
    </div>
  );
};

export default App;
