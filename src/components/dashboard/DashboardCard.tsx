"use client";

import { formatEther } from "viem";

type Props = {
  title: string;
  value?: bigint;
  type?: "token" | "eth" | "number";
};

export default function DashboardCard({
  title,
  value,
  type = "token",
}: Props) {
  function displayValue() {
    if (value === undefined) {
      return "Loading...";
    }

    switch (type) {
      case "eth":
        return `${formatEther(value)} ETH`;

      case "number":
        return Number(value).toLocaleString();

      case "token":
      default:
        return `${Number(formatEther(value)).toLocaleString()} PAWC`;
    }
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-sm text-zinc-400">
        {title}
      </p>

      <h2 className="mt-4 text-3xl font-bold text-lime-400">
        {displayValue()}
      </h2>
    </div>
  );
}