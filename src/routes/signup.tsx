import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Lock, Mail, UserRound } from "lucide-react";
import { useState } from "react";

import { AuthShell, Field, inputClass } from "@/components/auth-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create your account · UniBridge" },
      {
        name: "description",
        content:
          "Join UniBridge free with your university email and start meeting students, finding events and reading guides.",
      },
      { property: "og:title", content: "Create your account · UniBridge" },
      {
        property: "og:description",
        content: "Free for students — set up your profile in about two minutes.",
      },
    ],
  }),
  component: SignUp,
});

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", university: "", password: "" });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <AuthShell
      title="Create your account"
      subtitle="Free for students. Verified with your university email."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/signin" className="text-primary font-semibold hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          void navigate({ to: "/onboarding" });
        }}
      >
        <Field label="Full name">
          <span className="relative block">
            <UserRound className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              required
              value={form.name}
              onChange={set("name")}
              placeholder="Priya Sharma"
              className={`${inputClass} pl-9`}
            />
          </span>
        </Field>

        <Field label="University email" hint="We use this to verify you're a student.">
          <span className="relative block">
            <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="email"
              required
              value={form.email}
              onChange={set("email")}
              placeholder="you@university.edu"
              className={`${inputClass} pl-9`}
            />
          </span>
        </Field>

        <Field label="University">
          <span className="relative block">
            <GraduationCap className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              required
              value={form.university}
              onChange={set("university")}
              placeholder="University of Manchester"
              className={`${inputClass} pl-9`}
            />
          </span>
        </Field>

        <Field label="Password" hint="At least 8 characters.">
          <span className="relative block">
            <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="password"
              required
              minLength={8}
              value={form.password}
              onChange={set("password")}
              placeholder="••••••••"
              className={`${inputClass} pl-9`}
            />
          </span>
        </Field>

        <label className="flex items-start gap-2.5 text-xs text-muted-foreground">
          <input type="checkbox" required className="accent-primary mt-0.5 size-4 rounded" />
          <span>
            I agree to the community guidelines and privacy policy, and I understand my profile is
            only visible to verified students.
          </span>
        </label>

        <Button type="submit" variant="hero" size="lg" className="w-full">
          Create account
          <ArrowRight />
        </Button>
      </form>
    </AuthShell>
  );
}
