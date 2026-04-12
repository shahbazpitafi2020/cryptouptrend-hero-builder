import { useState } from "react";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import news4 from "@/assets/news-4.jpg";
import news5 from "@/assets/news-5.jpg";

const recentArticles = [
  { image: news1, title: "God and Bitcoin: Why Christians Are Embracing Cryptocurrency", time: "42 minutes ago" },
  { image: news2, title: "Bitcoin Climbs to Three-Week High on US-Iran Ceasefire Plan", time: "51 minutes ago" },
  { image: news3, title: "Bitcoin Bear Market Time Pain Trap Signals Slow Bottom Ahead", time: "1 hour ago" },
  { image: news4, title: "Bitcoin Community Reacts to Iran Crypto Toll Reports", time: "1 hour ago" },
  { image: news5, title: "Brit Denies Being Bitcoin Creator Named by New York Times", time: "1 hour ago" },
];

const popularArticles = [
  { image: news3, title: "Crypto Bull Run Signals: Key Market Indicators to Watch", time: "2 days ago" },
  { image: news1, title: "Top 5 Bitcoin Trading Strategies for 2026", time: "3 days ago" },
  { image: news4, title: "Altcoin Season: Which Coins Will Lead the Next Rally?", time: "4 days ago" },
  { image: news5, title: "AI & Crypto: How Machine Learning Is Reshaping DeFi", time: "5 days ago" },
  { image: news2, title: "Ethereum Staking Rewards Hit All-Time High", time: "6 days ago" },
];

type Tab = "recent" | "popular" | "comments";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<Tab>("recent");

  const tabs: { label: string; value: Tab }[] = [
    { label: "Recent", value: "recent" },
    { label: "Popular", value: "popular" },
    { label: "Comments", value: "comments" },
  ];

  const articles = activeTab === "recent" ? recentArticles : popularArticles;

  return (
    <div className="bg-card shadow-sm">
      {/* Tab header */}
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`flex-1 py-3 text-[13px] font-semibold text-center transition-colors ${
              activeTab === tab.value
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "comments" ? (
          <p className="text-sm text-muted-foreground text-center py-6">No comments yet.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {articles.map((article, i) => (
              <a key={i} href="#" className="group flex gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-[60px] h-[60px] object-cover flex-shrink-0"
                  width={60}
                  height={60}
                />
                <div className="min-w-0">
                  <h4 className="text-[13px] font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-[11px] text-muted-foreground mt-1">⏱ {article.time}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
