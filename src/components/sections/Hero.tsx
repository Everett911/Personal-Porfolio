import Image from "next/image";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { Button, buttonClasses } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { site, socials } from "@/content/site";
import { marqueeSkills } from "@/content/skills";
import heroBg from "@/assets/hero-bg.jpg";
import profilePicture from "@/assets/profile-picture.jpg";

// Seeded pseudo-random numbers so the dots render the same on the server
// and in the browser (Math.random would cause a hydration mismatch).
function seeded(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

const dots = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${(seeded(i + 1) * 100).toFixed(2)}%`,
  top: `${(seeded(i + 101) * 100).toFixed(2)}%`,
  duration: `${(15 + seeded(i + 201) * 20).toFixed(1)}s`,
  delay: `${(seeded(i + 301) * 5).toFixed(1)}s`,
}));

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60 bg-primary animate-drift"
            style={{
              left: dot.left,
              top: dot.top,
              animationDuration: dot.duration,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {site.role}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Learning by
                <br />
                <span className="text-primary glow-text">building</span> things
                <br />
                <span className="font-serif italic font-normal text-foreground">
                  people use.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I&apos;m Everett, a developer from Baguio City with an IT
                diploma. For the past two years I&apos;ve been building with
                React, TypeScript and Next.js, most recently a full-stack store
                with payments and an admin dashboard.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" href="/#projects">
                See my work <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Button>
              <a
                href={site.resume}
                download
                className={buttonClasses("lg", "outline")}
              >
                <Download className="w-5 h-5" aria-hidden="true" />
                Download résumé
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Find me on</span>
              <SocialLinks socials={socials} />
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <Image
                  src={profilePicture}
                  alt={`Portrait of ${site.name}`}
                  priority
                  sizes="(min-width: 1024px) 448px, 90vw"
                  placeholder="blur"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass-strong rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Open to junior roles
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills marquee */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I&apos;ve used in my projects
          </p>
          <div
            className="relative overflow-hidden mask-x-from-90% mask-x-to-100%"
            aria-label={marqueeSkills.join(", ")}
            role="img"
          >
            <div className="flex w-max animate-marquee" aria-hidden="true">
              {[...marqueeSkills, ...marqueeSkills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
