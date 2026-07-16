"use client";

import { useSwitchChain } from "wagmi";

export function useRobinhoodNetwork() {
  const {
    switchChain,
  } = useSwitchChain();

  return () => {
    switchChain({
      chainId: 4663,
    });
  };
}