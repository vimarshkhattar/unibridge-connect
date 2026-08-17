import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_app/settings")({
  head: () => ({
    meta: [
      { title: "Settings · UniBridge" },
      {
        name: "description",
        content: "Manage your UniBridge account, notifications and privacy preferences.",
      },
      { property: "og:title", content: "Settings · UniBridge" },
      { property: "og:description", content: "Account, notification and privacy preferences." },
    ],
  }),
  component: Settings,
});

const toggles = [
  { key: "connections", label: "Connection requests", hint: "Email me when someone wants to connect" },
  { key: "events", label: "Event reminders", hint: "Notify me a day before events I'm attending" },
  { key: "guides", label: "New guides", hint: "Weekly digest of new campus guides" },
  { key: "visibility", label: "Public profile", hint: "Let other students find me on Discover" },
];

function Settings() {
  const [on, setOn] = useState<Record<string, boolean>>({
    connections: true,
    events: true,
    guides: false,
    visibility: true,
  });

  return (
    <div className="animate-rise space-y-6">
      <PageHeader title="Settings" description="Control your account, notifications and privacy." />

      <section className="card-surface p-6">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground">ACCOUNT</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field label="Full name" value={currentUser.name} />
          <Field label="University" value={currentUser.university} />
          <Field label="Major" value={currentUser.major} />
          <Field label="Year" value={currentUser.year} />
        </div>
        <Button variant="hero" className="mt-5">
          Save changes
        </Button>
      </section>

      <section className="card-surface divide-y divide-border">
        <p className="p-6 pb-4 text-xs font-semibold tracking-widest text-muted-foreground">
          NOTIFICATIONS & PRIVACY
        </p>
        {toggles.map((t) => (
          <div key={t.key} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-6">
            <div className="min-w-0">
              <p className="text-sm font-semibold">{t.label}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{t.hint}</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={on[t.key] ?? false}
              aria-label={t.label}
              onClick={() => setOn((prev) => ({ ...prev, [t.key]: !prev[t.key] }))}
              className={cn(
                "relative h-6 w-11 shrink-0 rounded-full transition-colors",
                on[t.key] ? "bg-primary" : "bg-secondary",
              )}
            >
              <span
                className={cn(
                  "absolute top-0.5 size-5 rounded-full bg-card shadow transition-all",
                  on[t.key] ? "left-[22px]" : "left-0.5",
                )}
              />
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <input
        defaultValue={value}
        className="mt-1.5 h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm outline-none transition-shadow focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
      />
    </label>
  );
}
