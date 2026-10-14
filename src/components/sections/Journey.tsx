import { Github } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { journey } from "@/content/journey";

export function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          id="journey-heading"
          eyebrow="My Journey"
          title="From a 2018 student project"
          accent="to full-stack apps."
          description="I studied IT, worked in IT support and networking, took on construction, painting and waiting jobs through the pandemic, then came back to web development. Here's what each step taught me."
        />

        <ol className="relative mt-16 max-w-3xl mx-auto border-l border-border pl-8 space-y-12">
          {journey.map((step, idx) => (
            <li key={step.title} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-background ${step.current ? "bg-primary animate-pulse" : "bg-muted-foreground/60"}`}
              />
              <Reveal delay={idx * 50}>
                <p className="text-sm font-medium tracking-wider uppercase text-primary">
                  {step.period}
                </p>
                <h3 className="text-xl font-semibold mt-1">{step.title}</h3>
                <p className="text-muted-foreground mt-3">{step.body}</p>
                <ul className="flex flex-wrap gap-2 mt-4" aria-label="Skills">
                  {step.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
                {step.link && (
                  <a
                    href={step.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary hover:underline underline-offset-4"
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    {step.link.label}
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
