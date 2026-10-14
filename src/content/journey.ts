// Learning timeline shown in the "Journey" section, newest first.
// The 2018 school projects live here (linked to GitHub) rather than in the
// featured projects, which are reserved for current work.

export interface JourneyStep {
  period: string;
  title: string;
  body: string;
  skills: string[];
  link?: { label: string; href: `https://${string}` };
  current?: boolean;
}

export const journey: JourneyStep[] = [
  {
    period: "Now",
    title: "Going deeper",
    body: "I'm writing tests for the code that matters most, paying more attention to accessibility and performance, and exploring how AI assistants connect to apps by building a small Model Context Protocol (MCP) server.",
    skills: ["Vitest", "Accessibility", "Web performance", "MCP"],
    current: true,
  },
  {
    period: "Jul – Oct 2026",
    title: "Going full-stack with Digi-Express",
    body: "My first app with a real database, sign-in, payments and an admin area. It's where I learned to think about what the server must own and the browser must never be trusted with, and how to debug a deployment that works locally but not in production. Eight years after my student clothing-store layout, I built a store that actually takes orders.",
    skills: ["Next.js App Router", "PostgreSQL", "Prisma", "Better Auth", "Stripe", "Resend"],
  },
  {
    period: "Mar 2026",
    title: "Real APIs and shipping things",
    body: "I built the Weather App and the first version of this portfolio. Working with live weather data taught me to validate responses, handle loading and error states properly, and cache requests. Deploying both to Vercel was the first time strangers could use something I made.",
    skills: ["TanStack Query", "Zod", "Tailwind CSS", "Vercel"],
  },
  {
    period: "2024 – 2025",
    title: "Coming back to web development",
    body: "I came back to coding and found the web had changed a lot since 2018. I relearned modern JavaScript, then moved to building with React components. Thinking in state and props took a while to click. Once I added TypeScript, many bugs I used to find in the browser showed up in my editor instead.",
    skills: ["Modern JavaScript", "React", "TypeScript", "Git & GitHub"],
  },
  {
    period: "2019 – 2020",
    title: "Working in IT",
    body: "I worked as a Technical Administrative Assistant at the DepEd Regional Office in La Trinidad, then as a Network Administrator at Savvy Bracket in Baguio City. Supporting staff with computer and network problems taught me to troubleshoot step by step and explain technical issues to non-technical people. I still use both skills every day as a developer.",
    skills: ["Troubleshooting", "Networking", "User support"],
  },
  {
    period: "May 2018",
    title: "OJT: an events calendar",
    body: "During my on-the-job training I built an events calendar where an office could post events, notices and feedback. It was my first time adapting someone else's code: I customized an open-source jQuery calendar plugin and designed the layout around it.",
    skills: ["jQuery", "CSS", "Reusing open-source code"],
    link: { label: "View the code on GitHub", href: "https://github.com/Everett911/eps-calendar-2018" },
  },
  {
    period: "2016 – 2018",
    title: "Where it started",
    body: "I studied for an Advanced Diploma in Information Technology at Informatics in Baguio City. One of my first websites was a clothing store layout with men's and women's catalogues, an about page and a sign-up form. It was all HTML tables and one big stylesheet, but it's where I learned how pages fit together.",
    skills: ["HTML", "CSS", "Page layout"],
    link: { label: "View the 2018 project on GitHub", href: "https://github.com/Everett911/fashion-store-2018" },
  },
];
