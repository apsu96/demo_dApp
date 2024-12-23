import { useConnect } from "wagmi";

const ConnectWallet = () => {
  const { connectors, connect } = useConnect();

  return (
    <div>
      {connectors.map((connector) => (
        <button key={connector.uid} onClick={() => connect({ connector })}>
          {connector.name}
        </button>
      ))}
    </div>
  );
};

export default ConnectWallet;
