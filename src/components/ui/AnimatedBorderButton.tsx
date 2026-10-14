import type { ReactNode } from "react";

type Props = {
  href: string;
  children?: ReactNode;
};

/** Outlined pill link whose border traces itself on hover. */
export function AnimatedBorderButton({ href, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex bg-transparent border border-border
        text-foreground hover:border-primary/50 transition-all
        duration-1000 focus:outline-none focus-visible:ring-2
        focus-visible:ring-primary focus-visible:ring-offset-2
        focus-visible:ring-offset-background group
        px-8 py-4 text-lg font-medium rounded-full overflow-visible
        animated-border"
    >
      {/* Animated SVG Border */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
        aria-hidden="true"
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </a>
  );
}
