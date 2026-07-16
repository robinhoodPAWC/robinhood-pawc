"use client";

import useExplorer from "@/hooks/useExplorer";
import { Transaction } from "@/types/blockchain";

export default function ExplorerResult() {
  const {
    loading,
    transactions,
  } = useExplorer();

  if (loading) {
    return (
      <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-zinc-400">
        Loading transactions...
      </div>
    );
  }

  if (transactions.length === 0) {
    return (
      <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-zinc-400">
        No transactions found.
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="mb-8 text-2xl font-bold text-white">
        Latest Transactions
      </h2>

      <div className="space-y-4">

        {transactions.map((tx: Transaction) => (

          <div
            key={tx.hash}
            className="rounded-xl border border-zinc-800 bg-black p-5"
          >

            <p className="font-semibold text-white">
              {tx.hash}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}