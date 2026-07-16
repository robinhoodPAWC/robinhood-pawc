import { createPublicClient, http, type Chain } from "viem";

import * as chains from "@/config/chains";

type Chains = {
  robinhood?: Chain;
  default: Chain;
};

const typedChains = chains as unknown as Chains;

export const publicClient = createPublicClient({
  // support both named export `robinhood` and a default/other export shape
  chain: typedChains.robinhood ?? typedChains.default,
  transport: http(
    process.env.NEXT_PUBLIC_RPC_URL
  ),
});