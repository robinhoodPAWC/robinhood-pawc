"use client";

import "@rainbow-me/rainbowkit/styles.css";

import { ReactNode } from "react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  WagmiProvider,
} from "wagmi";

import { config } from "@/config/wagmi";

const queryClient = new QueryClient();

type Props = {
  children: ReactNode;
};

export default function Web3Provider({
  children,
}: Props) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}