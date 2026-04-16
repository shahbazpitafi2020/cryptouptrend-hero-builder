import { TrendingDown, TrendingUp, Star } from "lucide-react";

type Coin = {
  rank: number;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: string;
  volume: string;
  color: string;
};

const coins: Coin[] = [
  { rank: 1, name: "Bitcoin", symbol: "BTC", price: 67420.55, change24h: 2.41, marketCap: "$1.32T", volume: "$28.4B", color: "bg-[#f7931a]" },
  { rank: 2, name: "Ethereum", symbol: "ETH", price: 3512.18, change24h: 1.86, marketCap: "$422.8B", volume: "$14.1B", color: "bg-[#627eea]" },
  { rank: 3, name: "Tether", symbol: "USDT", price: 1.0, change24h: 0.02, marketCap: "$112.6B", volume: "$42.7B", color: "bg-[#26a17b]" },
  { rank: 4, name: "BNB", symbol: "BNB", price: 612.94, change24h: -0.64, marketCap: "$89.3B", volume: "$1.9B", color: "bg-[#f3ba2f]" },
  { rank: 5, name: "Solana", symbol: "SOL", price: 178.32, change24h: 4.12, marketCap: "$82.1B", volume: "$3.2B", color: "bg-[#9945ff]" },
  { rank: 6, name: "XRP", symbol: "XRP", price: 0.589, change24h: -1.24, marketCap: "$32.8B", volume: "$1.4B", color: "bg-[#23292f]" },
  { rank: 7, name: "Cardano", symbol: "ADA", price: 0.482, change24h: 0.91, marketCap: "$17.2B", volume: "$420M", color: "bg-[#0033ad]" },
  { rank: 8, name: "Dogecoin", symbol: "DOGE", price: 0.158, change24h: 6.74, marketCap: "$22.6B", volume: "$1.1B", color: "bg-[#c2a633]" },
];

export const MarketTable = () => {
  return (
    <section id="markets" className="container-cu py-10">
      <SectionHeader
        accent="bg-cat-bitcoin"
        title="Live Crypto Markets"
        subtitle="Top coins by market capitalization"
      />

      <div className="bg-card rounded-md overflow-hidden border border-border">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/60 text-muted-foreground">
              <tr className="text-left">
                <th className="py-3 px-4 font-semibold w-10"></th>
                <th className="py-3 px-2 font-semibold w-10">#</th>
                <th className="py-3 px-2 font-semibold">Asset</th>
                <th className="py-3 px-4 font-semibold text-right">Price</th>
                <th className="py-3 px-4 font-semibold text-right">24h %</th>
                <th className="py-3 px-4 font-semibold text-right hidden md:table-cell">Market Cap</th>
                <th className="py-3 px-4 font-semibold text-right hidden lg:table-cell">Volume (24h)</th>
                <th className="py-3 px-4 font-semibold text-right hidden lg:table-cell">Last 7d</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((c) => {
                const positive = c.change24h >= 0;
                return (
                  <tr
                    key={c.symbol}
                    className="border-t border-border hover:bg-muted/40 transition-colors cursor-pointer"
                  >
                    <td className="py-4 px-4">
                      <Star className="h-4 w-4 text-muted-foreground hover:text-primary" />
                    </td>
                    <td className="py-4 px-2 text-muted-foreground font-medium">{c.rank}</td>
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        <span className={`grid h-8 w-8 place-items-center rounded-full text-white text-xs font-bold ${c.color}`}>
                          {c.symbol[0]}
                        </span>
                        <div>
                          <div className="font-semibold text-foreground">{c.name}</div>
                          <div className="text-xs text-muted-foreground">{c.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right font-semibold tabular-nums">
                      ${c.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span
                        className={`inline-flex items-center gap-1 font-semibold tabular-nums ${
                          positive ? "text-cat-altcoin" : "text-cat-news"
                        }`}
                      >
                        {positive ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                        {positive ? "+" : ""}{c.change24h.toFixed(2)}%
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right text-muted-foreground tabular-nums hidden md:table-cell">{c.marketCap}</td>
                    <td className="py-4 px-4 text-right text-muted-foreground tabular-nums hidden lg:table-cell">{c.volume}</td>
                    <td className="py-4 px-4 text-right hidden lg:table-cell">
                      <Sparkline positive={positive} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const Sparkline = ({ positive }: { positive: boolean }) => {
  const points = positive
    ? "0,18 10,15 20,17 30,12 40,14 50,9 60,11 70,6 80,8 90,4 100,2"
    : "0,4 10,6 20,5 30,9 40,7 50,12 60,10 70,15 80,13 90,17 100,18";
  return (
    <svg viewBox="0 0 100 20" className="inline-block w-24 h-6">
      <polyline
        fill="none"
        stroke={positive ? "hsl(var(--cat-altcoin))" : "hsl(var(--cat-news))"}
        strokeWidth="1.5"
        points={points}
      />
    </svg>
  );
};

export const SectionHeader = ({
  title,
  subtitle,
  accent = "bg-primary",
}: {
  title: string;
  subtitle?: string;
  accent?: string;
}) => (
  <div className="flex items-end justify-between mb-5 border-b border-border pb-3">
    <div className="flex items-center gap-3">
      <span className={`inline-block h-6 w-1 rounded-sm ${accent}`} />
      <div>
        <h2 className="text-xl font-extrabold tracking-tight text-foreground uppercase">{title}</h2>
        {subtitle && <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>}
      </div>
    </div>
    <a href="#" className="text-xs font-semibold text-primary uppercase tracking-wider hover:underline">
      View All →
    </a>
  </div>
);
