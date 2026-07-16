"use client";

import { useMemo } from "react";
import { useAccount } from "wagmi";

import useLatestMints from "./useLatestMints";

export default function useMyMints() {
  const { address } = useAccount();

  const { mints, loading } =
    useLatestMints();

  const myMints = useMemo(() => {
    if (!address) return [];

    return mints.filter(
      (mint) =>
        mint.address.toLowerCase() ===
        address.toLowerCase()
    );
  }, [mints, address]);

  const totalReward = myMints.reduce(
    (sum, mint) =>
      sum + BigInt(mint.reward),
    BigInt(0)
  );

  const totalPaid = myMints.reduce(
    (sum, mint) =>
      sum + BigInt(mint.paid),
    BigInt(0)
  );

  return {
    loading,
    myMints,
    totalReward,
    totalPaid,
  };
}