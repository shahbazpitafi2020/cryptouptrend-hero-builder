import { ChevronLeft, ChevronRight } from "lucide-react";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import news4 from "@/assets/news-4.jpg";
import news5 from "@/assets/news-5.jpg";

const featured = {
  image: news1,
  category: "Bitcoin News",
  author: "cryptoUptrend Staff",
  time: "42 minutes ago",
  views: 158,
  title: "God and Bitcoin: Why Christians Are Embracing Cryptocurrency",
  excerpt:
    "In recent years, an unexpected conversation has emerged at the intersection of faith and finance. God and Bitcoin: why some Christians are using crypto as an expression of their beliefs, supporting missions, and envisioning a financial system aligned to...",
};

const sideArticles = [
  { image: news2, title: "Bitcoin Climbs to Three-Week High on US-Iran Ceasefire Plan", time: "51 minutes ago" },
  { image: news3, title: "Bitcoin Bear Market Time Pain Trap Signals Slow Bottom Ahead", time: "1 hour ago" },
  { image: news4, title: "Bitcoin Community Reacts to Iran Crypto Toll Reports", time: "1 hour ago" },
  { image: news5, title: "Brit Denies Being Bitcoin Creator Named by New York Times", time: "1 hour ago" },
];

const BitcoinNewsSection = () => {
  return (
    <section id="bitcoin-news" className="container py-6">
      <div className="bg-card shadow-sm">
        {/* Section header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-semibold text-section-title flex items-center gap-1.5">
              <span className="text-lg">₿</span> Bitcoin News
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span className="text-primary font-medium cursor-pointer">All</span>
              <span className="mx-1">·</span>
              <span className="cursor-pointer hover:text-primary transition-colors">Bitcoin News</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="w-6 h-6 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground transition-colors">
                <ChevronLeft size={14} />
              </button>
              <button className="w-6 h-6 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground transition-colors">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Section title underline accent */}
        <div className="px-5">
          <div className="w-[120px] h-[3px] bg-section-title" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
          {/* Featured article */}
          <div>
            <a href="#" className="group block">
              <div className="relative overflow-hidden mb-3">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                  width={800}
                  height={512}
                />
                <div className="absolute bottom-3 right-3">
                  <span className="text-[11px] font-semibold px-2 py-0.5 bg-primary text-primary-foreground">
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-muted-foreground mb-2">
                <span>{featured.author}</span>
                <span>⏱ {featured.time}</span>
                <span>👁 {featured.views}</span>
              </div>
              <h3 className="text-[15px] font-semibold text-foreground leading-snug group-hover:text-primary transition-colors mb-2">
                {featured.title}
              </h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-3">
                {featured.excerpt}
              </p>
            </a>
            <a
              href="#"
              className="inline-block mt-4 text-xs font-semibold uppercase text-primary-foreground bg-primary px-4 py-2 hover:opacity-90 transition-opacity"
            >
              Read More »
            </a>
          </div>

          {/* Side list */}
          <div className="flex flex-col gap-4">
            {sideArticles.map((article, i) => (
              <a key={i} href="#" className="group flex gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-[100px] h-[70px] object-cover flex-shrink-0"
                  width={100}
                  height={70}
                />
                <div className="min-w-0">
                  <div className="text-[11px] text-muted-foreground mb-1">⏱ {article.time}</div>
                  <h4 className="text-[13px] font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BitcoinNewsSection;
