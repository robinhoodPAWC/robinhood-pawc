"use client";

import {
  useAccount,
  useBalance,
  useChainId,
} from "wagmi";

export default function useWalletInfo() {

  const { address, isConnected } =
    useAccount();

  const chainId =
    useChainId();

  const { data } =
    useBalance({
      address,
    });

  return {

    address,

    isConnected,

    chainId,

    balance:
      data?.formatted,

    symbol:
      data?.symbol,

  };

}