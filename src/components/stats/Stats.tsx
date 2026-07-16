"use client";

import { useEffect, useState } from "react";
import { getStats } from "@/services/api";

type StatsData = {
  minted: number;
  holders: number;
  volume: number;
  supply: number;
};

export default function Stats() {
  const [stats, setStats] = useState<StatsData | null>(null);

  useEffect(() => {
    getStats().then(setStats);
  }, []);

  if (!stats) {
    return (
      <section className="mx-auto mt-12 max-w-6xl px-6">
        <p className="text-zinc-500">Loading statistics...</p>
      </section>
    );
  }

  const cards = [
    {
      title: "Minted",
      value: stats.minted.toLocaleString(),
    },
    {
      title: "Holders",
      value: stats.holders.toLocaleString(),
    },
    {
      title: "Supply",
      value: `${stats.supply}%`,
    },
    {
      title: "Volume",
      value: stats.volume.toLocaleString(),
    },
  ];

  return (
    <section className="mx-auto mt-12 grid max-w-6xl gap-6 px-6 md:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
        >
          <p className="text-zinc-500">{card.title}</p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {card.value}
          </h2>
        </div>
      ))}
    </section>
  );
}