import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Markets", href: "#markets" },
  { label: "News", href: "#news" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-nav border-b border-nav-foreground/10 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-primary">
            Crypto
          </span>
          <span className="text-xl font-extrabold tracking-tight text-nav-foreground">
            Uptrend
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-nav-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="default" size="sm" className="font-semibold">
            Connect Wallet
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-nav-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-nav border-t border-nav-foreground/10 pb-4">
          <ul className="flex flex-col items-center gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-nav-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button variant="default" size="sm" className="font-semibold">
                Connect Wallet
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
