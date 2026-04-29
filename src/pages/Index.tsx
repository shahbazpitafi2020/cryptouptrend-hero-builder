import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import { lazy, Suspense } from "react";

// Below-the-fold: lazy-load to shrink initial bundle and speed up LCP
const MarketTable = lazy(() =>
  import("@/components/site/MarketTable").then((m) => ({ default: m.MarketTable }))
);
const NewsGrid = lazy(() =>
  import("@/components/site/NewsGrid").then((m) => ({ default: m.NewsGrid }))
);

const SectionFallback = () => (
  <div className="container-cu py-10">
    <div className="h-6 w-48 bg-muted rounded animate-pulse mb-5" />
    <div className="h-64 bg-muted/50 rounded animate-pulse" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <h1 className="sr-only">CryptoUptrend — Crypto News, Market Data & Web3 Insights</h1>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <MarketTable />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <NewsGrid />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
