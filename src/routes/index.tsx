import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  Compass,
  Globe2,
  MessageSquareHeart,
  Quote,
  ShieldCheck,
  Sparkle,
  Users,
} from "lucide-react";

import { Wordmark } from "@/components/brand";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UniBridge — Connect, belong and thrive at university" },
      {
        name: "description",
        content:
          "UniBridge helps university and international students meet like-minded people, discover campus events, read practical guides and ask an AI assistant built for student life.",
      },
      { property: "og:title", content: "UniBridge — Connect, belong and thrive at university" },
      {
        property: "og:description",
        content:
          "Meet students like you, find campus events, follow practical guides and get instant answers from a student-savvy AI assistant.",
      },
    ],
  }),
  component: Landing,
});

const features = [
  {
    icon: Compass,
    title: "Discover students",
    text: "Smart matching by university, course, year, language and interests — so the first hello is never awkward.",
  },
  {
    icon: Users,
    title: "Real connections",
    text: "Send requests, manage your circle and keep track of everyone you've met on campus in one place.",
  },
  {
    icon: CalendarDays,
    title: "Campus events",
    text: "Orientation socials, study groups, sports and culture nights — filtered to what actually fits your week.",
  },
  {
    icon: BookOpen,
    title: "Practical guides",
    text: "Visas, housing, banking, healthcare and academics, explained step by step by students who did it first.",
  },
  {
    icon: Sparkle,
    title: "AI assistant",
    text: "Ask anything about deadlines, admin or campus life and get an answer in seconds, day or night.",
  },
  {
    icon: ShieldCheck,
    title: "Safe by design",
    text: "Verified university emails, private profiles and full control over who can reach out to you.",
  },
];

const steps = [
  {
    title: "Create your profile",
    text: "Tell us your university, course, languages and what you're into. It takes about two minutes.",
  },
  {
    title: "Get matched",
    text: "We surface students, societies and events that genuinely overlap with your world.",
  },
  {
    title: "Show up and belong",
    text: "Message, meet, join events and use guides plus the AI assistant whenever you're stuck.",
  },
];

const testimonials = [
  {
    quote:
      "I moved from Delhi to Manchester knowing nobody. Within a week I had a study group and someone to cook with on Sundays.",
    name: "Ananya R.",
    role: "MSc Data Science · Year 1",
  },
  {
    quote:
      "The guides saved me. Bank account, BRP, registering with a GP — all the boring stuff explained without the panic.",
    name: "Tomás F.",
    role: "BEng Mechanical · Year 2",
  },
  {
    quote:
      "I used the assistant to draft an email to my supervisor at 1am. It sounded better than what I'd have written awake.",
    name: "Wei L.",
    role: "PhD Chemistry · Year 3",
  },
];

const stats = [
  { value: "12k+", label: "Students connected" },
  { value: "40+", label: "Universities" },
  { value: "900+", label: "Events every term" },
  { value: "120+", label: "Student guides" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <Link to="/" aria-label="UniBridge home">
            <Wordmark />
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#how" className="transition-colors hover:text-foreground">
              How it works
            </a>
            <a href="#stories" className="transition-colors hover:text-foreground">
              Stories
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <Link to="/signin">Sign in</Link>
            </Button>
            <Button asChild variant="hero">
              <Link to="/signup">Get started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="grid-backdrop pointer-events-none absolute inset-0" />
          <div className="bg-soft-gradient pointer-events-none absolute inset-0 -z-10" />
          <div className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="animate-rise">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-soft">
                  <Globe2 className="text-primary size-3.5" />
                  Built for international &amp; local students
                </span>
                <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                  Connect. Belong.
                  <br />
                  <span className="text-brand-gradient">Thrive on campus.</span>
                </h1>
                <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
                  UniBridge brings students, events, guides and an AI assistant into one calm,
                  friendly place — so your first semester feels a lot less like starting over.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" variant="hero">
                    <Link to="/signup">
                      Create free account
                      <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="soft">
                    <Link to="/dashboard">Explore the demo</Link>
                  </Button>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  {["Free for students", "University email verified", "No spam, ever"].map((i) => (
                    <span key={i} className="inline-flex items-center gap-1.5">
                      <Check className="text-mint size-4" />
                      {i}
                    </span>
                  ))}
                </div>
              </div>

              <div className="animate-rise relative">
                <div className="card-surface p-5 shadow-lift">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-sm font-bold">Recommended for you</p>
                    <span className="text-primary text-xs font-semibold">This week</span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      { t: "Priya S.", s: "MSc Data Science · speaks Hindi, English", a: "92% match" },
                      { t: "International Welcome Night", s: "Thu 7:00pm · Student Union", a: "218 going" },
                      { t: "Opening a UK bank account", s: "Guide · 6 min read", a: "Popular" },
                    ].map((row) => (
                      <div
                        key={row.t}
                        className="flex items-center gap-3 rounded-xl border border-border bg-card p-3"
                      >
                        <span className="bg-primary-soft text-accent-foreground grid size-10 shrink-0 place-items-center rounded-xl font-display text-xs font-bold">
                          {row.t.slice(0, 2).toUpperCase()}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold">{row.t}</p>
                          <p className="truncate text-xs text-muted-foreground">{row.s}</p>
                        </div>
                        <span className="bg-secondary shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold text-secondary-foreground">
                          {row.a}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-soft-gradient mt-4 rounded-xl border border-border p-4">
                    <div className="flex items-center gap-2">
                      <MessageSquareHeart className="text-primary size-4" />
                      <p className="text-sm font-semibold">Ask UniBridge AI</p>
                    </div>
                    <p className="mt-1.5 text-xs text-muted-foreground">
                      “How do I register with a doctor as an international student?”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-4 sm:mt-20 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="card-surface p-5 text-center">
                  <dt className="text-brand-gradient font-display text-2xl font-extrabold sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-primary text-xs font-bold tracking-widest">EVERYTHING IN ONE PLACE</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              The parts of student life that usually live in ten different chats
            </h2>
            <p className="mt-4 text-muted-foreground">
              No more scattered group links, outdated PDFs and unanswered emails. UniBridge keeps
              people, plans and answers together.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className="card-surface hover-lift p-6">
                <span className="bg-primary-soft text-accent-foreground grid size-11 place-items-center rounded-xl">
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="border-y border-border bg-secondary/40">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <div className="max-w-2xl">
              <p className="text-primary text-xs font-bold tracking-widest">HOW IT WORKS</p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Three steps to feeling at home</h2>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.title} className="card-surface p-6">
                  <span className="bg-brand-gradient text-primary-foreground grid size-10 place-items-center rounded-xl font-display text-sm font-extrabold">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="stories" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-primary text-xs font-bold tracking-widest">STUDENT STORIES</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              What students say after their first month
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card-surface flex h-full flex-col p-6">
                <Quote className="text-primary size-5" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <span className="bg-primary-soft text-accent-foreground grid size-9 place-items-center rounded-xl font-display text-xs font-bold">
                    {t.name.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold">{t.name}</span>
                    <span className="block truncate text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
          <div className="bg-brand-gradient relative overflow-hidden rounded-3xl px-6 py-14 text-center shadow-glow sm:px-12">
            <h2 className="text-primary-foreground text-3xl font-extrabold sm:text-4xl">
              Your campus, minus the guesswork
            </h2>
            <p className="text-primary-foreground/85 mx-auto mt-4 max-w-xl text-sm sm:text-base">
              Join thousands of students building friendships, finding events and figuring out the
              admin together.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link to="/signup">
                  Create your free account
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/signin">I already have an account</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
          <Wordmark />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} UniBridge. Made with students, for students.
          </p>
          <nav className="flex items-center gap-5 text-xs text-muted-foreground">
            <a href="#features" className="hover:text-foreground">
              Features
            </a>
            <a href="#how" className="hover:text-foreground">
              How it works
            </a>
            <Link to="/guides" className="hover:text-foreground">
              Guides
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
