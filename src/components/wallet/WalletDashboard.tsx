"use client";

import useWalletDashboard from "@/hooks/useWalletDashboard";

export default function WalletDashboard() {
  const {
    address,
    network,
    ethBalance,
    pawcBalance,
  } = useWalletDashboard();

  return (
    <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h1 className="text-3xl font-bold text-white">
        My Wallet
      </h1>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>
          <p className="text-zinc-500">
            Address
          </p>

          <p className="break-all text-white">
            {address ?? "-"}
          </p>
        </div>

        <div>
          <p className="text-zinc-500">
            Network
          </p>

          <p className="text-white">
            {network ?? "-"}
          </p>
        </div>

        <div>
          <p className="text-zinc-500">
            ETH Balance
          </p>

          <p className="text-lime-400">
            {ethBalance} ETH
          </p>
        </div>

        <div>
          <p className="text-zinc-500">
            PAWC Balance
          </p>

          <p className="text-lime-400">
            {pawcBalance} PAWC
          </p>
        </div>

      </div>

    </div>
  );
}