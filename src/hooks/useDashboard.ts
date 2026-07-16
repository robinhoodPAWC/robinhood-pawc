"use client";

import { useReadContracts } from "wagmi";

import { pawcMinterAbi } from "@/abi/pawcMinter";
import { PAWC_MINTER_ADDRESS } from "@/config/contracts";

export default function useDashboard() {
  const { data, isLoading, refetch } =
    useReadContracts({
      contracts: [
        {
          address: PAWC_MINTER_ADDRESS,
          abi: pawcMinterAbi,
          functionName: "remainingSupply",
        },
        {
          address: PAWC_MINTER_ADDRESS,
          abi: pawcMinterAbi,
          functionName: "mintPrice",
        },
        {
          address: PAWC_MINTER_ADDRESS,
          abi: pawcMinterAbi,
          functionName: "rewardPerUnit",
        },
        {
          address: PAWC_MINTER_ADDRESS,
          abi: pawcMinterAbi,
          functionName: "totalMinted",
        },
        {
          address: PAWC_MINTER_ADDRESS,
          abi: pawcMinterAbi,
          functionName: "totalTransactions",
        },
        {
          address: PAWC_MINTER_ADDRESS,
          abi: pawcMinterAbi,
          functionName: "totalEthCollected",
        },
      ],
      query: {
  refetchInterval: 15000,
},
    });

  return {
    remainingSupply: data?.[0]?.result,
    mintPrice: data?.[1]?.result,
    rewardPerUnit: data?.[2]?.result,
    totalMinted: data?.[3]?.result,
    totalTransactions: data?.[4]?.result,
    totalEthCollected: data?.[5]?.result,
    isLoading,
    refetch,
  };
}