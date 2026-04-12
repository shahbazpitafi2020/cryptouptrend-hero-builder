import news4 from "@/assets/news-4.jpg";
import news5 from "@/assets/news-5.jpg";

const articles = [
  {
    image: news4,
    category: "Altcoin Update",
    title: "Tether Gold Reserve Switzerland: Massive Crypto Backing Revealed",
    time: "January 5, 2026",
  },
  {
    image: news5,
    category: "Altcoin Update",
    title: "Bitcoin Rises From One-Month Low: Crypto Markets Today",
    time: "January 4, 2026",
  },
];

const AltcoinSection = () => {
  return (
    <section id="altcoin-updates" className="container py-6">
      <h2 className="text-base font-semibold text-section-title mb-1 flex items-center gap-1.5">
        <span className="text-lg">🪙</span> Altcoin Updates
      </h2>
      <div className="w-[120px] h-[3px] bg-section-title mb-5" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
        {articles.map((article, i) => (
          <a key={i} href="#" className="relative block overflow-hidden group min-h-[260px]">
            <img
              src={article.image}
              alt={article.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              width={800}
              height={512}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="inline-block text-[11px] font-semibold px-2 py-0.5 bg-primary text-primary-foreground">
                {article.category}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="text-[11px] text-card/70 mb-1.5">{article.time}</div>
              <h3 className="text-base font-semibold text-card leading-snug">
                {article.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default AltcoinSection;
