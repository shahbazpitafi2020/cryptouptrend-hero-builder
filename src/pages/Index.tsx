import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { MarketTable } from "@/components/site/MarketTable";
import { NewsGrid } from "@/components/site/NewsGrid";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <h1 className="sr-only">CryptoUptrend — Crypto News, Market Data & Web3 Insights</h1>
        <Hero />
        <MarketTable />
        <NewsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
