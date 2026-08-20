import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Lock, Mail } from "lucide-react";
import { useState } from "react";

import { AuthShell, Field, inputClass } from "@/components/auth-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign in · UniBridge" },
      {
        name: "description",
        content: "Sign in to UniBridge to reach your connections, campus events, guides and AI assistant.",
      },
      { property: "og:title", content: "Sign in · UniBridge" },
      {
        property: "og:description",
        content: "Welcome back — pick up where you left off on campus.",
      },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in with your university email to continue."
      footer={
        <>
          New to UniBridge?{" "}
          <Link to="/signup" className="text-primary font-semibold hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          void navigate({ to: "/dashboard" });
        }}
      >
        <Field label="University email">
          <span className="relative block">
            <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@university.edu"
              className={`${inputClass} pl-9`}
            />
          </span>
        </Field>

        <Field label="Password">
          <span className="relative block">
            <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={`${inputClass} pl-9`}
            />
          </span>
        </Field>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-muted-foreground">
            <input type="checkbox" className="accent-primary size-4 rounded" />
            Remember me
          </label>
          <button type="button" className="text-primary font-semibold hover:underline">
            Forgot password?
          </button>
        </div>

        <Button type="submit" variant="hero" size="lg" className="w-full">
          Sign in
          <ArrowRight />
        </Button>

        <div className="flex items-center gap-3 py-1">
          <span className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">or continue with</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <Button type="button" variant="outline" className="w-full">
            Google
          </Button>
          <Button type="button" variant="outline" className="w-full">
            Microsoft
          </Button>
        </div>
      </form>
    </AuthShell>
  );
}
