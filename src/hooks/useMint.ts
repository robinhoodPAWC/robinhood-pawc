"use client";

import { useWriteContract } from "wagmi";

import { pawcMinterAbi } from "@/abi/pawcMinter";
import { PAWC_MINTER_ADDRESS } from "@/config/contracts";

export default function useMint() {
  const {
    writeContractAsync,
    data: hash,
    error,
    isPending,
  } = useWriteContract();

  async function mint(
    quantity: bigint,
    value: bigint
  ) {
    return await writeContractAsync({
      address: PAWC_MINTER_ADDRESS,
      abi: pawcMinterAbi,
      functionName: "mint",
      args: [quantity],
      value,
    });
  }

  return {
    mint,
    hash,
    error,
    isPending,
  };
}