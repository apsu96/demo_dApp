import React, { EventHandler, useEffect, useRef } from "react";
import { useConnect } from "wagmi";

const ConnectModal = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  const { connect } = useConnect();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div
      className={
        "fixed inset-0 z-50 flex flex-col justify-center items-center " +
        (isOpen
          ? "flex backdrop-blur transition ease-in-out duration-150"
          : "hidden")
      }
    >
      <div
        ref={modalRef}
        className={
          "relative flex-col bg-gray-100 px-12 py-14 rounded-3xl " +
          (isOpen ? "flex" : "hidden")
        }
      >
        <div
          className="absolute top-5 right-8 cursor-pointer ml-auto hover:bg-white"
          onClick={handleClose}
        >
          <img
            src="/images/closeIcon.svg"
            alt="Close Icon"
            width={24}
            height={24}
          />
        </div>
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
