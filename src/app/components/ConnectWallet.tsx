import { useConnect, useAccount } from "wagmi";
import Account from "./Account";

const ConnectWallet = () => {
  const { connectors, connect } = useConnect();
  const { isConnected } = useAccount();

  return (
    <div>
      {isConnected ? (
        <Account />
      ) : (
        connectors.map((connector) => (
          <button key={connector.uid} onClick={() => connect({ connector })}>
            {connector.name}
          </button>
        ))
      )}
    </div>
  );
};

export default ConnectWallet;
