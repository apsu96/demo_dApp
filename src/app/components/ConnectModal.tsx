import React from "react";
import { useConnect } from "wagmi";

const ConnectModal = ({ isOpen }: { isOpen: boolean }) => {
  const { connectors, connect } = useConnect();
  return (
    <div
      className={
        "fixed inset-0 z-50 flex flex-col justify-center items-center " +
        (isOpen ? "flex backdrop-blur" : "hidden")
      }
    >
      <div
        className={
          "flex-col bg-gray-100 px-12 py-16 rounded-3xl " +
          (isOpen ? "flex" : "hidden")
        }
      >
        <h1 className="text-3xl font-semibold text-center">DEMO DAPP</h1>
        <div className="flex flex-col mt-3 w-full gap-4">
          <p className="text-xl mb-4">Connect your wallet</p>
          <button
            type="button"
            className="bg-white rounded-xl p-3 flex justify-between hover:bg-slate-50 transition ease-in-out duration-150"
          >
            Coinbase Wallet
            <img src="/images/coinbase.svg" alt="Coinbase Logo" />
          </button>
          <button
            type="button"
            className="bg-white rounded-xl p-3 flex justify-between hover:bg-slate-50 transition ease-in-out duration-150"
          >
            MetaMask
            <img src="/images/metamask.svg" alt="MetaMask Logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectModal;
