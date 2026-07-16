import { NextResponse } from "next/server";
import type { BlockscoutTransaction } from "@/types/blockscout";
export async function GET() {
  try {
    const response = await fetch(
      "https://robinhoodchain.blockscout.com/api/v2/addresses/0xd8FB4B5284AD220EE3FE450d8f558eDBf3aA8C4E/transactions",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch transactions");
    }

    const data = await response.json();

    const items = (
  (data.items ?? []) as BlockscoutTransaction[]
).map((tx) => ({
      txHash: tx.hash,
      address: tx.from?.hash ?? "",
      reward: "0",
      paid: tx.value ?? "0",
      timestamp: tx.timestamp,
    }));

    return NextResponse.json({
      items,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      items: [],
    });
  }
}