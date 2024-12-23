import { useState } from "react";
import { useConnect } from "wagmi";
import ConnectModal from "./ConnectModal";

const ConnectWallet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 m-4 p-14 bg-orange-300 rounded-2xl">
      <p className="text-2xl text-center">Please connect to the Wallet</p>
      <button
        className="bg-black text-white text-2xl p-4 w-56 rounded-xl uppercase font-semibold"
        onClick={() => setIsModalOpen(true)}
      >
        Connect
      </button>
      <ConnectModal isOpen={isModalOpen} />
    </div>
  );
};

export default ConnectWallet;
