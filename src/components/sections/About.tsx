import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";

const facts = [
  { value: "2016", label: "started studying IT" },
  { value: "2 yrs", label: "building with React & Next.js" },
  { value: String(projects.length), label: "current projects live on Vercel" },
  { value: "1", label: "full-stack app with payments" },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <SectionHeader
              id="about-heading"
              align="left"
              eyebrow="About Me"
              title="Still learning,"
              accent="and shipping as I go."
            />

            <Reveal delay={200} className="space-y-4 text-muted-foreground">
              <p>
                Hi, I&apos;m Everett. I built my first websites in 2018 while
                studying for an Advanced Diploma in Information Technology.
                After working in IT support and network administration, I came
                back to web development about two years ago, this time with
                React, TypeScript and Next.js.
              </p>
              <p>
                I haven&apos;t had a developer job yet, so I learn by building
                complete projects and putting them online. Each one
                has pushed me into something new: validating API data in the
                Weather App, and databases, authentication and Stripe payments
                in Digi-Express. The parts I got stuck on taught me the most.
              </p>
              <p>
                My IT work taught me to troubleshoot step by step and to explain
                problems clearly to people who aren&apos;t technical. Now
                I&apos;m looking for my first role as a junior developer, or
                freelance work, where I can contribute and keep learning from
                experienced people.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <ul className="grid grid-cols-2 gap-4">
                {facts.map((fact) => (
                  <li key={fact.label} className="glass rounded-2xl p-5">
                    <span className="block text-3xl font-bold text-primary">
                      {fact.value}
                    </span>
                    <span className="block text-sm text-muted-foreground mt-1">
                      {fact.label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            {skillGroups.map((group, idx) => (
              <Reveal key={group.title} delay={(idx + 1) * 100}>
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="px-4 py-1.5 rounded-full bg-surface text-sm border border-border/50 text-muted-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
            <Reveal delay={400}>
              <blockquote className="glass rounded-2xl p-6 glow-border">
                <p className="text-lg font-medium italic text-foreground">
                  &ldquo;If I&apos;m stuck, I read the error properly, then the
                  docs, and only then start changing code. It took me a few
                  long debugging days to learn that.&rdquo;
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
