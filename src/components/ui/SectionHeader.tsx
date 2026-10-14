import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  /** Rendered in the italic serif accent after `title`. */
  accent: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  id?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
  id,
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <Reveal>
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={100}>
        <h2
          id={id}
          className="text-4xl md:text-5xl font-bold leading-tight mt-4 text-secondary-foreground"
        >
          {title}{" "}
          <span className="font-serif italic font-normal text-foreground">
            {accent}
          </span>
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={200}>
          <p className="text-muted-foreground mt-6">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
