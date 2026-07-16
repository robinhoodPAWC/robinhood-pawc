import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Dashboard from "@/components/dashboard/Dashboard";
import SupplyProgress from "@/components/dashboard/SupplyProgress";
import RecentMints from "@/components/activity/RecentMints";
import PageContainer from "@/components/layout/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <Navbar />
      <Hero />
      <Dashboard />
      <SupplyProgress />
      <RecentMints />
    </PageContainer>
  );
}
