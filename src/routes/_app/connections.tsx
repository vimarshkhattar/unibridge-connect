import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle, UserRoundPlus, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { accentSurface } from "@/components/accent";
import { PageHeader } from "@/components/page-header";
import { StudentCard } from "@/components/student-card";
import { Button } from "@/components/ui/button";
import { connections } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/connections")({
  head: () => ({
    meta: [
      { title: "Connections · UniBridge" },
      { name: "description", content: "Manage your campus connections, requests and suggestions." },
      { property: "og:title", content: "Connections · UniBridge" },
      { property: "og:description", content: "Your student network on UniBridge." },
    ],
  }),
  component: Connections,
});

const tabs = [
  { key: "current", label: "Connections", count: connections.current.length },
  { key: "pending", label: "Pending", count: connections.pending.length },
  { key: "suggested", label: "Suggested", count: connections.suggested.length },
] as const;

function Connections() {
  const [tab, setTab] = useState<(typeof tabs)[number]["key"]>("current");
  const [handled, setHandled] = useState<Record<string, "accepted" | "declined">>({});

  return (
    <div className="animate-rise space-y-6">
      <PageHeader
        title="Connections"
        description="Everyone you've met, everyone waiting, and who you should meet next."
      />

      <div className="inline-flex w-full gap-1 overflow-x-auto rounded-xl border border-border bg-card p-1 sm:w-auto">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={cn(
              "flex-1 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors sm:flex-none",
              tab === t.key
                ? "bg-primary-soft text-accent-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {t.label}
            <span className="ml-2 text-xs opacity-70">{t.count}</span>
          </button>
        ))}
      </div>

      {tab === "current" && (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {connections.current.map((s) => (
            <article key={s.id} className="card-surface hover-lift flex items-center gap-4 p-5">
              <div
                className={`grid size-12 shrink-0 place-items-center rounded-2xl font-display text-sm font-bold ${accentSurface[s.accent]}`}
              >
                {s.initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-display font-bold">{s.name}</p>
                <p className="truncate text-xs text-muted-foreground">{s.major}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.lastActive}</p>
              </div>
              <Button variant="outline" size="icon" aria-label={`Message ${s.name}`}>
                <MessageCircle />
              </Button>
            </article>
          ))}
        </div>
      )}

      {tab === "pending" && (
        <div className="grid gap-4 sm:grid-cols-2">
          {connections.pending.map((s) => (
            <article key={s.id} className="card-surface p-5">
              <div className="flex items-start gap-4">
                <div
                  className={`grid size-12 shrink-0 place-items-center rounded-2xl font-display text-sm font-bold ${accentSurface[s.accent]}`}
                >
                  {s.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-display font-bold">{s.name}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {s.major} · {s.university}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.note}</p>
                </div>
              </div>
              {handled[s.id] ? (
                <p className="mt-4 text-sm font-medium text-muted-foreground">
                  Request {handled[s.id]}.
                </p>
              ) : (
                <div className="mt-4 flex gap-2">
                  <Button
                    className="flex-1"
                    onClick={() => {
                      setHandled((h) => ({ ...h, [s.id]: "accepted" }));
                      toast.success(`You're now connected with ${s.name.split(" ")[0]}`);
                    }}
                  >
                    <Check /> Accept
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setHandled((h) => ({ ...h, [s.id]: "declined" }))}
                  >
                    <X /> Decline
                  </Button>
                </div>
              )}
            </article>
          ))}
        </div>
      )}

      {tab === "suggested" && (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {connections.suggested.map((s) => (
            <StudentCard key={s.id} student={s} />
          ))}
          <div className="card-surface bg-soft-gradient flex flex-col items-center justify-center p-6 text-center">
            <UserRoundPlus className="text-primary size-6" />
            <p className="mt-3 font-display font-bold">Want more matches?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Add interests to your profile to improve suggestions.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
