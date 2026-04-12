import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import news4 from "@/assets/news-4.jpg";
import news5 from "@/assets/news-5.jpg";

const featured = [
  {
    image: news1,
    category: "Bitcoin News",
    title: "Bitcoin Surges Past $100K as Institutional Demand Hits Record Levels",
    time: "2 hours ago",
  },
  {
    image: news2,
    category: "Ethereum",
    title: "Ethereum L2 Ecosystem Reaches $50B in Total Value Locked",
    time: "4 hours ago",
  },
  {
    image: news3,
    category: "Markets",
    title: "Crypto Bull Run Signals: Key Indicators Pointing Upward",
    time: "6 hours ago",
  },
  {
    image: news4,
    category: "Altcoin Updates",
    title: "Top 5 Altcoins Set for Massive Gains This Quarter",
    time: "8 hours ago",
  },
  {
    image: news5,
    category: "AI & Web3",
    title: "AI-Powered DeFi Protocols Are Changing the Game",
    time: "1 day ago",
  },
];

const FeaturedNews = () => {
  return (
    <section id="news" className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {/* Main featured */}
        <a href="#" className="md:col-span-1 md:row-span-2 group relative block overflow-hidden rounded-sm">
          <img
            src={featured[0].image}
            alt={featured[0].title}
            loading="lazy"
            className="w-full h-full min-h-[300px] md:min-h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
            width={800}
            height={512}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <span className="inline-block text-xs font-semibold px-2 py-1 rounded bg-primary text-primary-foreground mb-2">
              {featured[0].category}
            </span>
            <p className="text-xs text-muted mb-1">{featured[0].time}</p>
            <h3 className="text-lg font-bold text-card leading-snug">
              {featured[0].title}
            </h3>
          </div>
        </a>

        {/* Right grid: 2x2 */}
        {featured.slice(1).map((item, i) => (
          <a
            key={i}
            href="#"
            className="group relative block overflow-hidden rounded-sm"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-[200px] md:h-[208px] object-cover group-hover:scale-105 transition-transform duration-500"
              width={800}
              height={512}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-primary text-primary-foreground mb-1">
                {item.category}
              </span>
              <p className="text-xs text-muted mb-0.5">{item.time}</p>
              <h3 className="text-sm font-bold text-card leading-snug">
                {item.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedNews;
