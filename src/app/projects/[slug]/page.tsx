import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { getProject, projects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

// Pre-render every case study at build time; unknown slugs 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};

  return {
    title: `${project.title} case study`,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.title} — case study`,
      description: project.tagline,
      url: `/projects/${project.slug}`,
      images: [{ url: project.image.src, alt: project.imageAlt }],
    },
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        {children}
      </section>
    </Reveal>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <article className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          All projects
        </Link>

        {/* Header */}
        <header className="mt-8 space-y-6">
          <p className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Case study · {project.period}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-in animation-delay-200">
            {project.tagline}
          </p>

          <dl className="grid sm:grid-cols-2 gap-4 animate-fade-in animation-delay-300">
            <div className="glass rounded-2xl p-5">
              <dt className="text-sm text-muted-foreground">Type</dt>
              <dd className="font-medium mt-1">{project.type}</dd>
            </div>
            <div className="glass rounded-2xl p-5">
              <dt className="text-sm text-muted-foreground">Built with</dt>
              <dd className="font-medium mt-1">{project.tags.join(" · ")}</dd>
            </div>
          </dl>

          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
            {project.liveUrl && (
              <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                View live site <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
              </Button>
            )}
            {project.repoUrl && (
              <Button
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <Github className="w-5 h-5" aria-hidden="true" /> Source code
              </Button>
            )}
          </div>
        </header>

        {/* Screenshot */}
        <div className="relative mt-12 glass rounded-3xl p-2 glow-border animate-fade-in animation-delay-500">
          <Image
            src={project.image}
            alt={project.imageAlt}
            priority
            placeholder="blur"
            sizes="(min-width: 896px) 864px, 100vw"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Body */}
        <div className="mt-16 space-y-16">
          <Section title="Overview">
            <div className="space-y-4 text-muted-foreground">
              {project.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Section>

          <Section title="What it does">
            <BulletList items={project.features} />
          </Section>

          <Section title="Tech choices">
            <dl className="grid sm:grid-cols-2 gap-4">
              {project.stack.map((item) => (
                <div key={item.name} className="glass rounded-2xl p-5">
                  <dt className="font-semibold text-foreground">{item.name}</dt>
                  <dd className="text-sm text-muted-foreground mt-2">{item.why}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section title="Challenges and how I solved them">
            <div className="space-y-6">
              {project.challenges.map((challenge, i) => (
                <div key={challenge.title} className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-semibold">
                    <span className="text-primary mr-2">{String(i + 1).padStart(2, "0")}</span>
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground mt-3">{challenge.body}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="What I learned">
            <BulletList items={project.learned} />
          </Section>

          <Section title="What I'd add next">
            <BulletList items={project.next} />
          </Section>
        </div>

        {/* Footer nav */}
        <nav
          aria-label="More projects"
          className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row gap-6 justify-between"
        >
          <Link
            href="/#contact"
            className="text-muted-foreground hover:text-primary"
          >
            Like what you see? <span className="text-foreground underline underline-offset-4">Get in touch</span>
          </Link>
          {nextProject.slug !== project.slug && (
            <Link
              href={`/projects/${nextProject.slug}` as const}
              className="inline-flex items-center gap-2 font-medium hover:text-primary"
            >
              Next: {nextProject.title}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
