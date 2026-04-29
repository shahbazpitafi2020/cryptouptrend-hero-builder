import { Search, TrendingUp, Menu } from "lucide-react";
import { useState } from "react";
import { AdSlot } from "./AdSlot";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Markets", href: "#markets" },
  { label: "Bitcoin News", href: "#news" },
  { label: "Altcoin Updates", href: "#altcoin" },
  { label: "AI & Web3", href: "#ai" },
  { label: "Tools", href: "#tools" },
  { label: "About", href: "#about" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-background">
      {/* Top tier — white logo bar with ad space */}
      <div className="bg-card border-b border-border">
        <div className="container-cu flex items-center justify-between gap-6 py-4">
          <a href="/" className="flex items-center gap-2 group shrink-0">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
              <TrendingUp className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="text-2xl font-extrabold tracking-tight text-foreground">
              Crypto<span className="text-primary">Uptrend</span>
            </span>
          </a>

          {/* Header ad slot — desktop leaderboard */}
          <div className="hidden lg:flex flex-1 justify-center">
            <AdSlot format="leaderboard" slotId="header-leaderboard" className="my-0" />
          </div>

          <div className="hidden md:flex lg:hidden items-center gap-3 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">BTC</span>
            <span className="text-cat-altcoin font-semibold">$67,420 ▲ 2.4%</span>
            <span className="mx-2 h-4 w-px bg-border" />
            <span className="font-medium text-foreground">ETH</span>
            <span className="text-cat-altcoin font-semibold">$3,512 ▲ 1.8%</span>
          </div>
        </div>
      </div>

      {/* Bottom tier — sticky black nav */}
      <div className="sticky top-0 z-50 bg-nav text-nav-foreground shadow-md">
        <div className="container-cu flex items-center justify-between h-12">
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <nav className="hidden md:flex items-center h-full">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-4 h-full flex items-center text-[13px] font-semibold uppercase tracking-wide hover:bg-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Search"
              className="p-2 hover:text-primary transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden border-t border-white/10 bg-nav">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block px-4 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-primary"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
