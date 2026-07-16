import { NextResponse } from "next/server";

import { getLeaderboard } from "@/services/leaderboard";

export async function GET() {
  try {
    const leaderboard =
      await getLeaderboard();

    return NextResponse.json({
      items: leaderboard,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      items: [],
    });
  }
}