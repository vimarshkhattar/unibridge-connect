import { createFileRoute } from "@tanstack/react-router";
import { Send, Sparkle } from "lucide-react";
import { useState } from "react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { currentUser, suggestedPrompts } from "@/lib/mock-data";

export const Route = createFileRoute("/_app/assistant")({
  head: () => ({
    meta: [
      { title: "AI Assistant · UniBridge" },
      {
        name: "description",
        content: "Ask the UniBridge assistant about campus life, courses, events and guides.",
      },
      { property: "og:title", content: "AI Assistant · UniBridge" },
      {
        property: "og:description",
        content: "Your campus copilot for questions, emails and event ideas.",
      },
    ],
  }),
  component: Assistant,
});

type Message = { id: string; role: "user" | "assistant"; text: string };

const initialMessages: Message[] = [
  {
    id: "m1",
    role: "assistant",
    text: `Hi ${currentUser.name.split(" ")[0]}! I can help with campus questions, drafting emails to professors, finding events or explaining university processes. What's on your mind?`,
  },
];

function Assistant() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    const value = text.trim();
    if (!value) return;
    setMessages((prev) => [
      ...prev,
      { id: `u${prev.length}`, role: "user", text: value },
      {
        id: `a${prev.length}`,
        role: "assistant",
        text: "Here's a demo response — in your live app this is answered by the UniBridge assistant using your profile, courses and campus data.",
      },
    ]);
    setInput("");
  };

  return (
    <div className="animate-rise space-y-6">
      <PageHeader
        title="AI Assistant"
        description="Your campus copilot for questions, emails and recommendations."
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <section className="card-surface flex min-h-[520px] flex-col">
          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            {messages.map((m) => (
              <div
                key={m.id}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-3 text-sm text-primary-foreground"
                    : "mr-auto max-w-[85%] rounded-2xl rounded-bl-md bg-secondary px-4 py-3 text-sm"
                }
              >
                {m.text}
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="grid grid-cols-[minmax(0,1fr)_auto] gap-2 border-t border-border p-4"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about campus life…"
              className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
            />
            <Button type="submit" variant="hero" aria-label="Send message">
              <Send />
            </Button>
          </form>
        </section>

        <aside className="card-surface h-fit p-5">
          <div className="flex items-center gap-2">
            <Sparkle className="text-primary size-4" />
            <p className="font-display text-sm font-bold">Try asking</p>
          </div>
          <div className="mt-4 space-y-2">
            {suggestedPrompts.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => send(p)}
                className="w-full rounded-xl border border-border bg-card px-3.5 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {p}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
