"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/content/site";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? "glass-strong py-3" : "bg-transparent py-5"}`}
    >
      <nav
        aria-label="Main"
        className="container mx-auto px-6 flex items-center justify-between"
      >
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:text-primary"
          aria-label={`${site.name}, home`}
        >
          {site.initials}
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks
              .filter((link) => link.label !== "Contact")
              .map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                >
                  {link.label}
                </Link>
              ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm" href="/#contact">
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks
              .filter((link) => link.label !== "Contact")
              .map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  onClick={closeMenu}
                  className="text-lg text-muted-foreground hover:text-foreground py-2"
                >
                  {link.label}
                </Link>
              ))}

            <Button size="default" href="/#contact" onClick={closeMenu}>
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
