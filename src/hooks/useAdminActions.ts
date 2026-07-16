"use client";

import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";

import {
  PAWC_MINTER_ADDRESS,
} from "@/config/contracts";

import {
  pawcMinterAbi,
} from "@/abi/pawcMinter";

export default function useAdminActions() {
  const {
    data: hash,
    writeContract,
    isPending,
  } = useWriteContract();

  const receipt = useWaitForTransactionReceipt({
    hash,
  });

  function pause() {
    writeContract({
      address: PAWC_MINTER_ADDRESS,
      abi: pawcMinterAbi,
      functionName: "pause",
    });
  }
  

  function unpause() {
    writeContract({
      address: PAWC_MINTER_ADDRESS,
      abi: pawcMinterAbi,
      functionName: "unpause",
    });
  }

  function withdraw() {
    writeContract({
      address: PAWC_MINTER_ADDRESS,
      abi: pawcMinterAbi,
      functionName: "withdraw",
    });
  }

  return {
    pause,
    unpause,
    withdraw,

    hash,

    isPending,

    isConfirming: receipt.isLoading,

    isConfirmed: receipt.isSuccess,
  };
}