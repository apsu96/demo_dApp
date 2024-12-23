import React from "react";
import { useConnect } from "wagmi";

const ConnectModal = ({ isOpen }: { isOpen: boolean }) => {
  const { connectors, connect } = useConnect();
  return isOpen ? (
    <div>
      {connectors.map((connector) => (
        <button key={connector.uid} onClick={() => connect({ connector })}>
          {connector.name}
        </button>
      ))}
    </div>
  ) : null;
};

export default ConnectModal;
