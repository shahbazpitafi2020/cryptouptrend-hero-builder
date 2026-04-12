import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedNews from "@/components/FeaturedNews";
import MarketTable from "@/components/MarketTable";
import NewsSection from "@/components/NewsSection";
import AltcoinSection from "@/components/AltcoinSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedNews />
      <MarketTable />
      <NewsSection />
      <AltcoinSection />
      <Footer />
    </div>
  );
};

export default Index;
