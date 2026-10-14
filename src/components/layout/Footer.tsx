import Link from "next/link";
import { navLinks, site, socials } from "@/content/site";
import { SocialLinks } from "@/components/ui/SocialLinks";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold tracking-tight">
              {site.initials}
              <span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} {site.name}. Built with Next.js and Tailwind CSS.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <SocialLinks socials={socials} />
        </div>
      </div>
    </footer>
  );
};
