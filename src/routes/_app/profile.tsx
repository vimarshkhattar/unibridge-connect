import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, MapPin, Pencil } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/profile")({
  head: () => ({
    meta: [
      { title: "Your profile · UniBridge" },
      {
        name: "description",
        content: "Manage your UniBridge profile: major, languages, interests and what you're looking for.",
      },
      { property: "og:title", content: "Your profile · UniBridge" },
      { property: "og:description", content: "Your student profile on UniBridge." },
    ],
  }),
  component: Profile,
});

function Chips({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-widest text-muted-foreground">
        {title.toUpperCase()}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((i) => (
          <span
            key={i}
            className="bg-primary-soft text-accent-foreground rounded-full px-3 py-1.5 text-xs font-medium"
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="animate-rise space-y-6">
      <PageHeader
        title="Your profile"
        description="This is how other students see you across UniBridge."
        action={
          <Button variant="hero">
            <Pencil /> Edit profile
          </Button>
        }
      />

      <section className="bg-soft-gradient rounded-3xl border border-border p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-5">
          <div className="bg-brand-gradient text-primary-foreground grid size-20 place-items-center rounded-3xl font-display text-2xl font-extrabold">
            {currentUser.initials}
          </div>
          <div className="min-w-0">
            <h2 className="font-display text-xl font-extrabold sm:text-2xl">{currentUser.name}</h2>
            <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="size-4" /> {currentUser.major} · {currentUser.year}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4" /> {currentUser.university}
              </span>
              <span>
                {currentUser.flag} {currentUser.country}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-6 max-w-md">
          <div className="flex items-center justify-between text-xs font-medium">
            <span>Profile completion</span>
            <span className="text-primary">{currentUser.profileCompletion}%</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
            <div
              className="bg-brand-gradient h-full rounded-full"
              style={{ width: `${currentUser.profileCompletion}%` }}
            />
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <section className="card-surface space-y-6 p-6">
          <div>
            <p className="text-xs font-semibold tracking-widest text-muted-foreground">ABOUT</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{currentUser.bio}</p>
          </div>
          <Chips title="Interests" items={currentUser.interests} />
          <Chips title="Languages" items={currentUser.languages} />
        </section>

        <section className="card-surface space-y-6 p-6">
          <Chips title="Looking for" items={currentUser.lookingFor} />
          <div className="rounded-2xl border border-border p-4">
            <p className="font-display text-sm font-bold">Boost your matches</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Adding two more interests improves your recommendations on Discover.
            </p>
            <Button variant="soft" size="sm" className="mt-3 w-full">
              Add interests
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
