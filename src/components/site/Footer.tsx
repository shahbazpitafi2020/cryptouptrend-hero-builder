import { TrendingUp, Twitter, Github, Youtube, Send, Facebook } from "lucide-react";

const cols = [
  {
    title: "Markets",
    links: ["Bitcoin", "Ethereum", "Altcoins", "Stablecoins", "DeFi", "NFTs"],
  },
  {
    title: "Resources",
    links: ["News", "Price Predictions", "Tools", "Guides", "Newsletter", "API"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Press Kit", "Advertise", "Partners"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer", "DMCA"],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-nav text-nav-foreground mt-12">
      <div className="container-cu py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
                <TrendingUp className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="text-xl font-extrabold tracking-tight">
                Crypto<span className="text-primary">Uptrend</span>
              </span>
            </a>
            <p className="text-sm text-white/65 leading-relaxed mb-5 max-w-sm">
              Your trusted source for cryptocurrency news, market analysis, and Web3 insights. Stay ahead of the curve with CryptoUptrend.
            </p>
            <div className="flex items-center gap-2">
              {[Twitter, Facebook, Youtube, Github, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-sm bg-white/10 hover:bg-primary transition-colors"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/65 hover:text-primary transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-cu py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>© {new Date().getFullYear()} CryptoUptrend. All rights reserved · cryptouptrend.com</p>
          <p>Crypto investments are volatile. Always do your own research.</p>
        </div>
      </div>
    </footer>
  );
};
