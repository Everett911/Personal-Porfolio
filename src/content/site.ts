import { Facebook, Github, Linkedin, type LucideIcon } from "lucide-react";

// Canonical address used for links, the sitemap and social previews.
// NEXT_PUBLIC_SITE_URL overrides it; local dev uses localhost.
const productionUrl = "https://everett-lara.vercel.app";

export const site = {
  name: "Everett Mel Lara",
  initials: "EL",
  role: "Junior Full-Stack Developer",
  location: "Baguio City, Philippines",
  email: "everett.lara1697@gmail.com",
  phone: "+63 968 216 7905",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL ? productionUrl : "http://localhost:3000"),
  title: "Everett Mel Lara — Junior Full-Stack Developer",
  description:
    "Junior full-stack developer from Baguio City, Philippines, with an IT diploma and two years of building with React, TypeScript and Next.js — including a full-stack store with payments and auth.",
  availability: "Open to junior developer roles and freelance work",
  resume: "/Everett-Lara-Resume.pdf",
};

export interface Social {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/Everett911", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/everett-lara",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/everett.mel.e.lara",
    icon: Facebook,
  },
];

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#journey", label: "Journey" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
] as const;
