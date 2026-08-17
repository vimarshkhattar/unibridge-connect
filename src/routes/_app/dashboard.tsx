import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Sparkle,
  TrendingUp,
  UserRoundPlus,
  Users,
} from "lucide-react";

import { accentSurface } from "@/components/accent";
import { StudentCard } from "@/components/student-card";
import { Button } from "@/components/ui/button";
import { activity, currentUser, events, guides, students } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard · UniBridge" },
      { name: "description", content: "Your personalised campus hub: people, events and guides." },
      { property: "og:title", content: "Dashboard · UniBridge" },
      { property: "og:description", content: "Your personalised campus hub on UniBridge." },
    ],
  }),
  component: Dashboard,
});

const stats = [
  { label: "Connections", value: "24", icon: Users, delta: "+3 this week" },
  { label: "Events joined", value: "6", icon: CalendarDays, delta: "2 upcoming" },
  { label: "Guides read", value: "11", icon: BookOpen, delta: "4 saved" },
  { label: "Match score", value: "92%", icon: TrendingUp, delta: "Top 10% on campus" },
];

function Dashboard() {
  return (
    <div className="animate-rise space-y-8">
      <section className="bg-soft-gradient relative overflow-hidden rounded-3xl border border-border p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="min-w-0">
            <p className="text-sm font-medium text-muted-foreground">Welcome back,</p>
            <h1 className="mt-1 text-2xl font-extrabold sm:text-3xl">
              {currentUser.name.split(" ")[0]} 👋
            </h1>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-[15px]">
              You have 2 pending connection requests and 3 events happening near you this week.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button asChild variant="hero">
                <Link to="/discover">
                  <UserRoundPlus /> Discover students
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/assistant">
                  <Sparkle /> Ask the AI assistant
                </Link>
              </Button>
            </div>
          </div>
          <div className="card-surface w-full max-w-sm p-5">
            <div className="flex items-center gap-3">
              <div className="bg-brand-gradient text-primary-foreground grid size-12 place-items-center rounded-2xl font-display font-bold">
                {currentUser.initials}
              </div>
              <div className="min-w-0">
                <p className="truncate font-display font-bold">{currentUser.name}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {currentUser.major} · {currentUser.year}
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              {currentUser.university} · {currentUser.flag} {currentUser.country}
            </p>
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs font-medium">
                <span>Profile completion</span>
                <span className="text-primary">{currentUser.profileCompletion}%</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                <div
                  className="bg-brand-gradient h-full rounded-full transition-all"
                  style={{ width: `${currentUser.profileCompletion}%` }}
                />
              </div>
            </div>
            <Button asChild variant="soft" size="sm" className="mt-4 w-full">
              <Link to="/profile">Complete profile</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card-surface hover-lift p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <s.icon className="text-primary size-4" />
            </div>
            <p className="mt-2 font-display text-2xl font-extrabold">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.delta}</p>
          </div>
        ))}
      </section>

      <section>
        <SectionHead
          title="Recommended for you"
          description="Students who share your major, interests or home country"
          to="/discover"
        />
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {students.slice(0, 3).map((s) => (
            <StudentCard key={s.id} student={s} compact />
          ))}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <section>
          <SectionHead title="Upcoming events" description="Happening on campus soon" to="/events" />
          <div className="mt-4 space-y-3">
            {events.slice(0, 3).map((e) => (
              <div key={e.id} className="card-surface hover-lift flex items-center gap-4 p-4">
                <div
                  className={`grid size-12 shrink-0 place-items-center rounded-2xl leading-none ${accentSurface[e.accent]}`}
                >
                  <span className="font-display text-base font-extrabold">{e.day}</span>
                  <span className="text-[10px] font-semibold tracking-widest">{e.month}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-display text-sm font-bold">{e.title}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {e.time} · {e.location}
                  </p>
                </div>
                <Button variant="outline" size="sm" className="hidden shrink-0 sm:inline-flex">
                  Attend
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <SectionHead title="Recent activity" />
            <ul className="card-surface mt-4 divide-y divide-border">
              {activity.map((a) => (
                <li key={a.id} className="flex gap-3 p-4">
                  <span className="bg-primary mt-1.5 size-2 shrink-0 rounded-full" />
                  <div className="min-w-0">
                    <p className="text-sm">{a.text}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{a.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHead title="Useful guides" to="/guides" />
            <div className="mt-4 space-y-3">
              {guides.slice(0, 3).map((g) => (
                <Link
                  key={g.id}
                  to="/guides"
                  className="card-surface hover-lift flex items-center gap-3 p-4"
                >
                  <span
                    className={`grid size-10 shrink-0 place-items-center rounded-xl text-lg ${accentSurface[g.accent]}`}
                  >
                    {g.emoji}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{g.title}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {g.category} · {g.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="bg-brand-gradient relative overflow-hidden rounded-3xl p-6 sm:p-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <div className="min-w-0 text-primary-foreground">
            <h2 className="text-xl font-extrabold sm:text-2xl">Stuck on something?</h2>
            <p className="mt-2 max-w-lg text-sm opacity-90">
              The UniBridge assistant answers campus questions, drafts emails to professors and
              suggests events tailored to you.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <Link to="/assistant">
              Open assistant <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function SectionHead({
  title,
  description,
  to,
}: {
  title: string;
  description?: string;
  to?: string;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
      <div className="min-w-0">
        <h2 className="truncate text-lg font-bold">{title}</h2>
        {description ? (
          <p className="truncate text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {to ? (
        <Link
          to={to}
          className="text-primary shrink-0 text-sm font-semibold hover:underline"
        >
          View all
        </Link>
      ) : null}
    </div>
  );
}
