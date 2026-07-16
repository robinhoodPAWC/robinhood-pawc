"use client";

import { useAccount, useReadContract } from "wagmi";

import {
  PAWC_MINTER_ADDRESS,
} from "@/config/contracts";

import {
  pawcMinterAbi,
} from "@/abi/pawcMinter";

export default function useAdmin() {
  const { address } = useAccount();

  const owner = useReadContract({
    address: PAWC_MINTER_ADDRESS,
    abi: pawcMinterAbi,
    functionName: "owner",
  });

  const paused = useReadContract({
    address: PAWC_MINTER_ADDRESS,
    abi: pawcMinterAbi,
    functionName: "paused",
  });

  const mintPrice = useReadContract({
    address: PAWC_MINTER_ADDRESS,
    abi: pawcMinterAbi,
    functionName: "mintPrice",
  });

  const reward = useReadContract({
    address: PAWC_MINTER_ADDRESS,
    abi: pawcMinterAbi,
    functionName: "rewardPerUnit",
  });

  const totalMinted = useReadContract({
    address: PAWC_MINTER_ADDRESS,
    abi: pawcMinterAbi,
    functionName: "totalMinted",
  });

  const totalTransactions = useReadContract({
    address: PAWC_MINTER_ADDRESS,
    abi: pawcMinterAbi,
    functionName: "totalTransactions",
  });

  const totalEthCollected = useReadContract({
    address: PAWC_MINTER_ADDRESS,
    abi: pawcMinterAbi,
    functionName: "totalEthCollected",
  });

  const isOwner =
    !!address &&
    !!owner.data &&
    address.toLowerCase() === owner.data.toLowerCase();

  return {
  isOwner,

  owner: owner.data,

  paused: paused.data,

  mintPrice: mintPrice.data,

  reward: reward.data,

  totalMinted: totalMinted.data,

  totalTransactions: totalTransactions.data,

  totalEthCollected: totalEthCollected.data,

  refetchAll: () => {
    owner.refetch();
    paused.refetch();
    mintPrice.refetch();
    reward.refetch();
    totalMinted.refetch();
    totalTransactions.refetch();
    totalEthCollected.refetch();
  },
};
}