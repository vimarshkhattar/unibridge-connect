import { createFileRoute } from "@tanstack/react-router";
import { CalendarX2, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { EventCard } from "@/components/event-card";
import { EmptyState, PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { events } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/events")({
  head: () => ({
    meta: [
      { title: "Campus events · UniBridge" },
      { name: "description", content: "Discover campus events, socials, career sessions and more." },
      { property: "og:title", content: "Campus events · UniBridge" },
      { property: "og:description", content: "Find campus events worth showing up for." },
    ],
  }),
  component: Events,
});

const categories = ["All", "Social", "Career", "Academic", "Sports", "Tech", "Wellness"];

function Events() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      events.filter(
        (e) =>
          (category === "All" || e.category === category) &&
          (!query.trim() || `${e.title} ${e.description} ${e.location}`.toLowerCase().includes(query.toLowerCase())),
      ),
    [category, query],
  );

  return (
    <div className="animate-rise space-y-6">
      <PageHeader
        title="Campus events"
        description="Socials, career sessions, sports and everything happening around you."
      />

      <div className="card-surface flex flex-col gap-4 p-4 sm:p-5">
        <label className="relative flex items-center">
          <Search className="pointer-events-none absolute left-3.5 size-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search events…"
            className="h-12 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
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
          icon={<CalendarX2 className="size-6" />}
          title="No events in this category yet"
          description="New events are added weekly. Try another category or check back soon."
          action={
            <Button variant="soft" onClick={() => setCategory("All")}>
              Show all events
            </Button>
          }
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      )}
    </div>
  );
}
