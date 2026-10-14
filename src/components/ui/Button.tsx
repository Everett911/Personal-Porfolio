import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Size = "sm" | "default" | "lg";
type Variant = "primary" | "outline";

const baseClasses =
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors disabled:opacity-60 disabled:cursor-not-allowed";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25",
  outline:
    "border border-border text-foreground hover:border-primary/50 hover:bg-primary/10",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

interface CommonProps {
  size?: Size;
  variant?: Variant;
  className?: string;
  children?: ReactNode;
}

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<"button">, keyof CommonProps> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<ComponentProps<typeof Link>, keyof CommonProps>;

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function buttonClasses(
  size: Size = "default",
  variant: Variant = "primary",
  className?: string,
) {
  return [baseClasses, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(" ");
}

/** Renders a `<Link>` when given `href`, otherwise a `<button>`. */
export function Button({
  size = "default",
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = buttonClasses(size, variant, className);

  if (props.href !== undefined) {
    return (
      <Link className={classes} {...(props as Omit<ButtonAsLink, keyof CommonProps>)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as Omit<ButtonAsButton, keyof CommonProps>)}
    >
      {children}
    </button>
  );
}
