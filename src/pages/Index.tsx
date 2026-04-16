import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, TrendingUp, Wallet, ArrowRight, Sparkles, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Markets", href: "#markets" },
  { label: "News", href: "#news" },
  { label: "About", href: "#about" },
];

const Index = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error) setPosts(data || []);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const latestPostTitle = posts.length > 0 ? posts[0].title : "Crypto Uptrend";
  const seoDescription =
    posts.length > 0
      ? posts[0].content.replace(/<[^>]+>/g, "").substring(0, 160) + "..."
      : "Stay updated with the latest crypto trends, market analysis and Web3 news on CryptoUptrend.";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{latestPostTitle} | CryptoUptrend</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={latestPostTitle} />
        <meta property="og:description" content={seoDescription} />
      </Helmet>

      {/* ============== STICKY NAVBAR ============== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/40 blur-lg group-hover:bg-primary/60 transition-all" />
              <div className="relative bg-gradient-to-br from-primary to-primary-glow p-2 rounded-xl">
                <TrendingUp className="text-primary-foreground" size={20} strokeWidth={2.5} />
              </div>
            </div>
            <span className="font-bold text-xl tracking-tight">
              Crypto<span className="text-primary">Uptrend</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1 bg-card/40 border border-border/40 rounded-full px-2 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary/60 transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <Button
              className="hidden sm:inline-flex bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-primary-foreground font-semibold rounded-full px-5 shadow-[0_0_30px_hsl(142_76%_45%/0.4)]"
            >
              <Wallet size={16} />
              Connect Wallet
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-3 mx-4 bg-card border border-border rounded-2xl p-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button className="w-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold rounded-full">
                  <Wallet size={16} />
                  Connect Wallet
                </Button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* ============== HERO SECTION ============== */}
      <section
        className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
            <Sparkles size={14} />
            Live Market Intelligence
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
            The Pulse of the
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Crypto Revolution
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mb-10">
            Real-time market data, sharp analysis and the latest Web3 news. Stay ahead of every pump, dump and breakthrough — built for traders who don't sleep.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-primary-foreground font-semibold rounded-full px-8 h-12 shadow-[0_0_40px_hsl(142_76%_45%/0.5)]"
            >
              Explore Markets
              <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border bg-card/40 hover:bg-card backdrop-blur-md text-foreground font-semibold rounded-full px-8 h-12"
            >
              Read Latest News
            </Button>
          </div>

          {/* Stat strip */}
          <div className="mt-16 grid grid-cols-3 max-w-2xl mx-auto gap-4 sm:gap-8 text-left sm:text-center">
            {[
              { label: "Market Cap", value: "$2.4T" },
              { label: "24h Volume", value: "$98B" },
              { label: "BTC Dominance", value: "52.1%" },
            ].map((stat) => (
              <div key={stat.label} className="border-l-2 sm:border-l-0 sm:border-t-2 border-primary/40 pl-3 sm:pl-0 sm:pt-3">
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== NEWS GRID ============== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Breaking News</h2>
            <p className="text-muted-foreground mt-2">Latest updates from the world of Cryptocurrency</p>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-[320px] w-full rounded-2xl bg-card" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-medium">
            {posts.length > 0 ? (
              posts.map((post) => (
                <Link to={`/post/${post.slug}`} key={post.id}>
                  <Card className="group h-full bg-card border-border hover:border-primary/40 transition-all duration-300 overflow-hidden rounded-2xl hover:shadow-[0_0_30px_hsl(142_76%_45%/0.15)]">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 rounded-full">
                          {post.category || "Crypto News"}
                        </Badge>
                        <div className="flex items-center text-muted-foreground text-xs gap-1">
                          <Clock size={12} />
                          {new Date(post.created_at).toLocaleDateString()}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3 leading-relaxed text-sm">
                        {post.excerpt || post.content.replace(/<[^>]+>/g, "").substring(0, 150)}
                      </p>
                      <div className="mt-6 pt-4 border-t border-border flex justify-end">
                        <span className="text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Read Full Story <ArrowRight size={14} />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-card rounded-2xl border border-dashed border-border">
                <p className="text-muted-foreground text-lg">No news published yet.</p>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="mt-10 border-t border-border bg-card/30 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">© 2026 CryptoUptrend. Managed by Tahir SanaUllah.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
