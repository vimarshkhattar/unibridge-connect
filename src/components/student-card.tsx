import { Check, MapPin, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { accentSurface } from "@/components/accent";
import { Button } from "@/components/ui/button";
import type { Student } from "@/lib/mock-data";

export function StudentCard({ student, compact = false }: { student: Student; compact?: boolean }) {
  const [connected, setConnected] = useState(false);

  return (
    <article className="card-surface hover-lift flex flex-col p-5">
      <div className="flex items-start gap-3">
        <div
          className={`grid size-12 shrink-0 place-items-center rounded-2xl font-display text-sm font-bold ${accentSurface[student.accent]}`}
        >
          {student.initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate font-display text-base font-bold">{student.name}</h3>
            <span aria-hidden>{student.flag}</span>
          </div>
          <p className="truncate text-sm text-muted-foreground">
            {student.major} · {student.year}
          </p>
        </div>
        <span className="bg-mint/15 text-mint-foreground shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold">
          {student.match}%
        </span>
      </div>

      <p className="mt-3.5 flex items-center gap-1.5 text-xs text-muted-foreground">
        <MapPin className="size-3.5" />
        <span className="truncate">
          {student.university} · {student.country}
        </span>
      </p>

      {!compact && <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{student.bio}</p>}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {student.interests.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {!compact && (
        <p className="mt-3 text-xs text-muted-foreground">Speaks {student.languages.join(", ")}</p>
      )}

      <Button
        variant={connected ? "soft" : "default"}
        className="mt-5 w-full"
        onClick={() => {
          setConnected((c) => !c);
          if (!connected) toast.success(`Connection request sent to ${student.name.split(" ")[0]}`);
        }}
      >
        {connected ? <Check /> : <Plus />}
        {connected ? "Request sent" : "Connect"}
      </Button>
    </article>
  );
}
