import { CalendarCheck, Clock, MapPin, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { accentSurface } from "@/components/accent";
import { Button } from "@/components/ui/button";
import type { CampusEvent } from "@/lib/mock-data";

export function EventCard({ event }: { event: CampusEvent }) {
  const [going, setGoing] = useState(false);

  return (
    <article className="card-surface hover-lift flex flex-col p-5">
      <div className="flex items-start gap-4">
        <div
          className={`grid size-14 shrink-0 place-items-center rounded-2xl leading-none ${accentSurface[event.accent]}`}
        >
          <span className="font-display text-lg font-extrabold">{event.day}</span>
          <span className="text-[10px] font-semibold tracking-widest">{event.month}</span>
        </div>
        <div className="min-w-0 flex-1">
          <span
            className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${accentSurface[event.accent]}`}
          >
            {event.category}
          </span>
          <h3 className="mt-2 font-display text-base font-bold leading-snug">{event.title}</h3>
        </div>
      </div>

      <p className="mt-3.5 line-clamp-2 text-sm text-muted-foreground">{event.description}</p>

      <dl className="mt-4 space-y-1.5 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Clock className="size-3.5 shrink-0" />
          <span className="truncate">
            {event.date} · {event.time}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="size-3.5 shrink-0" />
          <span className="truncate">{event.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="size-3.5 shrink-0" />
          <span>{event.attendees} attending</span>
        </div>
      </dl>

      <div className="mt-5 flex gap-2">
        <Button
          variant={going ? "soft" : "default"}
          className="flex-1"
          onClick={() => {
            setGoing((g) => !g);
            if (!going) toast.success(`You're attending ${event.title}`);
          }}
        >
          <CalendarCheck />
          {going ? "Attending" : "Attend"}
        </Button>
        <Button variant="outline" className="flex-1">
          Interested
        </Button>
      </div>
    </article>
  );
}
