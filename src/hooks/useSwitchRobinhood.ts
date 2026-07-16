"use client";

import { useSwitchChain } from "wagmi";

export default function useSwitchRobinhood() {
  const { switchChainAsync, isPending } = useSwitchChain();

  const switchNetwork = async () => {
    try {
      await switchChainAsync({
        chainId: 4663,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    switchNetwork,
    isPending,
  };
}