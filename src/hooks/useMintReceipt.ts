"use client";

import { useWaitForTransactionReceipt } from "wagmi";

export default function useMintReceipt(hash?: `0x${string}`) {
  return useWaitForTransactionReceipt({
    hash,
  });
}