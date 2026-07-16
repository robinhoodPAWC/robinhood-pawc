import WalletDashboard from "@/components/wallet/WalletDashboard";
import MyMintHistory from "@/components/wallet/MyMintHistory";

export default function WalletPage() {
  return (
    <main className="mx-auto max-w-7xl p-8">
      <WalletDashboard />
      <MyMintHistory />
    </main>
  );
}