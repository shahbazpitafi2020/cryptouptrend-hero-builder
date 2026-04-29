import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import { AdSlot } from "@/components/site/AdSlot";
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

      {/* Top banner — above the fold, mobile-only (desktop has header leaderboard) */}
      <div className="container-cu">
        <AdSlot format="mobile-banner" slotId="top-mobile" mobileOnly />
      </div>

      <main className="flex-1">
        <h1 className="sr-only">CryptoUptrend — Crypto News, Market Data & Web3 Insights</h1>
        <Hero />

        {/* Below hero — billboard between major sections */}
        <div className="container-cu">
          <AdSlot format="billboard" slotId="below-hero" />
        </div>

        {/* Desktop: sidebar layout with skyscraper ad alongside markets */}
        <div className="container-cu lg:grid lg:grid-cols-[1fr_300px] lg:gap-6">
          <div className="min-w-0">
            <Suspense fallback={<SectionFallback />}>
              <MarketTable />
            </Suspense>
          </div>
          <aside className="hidden lg:block pt-10">
            <div className="sticky top-16">
              <AdSlot format="skyscraper" slotId="sidebar-markets" desktopOnly />
            </div>
          </aside>
        </div>

        {/* In-content ad between sections */}
        <div className="container-cu">
          <AdSlot format="in-article" slotId="mid-content" />
        </div>

        <Suspense fallback={<SectionFallback />}>
          <NewsGrid />
        </Suspense>

        {/* Footer ad */}
        <div className="container-cu">
          <AdSlot format="footer" slotId="pre-footer" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

