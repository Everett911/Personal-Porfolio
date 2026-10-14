// Only tools that appear in at least one project on this site.

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "shadcn/ui"],
  },
  {
    title: "Backend & data",
    skills: ["Next.js server actions", "PostgreSQL", "Prisma", "Better Auth", "Stripe", "Zod"],
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "Vercel", "Vitest", "ESLint", "VS Code"],
  },
];

export const marqueeSkills = skillGroups.flatMap((g) => g.skills).slice(0, 12);
