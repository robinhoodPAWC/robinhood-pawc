import { publicClient } from "@/lib/publicClient";

import { mintedEvent } from "@/abi/mintedEvent";

import {
  PAWC_MINTER_ADDRESS,
} from "@/config/contracts";

export async function getMintEvents() {
  const logs =
    await publicClient.getLogs({
      address: PAWC_MINTER_ADDRESS,
      event: mintedEvent,
      fromBlock: BigInt(0),
    });

  return logs.reverse();
}