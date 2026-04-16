import { Clock, MessageCircle, Eye } from "lucide-react";
import { SectionHeader } from "./MarketTable";

type Article = {
  cat: string;
  catColor: string;
  title: string;
  excerpt: string;
  date: string;
  comments: number;
  views: string;
  gradient: string;
};

const bitcoinNews: Article[] = [
  {
    cat: "Bitcoin News",
    catColor: "bg-cat-bitcoin",
    title: "God and Bitcoin: Why Christians Are Embracing Cryptocurrency",
    excerpt: "An unexpected conversation has emerged at the intersection of faith and finance.",
    date: "1 day ago",
    comments: 12,
    views: "2.3k",
    gradient: "from-[hsl(28,90%,45%)] to-[hsl(220,40%,15%)]",
  },
  {
    cat: "Bitcoin News",
    catColor: "bg-cat-bitcoin",
    title: "Bitcoin Climbs to Three-Week High on US-Iran Ceasefire Plan",
    excerpt: "BTC surges past resistance levels as geopolitical tensions ease across the Middle East.",
    date: "1 day ago",
    comments: 8,
    views: "1.8k",
    gradient: "from-[hsl(210,71%,40%)] to-[hsl(220,40%,15%)]",
  },
  {
    cat: "Markets",
    catColor: "bg-cat-news",
    title: "Bitcoin Bear Market Pain Trap Signals Slow Bottom Ahead",
    excerpt: "On-chain analysts warn of an extended consolidation period for the leading cryptocurrency.",
    date: "2 days ago",
    comments: 24,
    views: "3.1k",
    gradient: "from-[hsl(0,70%,40%)] to-[hsl(220,40%,15%)]",
  },
  {
    cat: "Community",
    catColor: "bg-cat-altcoin",
    title: "Bitcoin Community Reacts to Iran Crypto Toll Reports",
    excerpt: "Industry leaders weigh in on the latest regulatory developments shaping global adoption.",
    date: "2 days ago",
    comments: 16,
    views: "1.4k",
    gradient: "from-[hsl(145,60%,30%)] to-[hsl(220,40%,15%)]",
  },
];

const altcoinNews: Article[] = [
  {
    cat: "Altcoin",
    catColor: "bg-cat-altcoin",
    title: "Tether Gold Reserve Switzerland: Massive Crypto Backing Revealed",
    excerpt: "USDT issuer reveals new gold reserves stored in secure Swiss vaults backing its stablecoin.",
    date: "3 days ago",
    comments: 19,
    views: "2.8k",
    gradient: "from-[hsl(45,80%,45%)] to-[hsl(220,40%,15%)]",
  },
  {
    cat: "Altcoin",
    catColor: "bg-cat-altcoin",
    title: "Solana Hits New ATH as DeFi TVL Crosses $8 Billion Milestone",
    excerpt: "SOL ecosystem expansion accelerates with growing institutional and retail participation.",
    date: "3 days ago",
    comments: 31,
    views: "4.2k",
    gradient: "from-[hsl(280,60%,45%)] to-[hsl(220,40%,15%)]",
  },
];

const aiNews: Article[] = [
  {
    cat: "AI & Web3",
    catColor: "bg-cat-ai",
    title: "Tom Lee Bitcoin Ethereum Predictions Hit $250K — Bullish Crypto Forecast",
    excerpt: "Renowned analyst shares ambitious year-end targets backed by on-chain momentum.",
    date: "4 days ago",
    comments: 42,
    views: "5.6k",
    gradient: "from-[hsl(280,60%,45%)] to-[hsl(210,71%,30%)]",
  },
  {
    cat: "AI & Web3",
    catColor: "bg-cat-ai",
    title: "How to Build AI Agents on Web3: Step-by-Step Guide 2025",
    excerpt: "A complete walkthrough for developers building autonomous agents on decentralized rails.",
    date: "5 days ago",
    comments: 28,
    views: "3.9k",
    gradient: "from-[hsl(310,55%,45%)] to-[hsl(220,40%,15%)]",
  },
];

export const NewsGrid = () => {
  return (
    <section id="news" className="container-cu py-10 space-y-12">
      <NewsBlock title="Bitcoin News" accent="bg-cat-bitcoin" articles={bitcoinNews} />
      <NewsBlock title="Altcoin Updates" accent="bg-cat-altcoin" articles={altcoinNews} columns={2} />
      <NewsBlock title="AI & Web3" accent="bg-cat-ai" articles={aiNews} columns={2} />
    </section>
  );
};

const NewsBlock = ({
  title,
  accent,
  articles,
  columns = 4,
}: {
  title: string;
  accent: string;
  articles: Article[];
  columns?: 2 | 4;
}) => (
  <div>
    <SectionHeader title={title} accent={accent} />
    <div
      className={`grid gap-5 ${
        columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      }`}
    >
      {articles.map((a, i) => (
        <ArticleCard key={i} article={a} large={columns === 2} />
      ))}
    </div>
  </div>
);

const ArticleCard = ({ article, large = false }: { article: Article; large?: boolean }) => (
  <article className="bg-card rounded-md overflow-hidden border border-border hover:shadow-lg transition-shadow group cursor-pointer flex flex-col">
    <div className={`relative ${large ? "aspect-[16/9]" : "aspect-[4/3]"} bg-gradient-to-br ${article.gradient}`}>
      <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_60%_40%,hsl(210,80%,50%),transparent_60%)]" />
      <span
        className={`absolute top-3 left-3 inline-flex items-center px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white rounded-sm ${article.catColor}`}
      >
        {article.cat}
      </span>
    </div>
    <div className="p-4 flex-1 flex flex-col">
      <h3 className={`font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors ${large ? "text-lg" : "text-sm"}`}>
        {article.title}
      </h3>
      {large && <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{article.excerpt}</p>}
      <div className="mt-auto flex items-center gap-3 text-xs text-muted-foreground pt-3 border-t border-border">
        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{article.date}</span>
        <span className="flex items-center gap-1"><MessageCircle className="h-3 w-3" />{article.comments}</span>
        <span className="flex items-center gap-1 ml-auto"><Eye className="h-3 w-3" />{article.views}</span>
      </div>
    </div>
  </article>
);
