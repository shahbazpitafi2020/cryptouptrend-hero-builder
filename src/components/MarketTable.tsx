import { TrendingUp, TrendingDown } from "lucide-react";

const coins = [
  { rank: 1, name: "Bitcoin", symbol: "BTC", price: "$104,235.80", change: "+3.42%", cap: "$2.07T", positive: true },
  { rank: 2, name: "Ethereum", symbol: "ETH", price: "$3,892.15", change: "+2.18%", cap: "$468B", positive: true },
  { rank: 3, name: "BNB", symbol: "BNB", price: "$712.40", change: "-0.65%", cap: "$109B", positive: false },
  { rank: 4, name: "Solana", symbol: "SOL", price: "$187.30", change: "+5.12%", cap: "$86B", positive: true },
  { rank: 5, name: "XRP", symbol: "XRP", price: "$2.48", change: "+1.89%", cap: "$142B", positive: true },
  { rank: 6, name: "Cardano", symbol: "ADA", price: "$0.82", change: "-1.24%", cap: "$29B", positive: false },
  { rank: 7, name: "Avalanche", symbol: "AVAX", price: "$42.15", change: "+4.37%", cap: "$17B", positive: true },
  { rank: 8, name: "Dogecoin", symbol: "DOGE", price: "$0.185", change: "+0.92%", cap: "$27B", positive: true },
];

const MarketTable = () => {
  return (
    <section id="markets" className="container py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">
          📈 Market Overview
        </h2>
        <a href="#" className="text-sm font-medium text-primary hover:underline">
          View All →
        </a>
      </div>
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">#</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Name</th>
                <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Price</th>
                <th className="text-right py-3 px-4 font-semibold text-muted-foreground">24h %</th>
                <th className="text-right py-3 px-4 font-semibold text-muted-foreground hidden sm:table-cell">Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin) => (
                <tr
                  key={coin.symbol}
                  className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors cursor-pointer"
                >
                  <td className="py-3 px-4 text-muted-foreground">{coin.rank}</td>
                  <td className="py-3 px-4">
                    <span className="font-semibold text-foreground">{coin.name}</span>
                    <span className="ml-2 text-xs text-muted-foreground">{coin.symbol}</span>
                  </td>
                  <td className="py-3 px-4 text-right font-medium text-foreground">{coin.price}</td>
                  <td className="py-3 px-4 text-right">
                    <span className={`inline-flex items-center gap-1 font-medium ${coin.positive ? "text-primary" : "text-destructive"}`}>
                      {coin.positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                      {coin.change}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right text-muted-foreground hidden sm:table-cell">{coin.cap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MarketTable;
