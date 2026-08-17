import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, BookX, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { accentSurface } from "@/components/accent";
import { EmptyState, PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { guideCategories, guides } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/guides")({
  head: () => ({
    meta: [
      { title: "Guides · UniBridge" },
      {
        name: "description",
        content: "Short, practical guides on academics, campus life and international student life.",
      },
      { property: "og:title", content: "Guides · UniBridge" },
      { property: "og:description", content: "Practical guides for university students." },
    ],
  }),
  component: Guides,
});

function Guides() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      guides.filter(
        (g) =>
          (category === "All" || g.category === category) &&
          (!query.trim() || `${g.title} ${g.summary}`.toLowerCase().includes(query.toLowerCase())),
      ),
    [category, query],
  );

  return (
    <div className="animate-rise space-y-6">
      <PageHeader
        title="Guides & resources"
        description="The things nobody explains — written for students, in plain language."
      />

      <div className="card-surface flex flex-col gap-4 p-4 sm:p-5">
        <label className="relative flex items-center">
          <Search className="pointer-events-none absolute left-3.5 size-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides…"
            className="h-12 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {guideCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all",
                category === c
                  ? "border-primary bg-primary-soft text-accent-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={<BookX className="size-6" />}
          title="No guides found"
          description="We're adding new guides every week. Try a different search or category."
          action={
            <Button
              variant="soft"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Reset search
            </Button>
          }
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((g) => (
            <article key={g.id} className="card-surface hover-lift group flex flex-col p-5">
              <span
                className={`grid size-12 place-items-center rounded-2xl text-xl ${accentSurface[g.accent]}`}
              >
                {g.emoji}
              </span>
              <p className="mt-4 text-xs font-semibold tracking-wide text-muted-foreground">
                {g.category.toUpperCase()}
              </p>
              <h3 className="mt-1.5 font-display text-base font-bold leading-snug">{g.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{g.summary}</p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs text-muted-foreground">{g.readTime}</span>
                <span className="text-primary inline-flex items-center gap-1 text-sm font-semibold">
                  Read guide
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
