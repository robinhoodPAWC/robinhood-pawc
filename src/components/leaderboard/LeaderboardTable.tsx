"use client";

import { formatEther } from "viem";

import useLeaderboard from "@/hooks/useLeaderboard";

import { shortenAddress } from "@/lib/format";

export default function LeaderboardTable() {
  const { items, loading } =
    useLeaderboard();

  if (loading) {
    return (
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        Loading leaderboard...
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="mb-8 text-3xl font-bold text-white">
        🏆 Top Minters
      </h2>

      <div className="space-y-4">

        {items.map((item, index) => (
          <div
            key={item.address}
            className="flex items-center justify-between rounded-xl border border-zinc-800 bg-black p-5"
          >
            <div>

              <p className="text-lg font-bold text-lime-400">
                #{index + 1}
              </p>

              <p className="text-white">
                {shortenAddress(item.address)}
              </p>

            </div>

            <div className="text-right">

              <p className="text-lg font-bold text-white">
                {Number(
                  formatEther(
                    item.totalMinted
                  )
                ).toLocaleString()}{" "}
                PAWC
              </p>

              <p className="text-zinc-500">
                {item.transactions} mint
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}