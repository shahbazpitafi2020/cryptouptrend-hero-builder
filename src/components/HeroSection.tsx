import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={900}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary/80" />

      {/* Content */}
      <div className="container relative z-10 py-24 text-center">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-in-up">
          The Future of Finance
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-secondary-foreground leading-tight max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Track, Trade &amp; Stay Ahead in&nbsp;Crypto
        </h1>
        <p className="mt-6 text-lg text-secondary-foreground/70 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Real-time market data, breaking news, and expert analysis — everything you need to navigate the crypto landscape.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" className="font-bold text-base px-8">
            Explore Markets
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="font-bold text-base px-8 border-primary/50 text-primary hover:bg-primary/10"
          >
            Read Latest News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
