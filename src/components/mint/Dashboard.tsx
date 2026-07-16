import WalletDashboard from "@/components/dashboard/WalletDashboard";
import MintCard from "./MintCard";
import LatestMint from "./LatestMint";

export default function Dashboard() {
  return (
    <section className="mt-16 grid gap-8 lg:grid-cols-3">

      <WalletDashboard />

      <MintCard />

      <LatestMint />

    </section>
  );
}