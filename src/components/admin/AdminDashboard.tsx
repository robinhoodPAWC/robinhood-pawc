"use client";

import { formatEther } from "viem";

import useAdmin from "@/hooks/useAdmin";
import useAdminActions from "@/hooks/useAdminActions";
import { useEffect } from "react";

export default function AdminDashboard() {
  const admin = useAdmin();

  const actions = useAdminActions();
  const { refetchAll } = admin;

  useEffect(() => {
    if (actions.isConfirmed) {
      refetchAll?.();
    }
  }, [actions.isConfirmed, refetchAll]);

  if (!admin.isOwner) {
    return (
      <div className="rounded-3xl border border-red-800 bg-zinc-900 p-8">
        <h2 className="text-2xl font-bold text-red-500">
          Access Denied
        </h2>

        <p className="mt-4 text-zinc-400">
          Only the contract owner can access this page.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold text-white">
        Admin Dashboard
      </h1>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <AdminCard
          title="Mint Price"
            value={`${formatEther(admin.mintPrice ?? BigInt(0))} ETH`}
        />

        <AdminCard
          title="Reward"
            value={`${formatEther(admin.reward ?? BigInt(0))} PAWC`}
        />

        <AdminCard
          title="Total Minted"
            value={formatEther(admin.totalMinted ?? BigInt(0))}
        />

        <AdminCard
          title="Transactions"
            value={`${admin.totalTransactions ?? BigInt(0)}`}
        />

        <AdminCard
          title="ETH Collected"
            value={`${formatEther(admin.totalEthCollected ?? BigInt(0))} ETH`}
        />

        <AdminCard
          title="Mint Status"
          value={admin.paused ? "Paused 🔴" : "Active 🟢"}
        />

      </div>

      {/* Action Buttons */}

      <div className="flex flex-wrap gap-4">

        <button
          onClick={actions.pause}
          disabled={
            actions.isPending ||
            actions.isConfirming ||
            admin.paused
          }
          className="rounded-xl bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Pause
        </button>

        <button
          onClick={actions.unpause}
          disabled={
            actions.isPending ||
            actions.isConfirming ||
            !admin.paused
          }
          className="rounded-xl bg-lime-500 px-6 py-3 font-bold text-black transition hover:bg-lime-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Unpause
        </button>

        <button
          onClick={actions.withdraw}
          disabled={
            actions.isPending ||
            actions.isConfirming
          }
          className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Withdraw
        </button>

      </div>

      {/* Transaction Status */}

      <div className="space-y-2">

        {actions.isPending && (
          <p className="text-yellow-400">
            ⏳ Waiting for wallet confirmation...
          </p>
        )}

        {actions.isConfirming && (
          <p className="text-blue-400">
            🔄 Transaction is being confirmed...
          </p>
        )}

        {actions.isConfirmed && (
          <p className="text-lime-400">
            ✅ Transaction confirmed successfully.
          </p>
        )}

      </div>

      {/* Transaction Hash */}

      {actions.hash && (
        <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6">

          <p className="mb-2 text-sm text-zinc-500">
            Transaction Hash
          </p>

          <a
            href={`https://robinhoodchain.blockscout.com/tx/${actions.hash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-lime-400 hover:underline"
          >
            {actions.hash}
          </a>

        </div>
      )}

    </div>
  );
}

function AdminCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <p className="text-zinc-500">
        {title}
      </p>

      <h2 className="mt-3 text-2xl font-bold text-lime-400">
        {value}
      </h2>

    </div>
  );
}