"use client";

import { formatEther } from "viem";

import useWalletDashboard from "@/hooks/useWalletDashboard";

import CopyButton from "@/components/common/CopyButton";

export default function WalletDashboard() {
  const {
    address,
    ethBalance,
    pawcBalance,
  } = useWalletDashboard();

  return (
    <>
      <div className="flex items-center gap-2">
        <p className="break-all text-white">
          {address}
        </p>

        {address && (
          <CopyButton value={address} />
        )}
      </div>
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
      <h2 className="text-2xl font-bold text-white">
        My Wallet
      </h2>

      <div className="mt-6 space-y-4">
        <div>
          <p className="text-zinc-400">Address</p>
          <p className="break-all text-white">
            {address ?? "-"}
          </p>
        </div>

        <div>
          <p className="text-zinc-400">ETH Balance</p>
          <p className="text-lime-400">
            {ethBalance
              ? `${ethBalance} ETH`
              : "Loading..."}
          </p>
        </div>

        <div>
          <p className="text-zinc-400">PAWC Balance</p>
          <p className="text-lime-400">
            {pawcBalance
              ? `${Number(formatEther(BigInt(pawcBalance))).toLocaleString()} PAWC`
              : "Loading..."}
          </p>
        </div>
      </div>
    </div>
    </>
  );
}