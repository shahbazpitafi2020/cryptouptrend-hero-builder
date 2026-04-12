import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import news4 from "@/assets/news-4.jpg";
import news5 from "@/assets/news-5.jpg";

const slides = [
  {
    image: news1,
    category: "Bitcoin News",
    title: "God and Bitcoin: Why Christians Are Embracing Cryptocurrency",
    excerpt: "In recent years, an unexpected conversation has emerged at the intersection of faith and finance…",
    time: "42 minutes ago",
  },
  {
    image: news2,
    category: "Bitcoin News",
    title: "Bitcoin Climbs to Three-Week High on US-Iran Ceasefire Plan",
    time: "51 minutes ago",
  },
  {
    image: news3,
    category: "Bitcoin News",
    title: "Bitcoin Bear Market Time Pain Trap Signals Slow Bottom Ahead",
    time: "1 hour ago",
  },
  {
    image: news4,
    category: "Bitcoin News",
    title: "Bitcoin Community Reacts to Iran Crypto Toll Reports",
    time: "1 hour ago",
  },
  {
    image: news5,
    category: "Bitcoin News",
    title: "Brit Denies Being Bitcoin Creator Named by New York Times",
    time: "1 hour ago",
  },
];

const NewsGrid = () => {
  return (
    <section className="container py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-foreground/10">
        {/* Large featured - spans left column on desktop */}
        <a
          href="#"
          className="relative block overflow-hidden md:row-span-2 group min-h-[300px] lg:min-h-[420px]"
        >
          <img
            src={slides[0].image}
            alt={slides[0].title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            width={800}
            height={512}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="inline-block text-xs font-semibold px-2.5 py-1 bg-primary text-primary-foreground">
              {slides[0].category}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="text-xs text-card/70 mb-2">⏱ {slides[0].time}</div>
            <h2 className="text-xl lg:text-2xl font-semibold text-card leading-snug mb-2">
              {slides[0].title}
            </h2>
            {slides[0].excerpt && (
              <p className="text-sm text-card/70 line-clamp-2">{slides[0].excerpt}</p>
            )}
          </div>
        </a>

        {/* Right 4 smaller cards in a 2x2 grid */}
        {slides.slice(1).map((slide, i) => (
          <a
            key={i}
            href="#"
            className="relative block overflow-hidden group min-h-[200px] lg:min-h-[208px]"
          >
            <img
              src={slide.image}
              alt={slide.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              width={800}
              height={512}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="inline-block text-[11px] font-semibold px-2 py-0.5 bg-primary text-primary-foreground">
                {slide.category}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="text-[11px] text-card/70 mb-1.5">⏱ {slide.time}</div>
              <h3 className="text-sm lg:text-[15px] font-semibold text-card leading-snug">
                {slide.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default NewsGrid;
