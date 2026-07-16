"use client";

import { formatEther } from "viem";

import useSupply from "@/hooks/useSupply";

export default function SupplyProgress() {
  const {
    minted,
    remainingSupply,
    percentage,
  } = useSupply();

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Mint Progress
      </h2>

      <div className="h-5 overflow-hidden rounded-full bg-zinc-800">

        <div
          className="h-full rounded-full bg-lime-400 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <div className="mt-8 space-y-3">

        <div className="flex justify-between">

          <span className="text-zinc-500">
            Minted
          </span>

          <span className="text-white">
            {Number(
              formatEther(minted)
            ).toLocaleString()}{" "}
            PAWC
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-zinc-500">
            Remaining
          </span>

          <span className="text-white">
            {Number(
              formatEther(
                remainingSupply
              )
            ).toLocaleString()}{" "}
            PAWC
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-zinc-500">
            Progress
          </span>

          <span className="font-bold text-lime-400">
            {percentage.toFixed(4)}%
          </span>

        </div>

      </div>

    </div>
  );
}