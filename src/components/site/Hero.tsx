import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const featured = {
  category: "Bitcoin News",
  title: "God and Bitcoin: Why Christians Are Embracing Cryptocurrency",
  excerpt:
    "An unexpected conversation has emerged at the intersection of faith and finance — exploring why a growing community sees BTC as more than money.",
  meta: "1 day ago · 5 min read",
};

const sideStories = [
  {
    cat: "Bitcoin News",
    title: "Bitcoin Climbs to Three-Week High on US-Iran Ceasefire Plan",
    color: "bg-cat-bitcoin",
  },
  {
    cat: "Markets",
    title: "Bitcoin Bear Market Time Pain Trap Signals Slow Bottom Ahead",
    color: "bg-cat-news",
  },
  {
    cat: "Community",
    title: "Bitcoin Community Reacts to Iran Crypto Toll Reports",
    color: "bg-cat-altcoin",
  },
  {
    cat: "Web3",
    title: "Brit Denies Being Bitcoin Creator Named by New York Times",
    color: "bg-cat-ai",
  },
];

export const Hero = () => {
  return (
    <section className="container-cu pt-6 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Featured story (large) */}
        <article className="lg:col-span-2 relative overflow-hidden rounded-md bg-card group cursor-pointer">
          <div className="relative aspect-[16/10] bg-gradient-to-br from-[hsl(220,40%,15%)] via-[hsl(210,71%,25%)] to-[hsl(28,90%,45%)]">
            {/* Decorative glow */}
            <div className="absolute inset-0 opacity-60 mix-blend-screen bg-[radial-gradient(circle_at_70%_60%,hsl(28,90%,55%),transparent_55%)]" />
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_30%,hsl(210,80%,50%),transparent_50%)]" />

            <span className="absolute top-4 left-4 z-10 inline-flex items-center px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground bg-primary rounded-sm">
              {featured.category}
            </span>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white">
              <p className="text-xs font-medium opacity-80 mb-2">{featured.meta}</p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight mb-3 group-hover:text-primary transition-colors">
                {featured.title}
              </h1>
              <p className="text-sm sm:text-base text-white/85 max-w-2xl mb-5 line-clamp-2">
                {featured.excerpt}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="sm" className="h-10 px-5 font-semibold rounded-sm">
                  Read Article <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-10 px-5 font-semibold rounded-sm bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
                >
                  <Play className="h-4 w-4" /> Watch Recap
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Side grid (4 small) */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
          {sideStories.slice(0, 2).map((s, i) => (
            <SideCard key={i} {...s} />
          ))}
        </div>
      </div>

      {/* Lower row of 2 more side stories on wide screens */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {sideStories.slice(2).map((s, i) => (
          <SideCard key={i} {...s} compact />
        ))}
        <SideCard
          cat="Altcoin"
          title="Tether Gold Reserve Switzerland: Massive Crypto Backing Revealed"
          color="bg-cat-altcoin"
          compact
        />
        <SideCard
          cat="Markets"
          title="Bitcoin Rises From One-Month Low: Crypto Markets Today"
          color="bg-cat-bitcoin"
          compact
        />
      </div>
    </section>
  );
};

const SideCard = ({
  cat,
  title,
  color,
  compact = false,
}: {
  cat: string;
  title: string;
  color: string;
  compact?: boolean;
}) => (
  <article className="relative overflow-hidden rounded-md bg-card group cursor-pointer">
    <div
      className={`relative ${
        compact ? "aspect-[16/10]" : "aspect-[4/3]"
      } bg-gradient-to-br from-[hsl(220,30%,18%)] to-[hsl(210,60%,30%)]`}
    >
      <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_60%_40%,hsl(210,80%,50%),transparent_60%)]" />
      <span
        className={`absolute top-3 left-3 z-10 inline-flex items-center px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white rounded-sm ${color}`}
      >
        {cat}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
        <h3 className="text-sm sm:text-base font-bold text-white leading-snug line-clamp-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </div>
  </article>
);
