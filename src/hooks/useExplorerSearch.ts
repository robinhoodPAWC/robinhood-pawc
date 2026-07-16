"use client";

import { useMemo, useState } from "react";

import type { MintEvent } from "@/types/mint";

export default function useExplorerSearch(
  mints: MintEvent[]
) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) {
      return mints;
    }

    const keyword = search.toLowerCase();

    return mints.filter((mint) => {
      return (
        mint.address.toLowerCase().includes(keyword) ||
        mint.txHash.toLowerCase().includes(keyword)
      );
    });
  }, [mints, search]);

  return {
    search,
    setSearch,
    filtered,
  };
}