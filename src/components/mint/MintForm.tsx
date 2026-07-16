"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import { formatEther } from "viem";
import { toast } from "sonner";

import useMint from "@/hooks/useMint";
import useMintPrice from "@/hooks/useMintPrice";
import useMintReceipt from "@/hooks/useMintReceipt";

export default function MintForm() {
  const [amount, setAmount] = useState(1);

  const { isConnected } = useAccount();

  const { mint, hash, isPending } = useMint();

  const { mintPrice, isLoading } = useMintPrice();

  const {
    isLoading: isConfirming,
    isSuccess,
  } = useMintReceipt(hash);

  const totalPrice =
    mintPrice && amount > 0
      ? mintPrice * BigInt(amount)
      : BigInt(0);

  async function handleMint() {
    if (!isConnected) {
      toast.error("Please connect your wallet first.");
      return;
    }

    try {
      await mint(
        BigInt(amount),
        totalPrice
      );
    } catch (error) {
      console.error(error);
      toast.error("Mint cancelled or failed.");
    }
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="text-3xl font-bold text-white">
        Mint PAWC
      </h2>

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

      <div className="mt-6">

        <label className="text-zinc-400">
          Quantity
        </label>

        <input
          type="number"
          min={1}
          value={amount}
          onChange={(e) =>
            setAmount(Number(e.target.value))
          }
          className="mt-2 w-full rounded-xl border border-zinc-700 bg-black p-4 text-white"
        />

      </div>

      <div className="mt-6 flex justify-between">

        <span className="text-zinc-500">
          Mint Price
        </span>

        <span className="font-semibold text-lime-400">
          {isLoading || !mintPrice
            ? "Loading..."
            : `${formatEther(mintPrice)} ETH`}
        </span>

      </div>

      <div className="mt-4 flex justify-between">

        <span className="text-zinc-500">
          Estimated Fee
        </span>

        <span className="font-semibold text-lime-400">
          {formatEther(totalPrice)} ETH
        </span>

      </div>

      <button
        onClick={handleMint}
        disabled={
          !isConnected ||
          isPending ||
          isConfirming
        }
        className="mt-8 w-full rounded-xl bg-lime-400 py-4 font-bold text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {!isConnected
          ? "Connect Wallet"
          : isPending
          ? "Waiting Wallet..."
          : isConfirming
          ? "Confirming..."
          : "Mint PAWC"}
      </button>

      {hash && (
        <div className="mt-6 rounded-xl border border-zinc-800 bg-black p-4">

          <p className="text-sm text-zinc-400">
            Transaction Hash
          </p>

          <p className="mt-2 break-all text-xs text-lime-400">
            {hash}
          </p>

          <a
            href={`https://robinhoodchain.blockscout.com/tx/${hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center text-lime-400 hover:underline"
          >
            View on Blockscout
          </a>

        </div>
      )}

      {isConfirming && (
        <div className="mt-6 rounded-xl border border-yellow-500 bg-yellow-500/10 p-4 text-center">

          <p className="font-semibold text-yellow-400">
            Waiting for blockchain confirmation...
          </p>

        </div>
      )}

      {isSuccess && (
        <div className="mt-6 rounded-xl border border-lime-500 bg-lime-500/10 p-4 text-center">

          <p className="text-lg font-bold text-lime-400">
            🎉 Mint Successful!
          </p>

          <p className="mt-2 text-sm text-zinc-300">
            Your PAWC has been minted successfully.
          </p>

        </div>
      )}

    </div>
  );
}