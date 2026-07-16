import { NextResponse } from "next/server";

import { getMintEvents } from "@/services/events";

export async function GET() {
  try {
    const logs =
      await getMintEvents();

    const items = logs.map((log) => ({
      txHash:
        log.transactionHash,

      address:
        log.args.user,

      quantity:
        log.args.quantity?.toString() ?? "0",

      reward:
        log.args.reward?.toString() ?? "0",

      paid:
        log.args.paid?.toString() ?? "0",
    }));

    return NextResponse.json({
      items,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json({
      items: [],
    });
  }
}