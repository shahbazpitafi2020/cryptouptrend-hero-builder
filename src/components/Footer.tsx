const footerLinks = {
  "Quick Links": ["Home", "Markets", "News", "Tools", "About"],
  Categories: ["Bitcoin News", "Altcoin Updates", "AI & Web3", "Price Predictions", "DeFi"],
  Legal: ["Privacy Policy", "Terms of Service", "Disclaimer", "Cookie Policy"],
};

const Footer = () => {
  return (
    <footer className="bg-nav text-nav-foreground mt-10">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-1 mb-4">
              <span className="text-xl font-extrabold text-primary">Crypto</span>
              <span className="text-xl font-extrabold text-nav-foreground">Uptrend</span>
            </a>
            <p className="text-sm text-nav-foreground/60 leading-relaxed">
              Your trusted source for cryptocurrency news, market data, and expert analysis. Stay ahead of the curve with CryptoUptrend.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-semibold text-sm mb-4 text-nav-foreground">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-nav-foreground/60 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-nav-foreground/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-nav-foreground/50">
            © {new Date().getFullYear()} CryptoUptrend — cryptouptrend.com. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "Telegram", "Discord", "YouTube"].map((s) => (
              <a key={s} href="#" className="text-xs text-nav-foreground/50 hover:text-primary transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
