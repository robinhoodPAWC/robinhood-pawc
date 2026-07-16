"use client";

import { useSwitchChain } from "wagmi";

export function useRobinhood() {
  const { switchChain } = useSwitchChain();

  const switchToRobinhood = () => {
    switchChain({
      chainId: 4663,
    });
  };

  return {
    switchToRobinhood,
  };
}