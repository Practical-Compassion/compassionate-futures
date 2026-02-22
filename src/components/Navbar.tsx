import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
{ to: "/", label: "Home" },
{ to: "/newsletter", label: "Newsletter" },
{ to: "/contact", label: "Contact" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-foreground/95 backdrop-blur supports-[backdrop-filter]:bg-foreground/80 border-b border-border/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 md:px-12">
        <Link to="/" className="font-display font-bold text-primary-foreground text-xl tracking-wide">
          PCDC
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
          <Link
            key={l.to}
            to={l.to}
            className={cn(
              "font-body text-sm tracking-wide transition-colors",
              pathname === l.to ?
              "text-secondary font-semibold" :
              "text-primary-foreground/70 hover:text-primary-foreground"
            )}>

              {l.label}
            </Link>
          )}
          







        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu">

          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open &&
      <nav className="md:hidden bg-foreground border-t border-border/20 px-6 pb-4 flex flex-col gap-3">
          {navLinks.map((l) =>
        <Link
          key={l.to}
          to={l.to}
          onClick={() => setOpen(false)}
          className={cn(
            "font-body text-sm py-2 transition-colors",
            pathname === l.to ?
            "text-secondary font-semibold" :
            "text-primary-foreground/70 hover:text-primary-foreground"
          )}>

              {l.label}
            </Link>
        )}
          <a
          href="https://www.justgiving.com/charity/practicalcompassionfordestitutechildren"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2 rounded-lg font-body font-semibold text-sm hover:brightness-110 transition-all w-fit">

            <Heart className="w-4 h-4" /> Donate
          </a>
        </nav>
      }
    </header>);

};

export default Navbar;