import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    minted: 1250000,
    holders: 2451,
    volume: 12800000,
    supply: 72,
  });
}