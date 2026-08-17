import { createFileRoute } from "@tanstack/react-router";
import { Search, SlidersHorizontal, UserRoundSearch } from "lucide-react";
import { useMemo, useState } from "react";

import { EmptyState, PageHeader } from "@/components/page-header";
import { StudentCard } from "@/components/student-card";
import { Button } from "@/components/ui/button";
import { students } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/discover")({
  head: () => ({
    meta: [
      { title: "Discover students · UniBridge" },
      {
        name: "description",
        content: "Search and filter students by major, country, language and interests.",
      },
      { property: "og:title", content: "Discover students · UniBridge" },
      { property: "og:description", content: "Find students who share your major and interests." },
    ],
  }),
  component: Discover,
});

const filterGroups = [
  { key: "university", label: "University", options: ["University of Toronto", "York University", "Ryerson"] },
  { key: "year", label: "Year", options: ["1st year", "2nd year", "3rd year", "4th year"] },
  { key: "language", label: "Language", options: ["English", "Hindi", "Mandarin", "Spanish", "French", "Arabic"] },
];

function Discover() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Record<string, string | null>>({});
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return students.filter((s) => {
      const matchesQuery =
        !q ||
        [s.name, s.major, s.country, ...s.interests, ...s.languages]
          .join(" ")
          .toLowerCase()
          .includes(q);
      const matchesUni = !active.university || s.university === active.university;
      const matchesYear = !active.year || s.year === active.year;
      const matchesLang = !active.language || s.languages.includes(active.language);
      return matchesQuery && matchesUni && matchesYear && matchesLang;
    });
  }, [query, active]);

  const toggle = (key: string, value: string) =>
    setActive((prev) => ({ ...prev, [key]: prev[key] === value ? null : value }));

  return (
    <div className="animate-rise space-y-6">
      <PageHeader
        title="Discover students"
        description="Find people who share your courses, languages, interests or hometown."
        action={
          <Button variant="outline" onClick={() => setShowFilters((v) => !v)} className="lg:hidden">
            <SlidersHorizontal /> Filters
          </Button>
        }
      />

      <div className="card-surface p-4 sm:p-5">
        <label className="relative flex items-center">
          <Search className="pointer-events-none absolute left-3.5 size-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, major, interest or country…"
            className="h-12 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
          />
        </label>

        <div className={cn("mt-4 space-y-3", showFilters ? "block" : "hidden lg:block")}>
          {filterGroups.map((group) => (
            <div key={group.key} className="grid gap-2 sm:grid-cols-[110px_minmax(0,1fr)] sm:items-center">
              <span className="text-xs font-semibold tracking-wide text-muted-foreground">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggle(group.key, opt)}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
                      active[group.key] === opt
                        ? "border-primary bg-primary-soft text-accent-foreground"
                        : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        Showing <span className="text-foreground font-semibold">{results.length}</span> students
      </p>

      {results.length === 0 ? (
        <EmptyState
          icon={<UserRoundSearch className="size-6" />}
          title="No students match those filters"
          description="Try clearing a filter or searching for a broader interest like “design” or “football”."
          action={
            <Button
              variant="soft"
              onClick={() => {
                setQuery("");
                setActive({});
              }}
            >
              Clear filters
            </Button>
          }
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((s) => (
            <StudentCard key={s.id} student={s} />
          ))}
        </div>
      )}
    </div>
  );
}
