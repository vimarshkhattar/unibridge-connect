import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, PartyPopper } from "lucide-react";
import { useState } from "react";

import { Wordmark } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Set up your profile · UniBridge" },
      {
        name: "description",
        content:
          "Tell UniBridge about your course, languages and interests so we can match you with the right students and events.",
      },
      { property: "og:title", content: "Set up your profile · UniBridge" },
      {
        property: "og:description",
        content: "Three quick steps to better matches on campus.",
      },
    ],
  }),
  component: Onboarding,
});

const inputClass =
  "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:border-primary/40 focus:ring-4 focus:ring-primary/10";

const stepTitles = ["About you", "Interests", "Goals"];

const interestOptions = [
  "Football",
  "Coffee & study",
  "Photography",
  "Hiking",
  "Coding",
  "Music",
  "Cooking",
  "Volunteering",
  "Gaming",
  "Debate",
  "Basketball",
  "Film",
  "Travel",
  "Entrepreneurship",
];

const languageOptions = ["English", "Hindi", "Mandarin", "Spanish", "Arabic", "French", "German", "Portuguese"];

const goalOptions = [
  { title: "Make friends", text: "Meet people I actually click with." },
  { title: "Find study partners", text: "Course mates and study groups." },
  { title: "Settle in the city", text: "Housing, admin and everyday life." },
  { title: "Join societies & events", text: "Sports, culture and socials." },
];

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3.5 py-2 text-sm font-medium transition-colors",
        active
          ? "border-primary/40 bg-primary-soft text-accent-foreground"
          : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [interests, setInterests] = useState<string[]>(["Coffee & study"]);
  const [languages, setLanguages] = useState<string[]>(["English"]);
  const [goals, setGoals] = useState<string[]>([]);

  const toggle = (list: string[], set: (v: string[]) => void, value: string) =>
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const next = () => {
    if (step < stepTitles.length - 1) setStep(step + 1);
    else void navigate({ to: "/dashboard" });
  };

  return (
    <div className="bg-soft-gradient flex min-h-screen flex-col">
      <header className="border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-3.5 sm:px-6">
          <Wordmark />
          <span className="text-xs font-semibold text-muted-foreground">
            Step {step + 1} of {stepTitles.length}
          </span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex items-center gap-2">
          {stepTitles.map((t, i) => (
            <div key={t} className="flex-1">
              <div
                className={cn(
                  "h-1.5 rounded-full transition-colors",
                  i <= step ? "bg-brand-gradient" : "bg-secondary",
                )}
              />
              <p
                className={cn(
                  "mt-2 text-xs font-semibold",
                  i <= step ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {t}
              </p>
            </div>
          ))}
        </div>

        <section className="card-surface animate-rise mt-8 p-6 shadow-lift sm:p-8">
          {step === 0 ? (
            <div className="space-y-5">
              <div>
                <h1 className="text-2xl font-extrabold">Tell us about you</h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  This helps us match you with students on a similar path.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold">Course</span>
                  <input placeholder="MSc Data Science" className={`${inputClass} mt-1.5`} />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold">Year of study</span>
                  <select className={`${inputClass} mt-1.5`} defaultValue="Year 1">
                    {["Year 1", "Year 2", "Year 3", "Year 4", "Masters", "PhD"].map((y) => (
                      <option key={y}>{y}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-semibold">Home country</span>
                  <input placeholder="India" className={`${inputClass} mt-1.5`} />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold">City you're studying in</span>
                  <input placeholder="Manchester" className={`${inputClass} mt-1.5`} />
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-semibold">Short bio</span>
                <textarea
                  rows={3}
                  placeholder="First year here, into football, coffee and finding the best library seat."
                  className="mt-1.5 w-full rounded-xl border border-border bg-background p-3.5 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
                />
              </label>
            </div>
          ) : null}

          {step === 1 ? (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-extrabold">What are you into?</h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Pick a few interests and the languages you speak.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold">Interests</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {interestOptions.map((i) => (
                    <Chip
                      key={i}
                      label={i}
                      active={interests.includes(i)}
                      onClick={() => toggle(interests, setInterests, i)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold">Languages</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {languageOptions.map((l) => (
                    <Chip
                      key={l}
                      label={l}
                      active={languages.includes(l)}
                      onClick={() => toggle(languages, setLanguages, l)}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-extrabold">What do you want from UniBridge?</h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  We'll shape your dashboard around this. You can change it any time.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {goalOptions.map((g) => {
                  const active = goals.includes(g.title);
                  return (
                    <button
                      key={g.title}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggle(goals, setGoals, g.title)}
                      className={cn(
                        "rounded-2xl border p-4 text-left transition-colors",
                        active
                          ? "border-primary/40 bg-primary-soft"
                          : "border-border bg-card hover:border-primary/30",
                      )}
                    >
                      <span className="flex items-center justify-between gap-2">
                        <span className="font-display text-sm font-bold">{g.title}</span>
                        {active ? <Check className="text-primary size-4" /> : null}
                      </span>
                      <span className="mt-1 block text-xs text-muted-foreground">{g.text}</span>
                    </button>
                  );
                })}
              </div>
              <div className="bg-soft-gradient flex items-center gap-3 rounded-2xl border border-border p-4">
                <PartyPopper className="text-primary size-5 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  That's it — your dashboard is ready with people and events picked for you.
                </p>
              </div>
            </div>
          ) : null}

          <div className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-6">
            <Button
              type="button"
              variant="ghost"
              onClick={() => (step === 0 ? void navigate({ to: "/signup" }) : setStep(step - 1))}
            >
              <ArrowLeft />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <Button type="button" variant="ghost" onClick={() => void navigate({ to: "/dashboard" })}>
                Skip
              </Button>
              <Button type="button" variant="hero" onClick={next}>
                {step === stepTitles.length - 1 ? "Finish setup" : "Continue"}
                <ArrowRight />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
