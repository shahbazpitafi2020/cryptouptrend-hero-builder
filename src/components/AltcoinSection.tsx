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
    <section className="container py-10">
      <h2 className="text-lg font-bold text-foreground mb-6">🪙 Altcoin Updates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {articles.map((article, i) => (
          <a key={i} href="#" className="group relative block overflow-hidden rounded-sm">
            <img
              src={article.image}
              alt={article.title}
              loading="lazy"
              className="w-full h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
              width={800}
              height={512}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-primary text-primary-foreground mb-2">
                {article.category}
              </span>
              <p className="text-xs text-muted mb-1">{article.time}</p>
              <h3 className="text-base font-bold text-card leading-snug">
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
