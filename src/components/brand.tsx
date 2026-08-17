import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "bg-brand-gradient inline-grid size-9 shrink-0 place-items-center rounded-xl shadow-glow",
        className,
      )}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path
          d="M4 17V9.5a4 4 0 0 1 4-4h1.5M20 17V9.5a4 4 0 0 0-4-4h-1.5M4 13h16"
          stroke="var(--color-primary-foreground)"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-display text-lg font-extrabold tracking-tight">UniBridge</span>
    </span>
  );
}
