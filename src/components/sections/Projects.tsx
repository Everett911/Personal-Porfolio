import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/ui/AnimatedBorderButton";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-32 relative overflow-hidden"
    >
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <SectionHeader
            id="projects-heading"
            eyebrow="Featured Work"
            title="Projects I've"
            accent="built and shipped."
            description="Each one is live, and each has a write-up of what I built, what went wrong and what I learned."
          />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Reveal key={project.slug} delay={(idx + 1) * 100} className="h-full">
              <article className="group relative glass rounded-2xl overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <p className="text-xs text-muted-foreground">{project.type}</p>
                    <h3 className="text-xl font-semibold mt-1 group-hover:text-primary transition-colors">
                      {/* The title link stretches over the whole card */}
                      <Link
                        href={`/projects/${project.slug}` as const}
                        className="after:absolute after:inset-0 after:content-[''] focus:outline-none focus-visible:after:ring-2 focus-visible:after:ring-primary focus-visible:after:rounded-2xl"
                      >
                        {project.title}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.summary}</p>
                  <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* Always-visible links; raised above the card link */}
                  <div className="mt-auto pt-2 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
                    <span className="inline-flex items-center gap-1.5 text-primary">
                      Read case study
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                      >
                        Live demo
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        <span className="sr-only">for {project.title} (opens in a new tab)</span>
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                      >
                        <Github className="w-4 h-4" aria-hidden="true" />
                        Code
                        <span className="sr-only">for {project.title} on GitHub (opens in a new tab)</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* View All CTA */}
        <Reveal delay={300} className="text-center mt-12">
          <AnimatedBorderButton href="https://github.com/Everett911">
            More on GitHub
            <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
          </AnimatedBorderButton>
        </Reveal>
      </div>
    </section>
  );
}
