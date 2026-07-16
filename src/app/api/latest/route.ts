import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      wallet: "0x81...b19",
      amount: 1000,
      time: "2 sec ago",
    },
    {
      wallet: "0x72...a91",
      amount: 500,
      time: "8 sec ago",
    },
    {
      wallet: "0x91...e72",
      amount: 2500,
      time: "15 sec ago",
    },
  ]);
}