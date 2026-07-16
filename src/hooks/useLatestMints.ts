"use client";

import { useEffect, useState } from "react";

import { getLatestMints } from "@/services/mints";
import type { MintEvent } from "@/types/mint";

export default function useLatestMints() {
  const [mints, setMints] = useState<MintEvent[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      const data = await getLatestMints();

      setMints(data.items ?? []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();

    const interval = setInterval(load, 15000);

    return () => clearInterval(interval);
  }, []);

  return {
    mints,
    loading,
  };
}