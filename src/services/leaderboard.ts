import { getMintEvents } from "./events";
import type { LeaderboardEntry } from "@/types/leaderboard";

export async function getLeaderboard() {
  const logs = await getMintEvents();

  const map = new Map<string, LeaderboardEntry>();

  for (const log of logs) {
    const address = log.args.user?.toLowerCase();

    if (!address) continue;

    const reward = log.args.reward ?? BigInt(0);

    const current = map.get(address);

    if (!current) {
      map.set(address, {
        address,
        totalMinted: reward,
        transactions: 1,
      });

      continue;
    }

    current.totalMinted += reward;
    current.transactions++;
  }

  return [...map.values()].sort(
    (a, b) =>
      Number(b.totalMinted - a.totalMinted)
  );
}