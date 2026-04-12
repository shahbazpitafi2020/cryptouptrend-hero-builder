import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import news4 from "@/assets/news-4.jpg";
import news5 from "@/assets/news-5.jpg";

const bitcoinArticles = [
  {
    image: news1,
    title: "Bitcoin Surges Past $100K as Institutional Demand Hits Record Levels",
    excerpt: "Major financial institutions are pouring billions into Bitcoin, driving the price to new all-time highs as adoption accelerates globally.",
    time: "2 hours ago",
    author: "CryptoUptrend Staff",
  },
  {
    image: news3,
    title: "Crypto Bull Run Signals: Key Indicators Pointing Upward",
    time: "6 hours ago",
    author: "Market Analyst",
  },
  {
    image: news2,
    title: "Ethereum L2 Ecosystem Reaches $50B in Total Value Locked",
    time: "8 hours ago",
    author: "DeFi Desk",
  },
  {
    image: news4,
    title: "Top 5 Altcoins Set for Massive Gains This Quarter",
    time: "1 day ago",
    author: "Altcoin Watch",
  },
];

const popularArticles = [
  { title: "Bitcoin Surges Past $100K as Institutional Demand Hits Record Levels", time: "2h ago", image: news1 },
  { title: "Ethereum L2 Ecosystem Reaches $50B in Total Value Locked", time: "4h ago", image: news2 },
  { title: "Top 5 Altcoins Set for Massive Gains This Quarter", time: "8h ago", image: news4 },
  { title: "AI-Powered DeFi Protocols Are Changing the Game", time: "1d ago", image: news5 },
  { title: "Crypto Bull Run Signals: Key Indicators Pointing Upward", time: "1d ago", image: news3 },
];

const NewsSection = () => {
  return (
    <section className="container py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Bitcoin News */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-lg font-bold text-foreground">₿ Bitcoin News</h2>
            <span className="text-xs text-muted-foreground">— Bitcoin News</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured article */}
            <div className="md:col-span-1">
              <a href="#" className="group block">
                <div className="overflow-hidden rounded-lg mb-3">
                  <img
                    src={bitcoinArticles[0].image}
                    alt={bitcoinArticles[0].title}
                    loading="lazy"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    width={800}
                    height={512}
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-1">{bitcoinArticles[0].author} · {bitcoinArticles[0].time}</p>
                <h3 className="font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {bitcoinArticles[0].title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                  {bitcoinArticles[0].excerpt}
                </p>
              </a>
            </div>
            {/* Side list */}
            <div className="flex flex-col gap-4">
              {bitcoinArticles.slice(1).map((article, i) => (
                <a key={i} href="#" className="group flex gap-3">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-20 h-16 rounded object-cover flex-shrink-0"
                    width={80}
                    height={64}
                  />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">{article.time}</p>
                    <h4 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Popular / Recent sidebar */}
        <div>
          <div className="flex items-center gap-4 mb-6 border-b border-border">
            <button className="pb-2 text-sm font-semibold text-primary border-b-2 border-primary">
              Recent
            </button>
            <button className="pb-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
              Popular
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {popularArticles.map((article, i) => (
              <a key={i} href="#" className="group flex gap-3">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-16 h-14 rounded object-cover flex-shrink-0"
                  width={64}
                  height={56}
                />
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{article.time}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
