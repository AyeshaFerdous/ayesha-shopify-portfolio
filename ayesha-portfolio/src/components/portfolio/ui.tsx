import type { ReactNode } from "react";
import { ImageIcon, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

export function Section({ id, eyebrow, title, intro, children, className }: {
  id: string; eyebrow: string; title: string; intro?: string; children: ReactNode; className?: string;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-22", className)} aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        <h2 id={`${id}-title`} className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl">{title}</h2>
        {intro && <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-2xl border bg-card p-6", className)}>{children}</div>;
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="rounded-full border bg-secondary px-3 py-1 text-xs text-secondary-foreground">{children}</span>;
}

const btnBase = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
export const btn = {
  primary: cn(btnBase, "bg-primary text-primary-foreground hover:shadow-glow hover:brightness-110"),
  outline: cn(btnBase, "border bg-transparent text-foreground hover:border-primary hover:text-accent-foreground"),
};

/** Reusable image slot: shows the image if provided, otherwise a clean placeholder. */
export function ImageSlot({ src, alt, label, variant = "project", className }: {
  src?: string; alt: string; label?: string; variant?: "project" | "profile"; className?: string;
}) {
  if (src) return <img src={src} alt={alt} loading="lazy" className={cn("h-full w-full object-cover", className)} />;
  const Icon = variant === "profile" ? UserRound : ImageIcon;
  return (
    <div role="img" aria-label={alt} className={cn("grid-bg flex h-full w-full flex-col items-center justify-center gap-3 bg-secondary text-muted-foreground", className)}>
      <span className="flex h-14 w-14 items-center justify-center rounded-full border bg-card text-primary"><Icon className="h-6 w-6" /></span>
      {label && <span className="text-sm font-medium">{label}</span>}
    </div>
  );
}
