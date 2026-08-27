import { Code2, Eye, Layers, Rocket, Sparkles, Target } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Designing modular systems that easily adapt to growing user demands.",
  },
  {
    icon: Eye,
    title: "Inclusive Design",
    description: "Building accessible web experiences that welcome everyone.",
  },
  {
    icon: Target,
    title: "Product Mindset",
    description:
      "Aligning technical execution with strategic business objectives.",
  },
  {
    icon: Sparkles,
    title: "Fluid UX",
    description:
      "Crafting highly responsive interfaces with natural micro-interactions.",
  },
];

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time{" "}
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Hi, I'm Everett. I am a passionate web developer specializing in
                React, TypeScript, and Next.js to craft digital products that
                make a meaningful difference. What began as a raw curiosity
                about how the web works has evolved into deep expertise in
                engineering scalable, high-performance frontend architectures.
              </p>
              <p>
                I focus on bridging the gap between clean code and exceptional
                user experiences, ensuring every product I build is fast,
                intuitive, and impactful.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Crafting seamless digital experiences that satisfy users and
                empower developers. I build for two audiences: the end-user who
                deserves a flawless interface, and the engineering team that
                inherits a sustainable codebase"
              </p>
            </div>
          </div>

          {/* Right Column - Highlights*/}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    <item.icon className="w-6 h-6 text-primary items-center" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
