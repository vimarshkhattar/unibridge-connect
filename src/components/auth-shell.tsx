import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import type { ReactNode } from "react";

import { Wordmark } from "@/components/brand";

const highlights = [
  "Match with students who share your course, year and languages",
  "Never miss orientation socials, study groups or culture nights",
  "Step-by-step guides for visas, housing, banking and healthcare",
  "An AI assistant that actually understands student admin",
];

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
      <aside className="bg-brand-gradient relative hidden overflow-hidden p-10 lg:flex lg:flex-col lg:justify-between">
        <Link to="/" className="text-primary-foreground relative">
          <Wordmark />
        </Link>
        <div className="relative max-w-md">
          <h2 className="text-primary-foreground text-3xl font-extrabold leading-tight">
            Everything you need to feel at home on campus.
          </h2>
          <ul className="mt-8 space-y-4">
            {highlights.map((h) => (
              <li key={h} className="text-primary-foreground/90 flex items-start gap-3 text-sm">
                <span className="bg-primary-foreground/15 mt-0.5 grid size-6 shrink-0 place-items-center rounded-lg">
                  <Check className="size-3.5" />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-primary-foreground/70 relative text-xs">
          Trusted by students across 40+ universities.
        </p>
      </aside>

      <main className="bg-soft-gradient flex items-center justify-center px-4 py-12 sm:px-8">
        <div className="animate-rise w-full max-w-md">
          <div className="lg:hidden">
            <Link to="/">
              <Wordmark />
            </Link>
          </div>
          <div className="card-surface mt-6 p-6 shadow-lift sm:p-8 lg:mt-0">
            <h1 className="text-2xl font-extrabold sm:text-[28px]">{title}</h1>
            <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
            <div className="mt-6">{children}</div>
          </div>
          {footer ? (
            <p className="mt-6 text-center text-sm text-muted-foreground">{footer}</p>
          ) : null}
        </div>
      </main>
    </div>
  );
}

export function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      <span className="mt-1.5 block">{children}</span>
      {hint ? <span className="mt-1.5 block text-xs text-muted-foreground">{hint}</span> : null}
    </label>
  );
}

export const inputClass =
  "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:border-primary/40 focus:ring-4 focus:ring-primary/10";
