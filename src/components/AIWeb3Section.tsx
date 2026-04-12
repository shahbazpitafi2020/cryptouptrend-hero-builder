import { ChevronLeft, ChevronRight } from "lucide-react";
import news5 from "@/assets/news-5.jpg";
import news3 from "@/assets/news-3.jpg";
import news2 from "@/assets/news-2.jpg";

const featured = {
  image: news5,
  category: "AI & Web3",
  author: "cryptoUptrend Staff",
  time: "January 3, 2026",
  title: "Tom Lee Bitcoin Ethereum Predictions Hit $250K — Bullish Crypto Forecast",
  excerpt:
    "Tom Lee's Bitcoin and Ethereum predictions have taken an even more optimistic turn, with the market analyst raising his Bitcoin price target significantly, suggesting the cryptocurrency market could...",
};

const sideArticles = [
  { image: news3, title: "Cloudflare Orange Web3 Resilience: Vitaly's Urgent Warning", time: "January 5, 2026", category: "AI & Web3" },
  { image: news2, title: "5 Best Web3 Coins to Buy in January 2026 | Top Picks", time: "January 3, 2026", category: "AI & Web3" },
  { image: news5, title: "How to Build AI Agents on Solana Step-by-Step Guide 2026", time: "October 1, 2025", category: "AI & Web3" },
];

const mostViewed = [
  { num: 1, title: "House Democrats Propose Ban on Politicians Buying Meme Coins", image: news3 },
  { num: 2, title: "5 Best Meme Coins to Buy in January 2026", image: news2 },
  { num: 3, title: "Trump Coin and Meme Token Frenzy: Crypto Winter by Once Bitten", image: news5 },
  { num: 4, title: "Bitcoin Price Prediction: $250K Looming Bull Target", image: news3 },
];

const AIWeb3Section = () => {
  return (
    <section id="ai-web3" className="container py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left content */}
        <div className="lg:col-span-2">
          <div className="bg-card shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <h2 className="text-base font-semibold text-section-title flex items-center gap-1.5">
                <span className="text-lg">🤖</span> AI & Web3
              </h2>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground cursor-pointer">AI & Web3</span>
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
            <div className="px-5">
              <div className="w-[80px] h-[3px] bg-section-title" />
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
              <div>
                <a href="#" className="group block">
                  <div className="relative overflow-hidden mb-3">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      loading="lazy"
                      className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                      width={800}
                      height={512}
                    />
                    <div className="absolute bottom-3 right-3">
                      <span className="text-[11px] font-semibold px-2 py-0.5 bg-primary text-primary-foreground">
                        {featured.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-[11px] text-muted-foreground mb-1.5">
                    {featured.author} · ⏱ {featured.time}
                  </div>
                  <h3 className="text-[15px] font-semibold text-foreground leading-snug group-hover:text-primary transition-colors mb-2">
                    {featured.title}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-3">
                    {featured.excerpt}
                  </p>
                </a>
              </div>
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
                      <div className="text-[11px] text-muted-foreground mb-1">{article.category} · ⏱ {article.time}</div>
                      <h4 className="text-[13px] font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Most Viewed sidebar */}
        <div>
          <div className="bg-card shadow-sm">
            <div className="border-b border-border px-5 py-3">
              <h3 className="text-base font-semibold text-foreground">Most Viewed</h3>
            </div>
            <div className="p-4 flex flex-col gap-4">
              {mostViewed.map((item) => (
                <a key={item.num} href="#" className="group flex gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {item.num}
                  </span>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-[50px] h-[50px] object-cover flex-shrink-0"
                    width={50}
                    height={50}
                  />
                  <h4 className="text-[12px] font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-3 min-w-0">
                    {item.title}
                  </h4>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWeb3Section;
