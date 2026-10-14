# Everett Mel Lara — Portfolio

My personal portfolio: who I am, what I've learned in two years of web
development, and case studies of the projects I've built.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.
Every page is pre-rendered at build time.

## Getting started

Requires Node.js 20+.

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open <http://localhost:3000>.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Contact form (EmailJS) |
| `NEXT_PUBLIC_SITE_URL` | Optional. Public URL used for canonical links, the sitemap and social previews. On Vercel it falls back to the production URL. |

## Project structure

```
src/
  app/                    Routes and site-wide metadata
    page.tsx              Home page (one-page layout)
    projects/[slug]/      Case-study page for each project
    opengraph-image.tsx   Social preview image
    sitemap.ts, robots.ts
  content/                All text and data — edit these to update the site
    site.ts               Name, contact details, social links, nav
    projects.ts           Projects and their case studies
    journey.ts            Learning timeline
    skills.ts             Skill groups and the hero marquee
  components/
    layout/               Navbar, Footer
    sections/             Hero, About, Journey, Projects, Contact
    ui/                   Button, SectionHeader, Reveal, SocialLinks, ...
  assets/                 Images (optimized by next/image)
```

### Adding a project

1. Put a screenshot in `src/assets/`.
2. Add an entry to `src/content/projects.ts`.

The homepage card, the `/projects/<slug>` case study and the sitemap entry
are all generated from that entry.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
