"use client";

import {
  useAccount,
  useBalance,
  useReadContract,
} from "wagmi";

import { formatEther } from "viem";

import { pawcTokenAbi } from "@/abi/pawcToken";
import { PAWC_TOKEN_ADDRESS } from "@/config/contracts";

export default function useWalletDashboard() {
  const { address, chain } = useAccount();

  const eth = useBalance({
    address,
    query: {
      enabled: !!address,
      refetchInterval: 10000,
    },
  });

  const pawc = useReadContract({
    address: PAWC_TOKEN_ADDRESS,
    abi: pawcTokenAbi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
      refetchInterval: 10000,
    },
  });

  return {
    address,

    network: chain?.name,

    ethBalance:
      eth.data?.formatted ?? "0",

    pawcBalance:
      pawc.data
        ? Number(
            formatEther(pawc.data)
          ).toLocaleString()
        : "0",
  };
}