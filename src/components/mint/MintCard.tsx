"use client";

import { useState } from "react";

import useWalletInfo from "@/hooks/useWalletInfo";
import useSwitchRobinhood from "@/hooks/useSwitchRobinhood";

export default function MintCard() {
  const [amount, setAmount] = useState(1000);

  const {
    address,
    isConnected,
    balance,
    symbol,
    chainId,
  } = useWalletInfo();

  const {
    switchNetwork,
    isPending,
  } = useSwitchRobinhood();

  const handleMint = async () => {
    if (!isConnected) return;

    if (chainId !== 4663) {
      await switchNetwork();
      return;
    }

    alert("Mint Coming Soon 🚀");
  };

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">

      <h2 className="text-3xl font-bold text-white">
        Mint PAWC
      </h2>

      <p className="mt-2 text-zinc-400">
        Mint your PAWC inscription on Robinhood Chain.
      </p>

      {/* Wallet */}

      <div className="mt-8 rounded-2xl border border-zinc-800 bg-black p-4">

        <p className="text-sm text-zinc-500">
          Connected Wallet
        </p>

        <p className="mt-2 font-semibold text-lime-400">
          {isConnected
            ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
            : "Wallet not connected"}
        </p>

      </div>

      {/* Balance */}

      <div className="mt-4 rounded-2xl border border-zinc-800 bg-black p-4">

        <div className="flex justify-between">

          <span className="text-zinc-500">
            Balance
          </span>

          <span className="font-semibold text-white">
            {isConnected
              ? `${Number(balance ?? 0).toFixed(4)} ${symbol ?? "ETH"}`
              : "--"}
          </span>

        </div>

      </div>

      {/* Network */}

      <div className="mt-4 rounded-2xl border border-zinc-800 bg-black p-4">

        <div className="flex justify-between">

          <span className="text-zinc-500">
            Network
          </span>

          <span
            className={`font-semibold ${
              chainId === 4663
                ? "text-lime-400"
                : "text-red-500"
            }`}
          >
            {chainId === 4663
              ? "Robinhood Chain"
              : "Wrong Network"}
          </span>

        </div>

      </div>

      {/* Ticker */}

      <div className="mt-8">

        <label className="text-zinc-400">
          Ticker
        </label>

        <input
          value="PAWC"
          readOnly
          className="mt-2 w-full rounded-xl border border-zinc-700 bg-black p-4 text-white"
        />

      </div>

      {/* Amount */}

      <div className="mt-6">

        <label className="text-zinc-400">
          Amount
        </label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="mt-2 w-full rounded-xl border border-zinc-700 bg-black p-4 text-white outline-none focus:border-lime-400"
        />

      </div>

      {/* Fee */}

      <div className="mt-6 flex justify-between">

        <span className="text-zinc-500">
          Estimated Fee
        </span>

        <span className="font-semibold text-white">
          0.0001 ETH
        </span>

      </div>

      <button
        onClick={handleMint}
        disabled={!isConnected || isPending}
        className="
          mt-8
          w-full
          rounded-2xl
          bg-lime-400
          py-4
          text-lg
          font-bold
          text-black
          transition
          hover:bg-lime-300
          disabled:bg-zinc-700
          disabled:text-zinc-500
          disabled:cursor-not-allowed
        "
      >
        {!isConnected
          ? "Connect Wallet"
          : chainId !== 4663
          ? (isPending
              ? "Switching..."
              : "Switch to Robinhood")
          : "Mint PAWC"}
      </button>

    </div>
  );
}