import { useAccount } from "wagmi";
import Account from "./components/Account";
import ConnectWallet from "./components/ConnectWallet";

const App = () => {
  const { isConnected } = useAccount();
  return (
    <div className="max-w-screen-xl">
      {isConnected ? <Account /> : <ConnectWallet />}
    </div>
  );
};

export default App;
