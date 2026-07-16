"use client";

import DashboardCard from "./DashboardCard";
import useDashboard from "@/hooks/useDashboard";

export default function Dashboard() {
  const {
    remainingSupply,
    mintPrice,
    rewardPerUnit,
    totalMinted,
    totalTransactions,
    totalEthCollected,
  } = useDashboard();

  return (
    <section className="mx-auto mt-20 grid max-w-7xl gap-6 px-6 md:grid-cols-3">
      <DashboardCard
        title="Remaining Supply"
        value={remainingSupply}
        type="token"
      />

      <DashboardCard
        title="Mint Price"
        value={mintPrice}
        type="eth"
      />

      <DashboardCard
        title="Reward"
        value={rewardPerUnit}
        type="token"
      />

      <DashboardCard
        title="Total Minted"
        value={totalMinted}
        type="token"
      />

      <DashboardCard
        title="Transactions"
        value={totalTransactions}
        type="number"
      />

      <DashboardCard
        title="ETH Collected"
        value={totalEthCollected}
        type="eth"
      />
    </section>
  );
}