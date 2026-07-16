"use client";

import { useMemo } from "react";
import { useReadContract } from "wagmi";

import {
  PAWC_MINTER_ADDRESS,
} from "@/config/contracts";

import {
  pawcMinterAbi,
} from "@/abi/pawcMinter";

const MAX_SUPPLY = BigInt(1_000_000_000) * (BigInt(10) ** BigInt(18));

export default function useSupply() {
  const remaining = useReadContract({
    address: PAWC_MINTER_ADDRESS,
    abi: pawcMinterAbi,
    functionName: "remainingSupply",
    query: {
      refetchInterval: 10000,
    },
  });

  const data = useMemo(() => {
    const remainingSupply =
      remaining.data ?? MAX_SUPPLY;

    const minted =
      MAX_SUPPLY - remainingSupply;

    const percentage =
      Number(minted / (BigInt(10) ** BigInt(14))) / 10000;

    return {
      remainingSupply,
      minted,
      percentage,
    };
  }, [remaining.data]);

  return data;
}