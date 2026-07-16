"use client";

import { useReadContract } from "wagmi";

import { pawcMinterAbi } from "@/abi/pawcMinter";
import { PAWC_MINTER_ADDRESS } from "@/config/contracts";

export default function useMintPrice() {
  const { data, isLoading } = useReadContract({
    address: PAWC_MINTER_ADDRESS,
    abi: pawcMinterAbi,
    functionName: "mintPrice",
  });

  return {
    mintPrice: data,
    isLoading,
  };
}