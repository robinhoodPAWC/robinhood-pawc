"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const handleConnect = () => {
    const metamask = connectors.find(
      (connector) => connector.id === "metaMaskSDK"
    );

    if (!metamask) {
      alert("MetaMask tidak ditemukan");
      return;
    }

    connect({
      connector: metamask,
    });
  };

  if (isConnected) {
    return (
      <button
        onClick={() => disconnect()}
        className="rounded-xl bg-lime-500 px-4 py-2 font-bold text-black"
      >
        {address?.slice(0, 6)}...
        {address?.slice(-4)}
      </button>
    );
  }

  return (
    <button
      onClick={handleConnect}
      className="rounded-xl bg-lime-500 px-4 py-2 font-bold text-black"
    >
      Connect Wallet
    </button>
  );
}