"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Delay in ms once the element scrolls into view. */
  delay?: number;
  className?: string;
};

/**
 * Fades its children in the first time they scroll into view, instead of
 * on page load. Users with reduced motion get the content immediately
 * (handled in globals.css).
 */
export function Reveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
