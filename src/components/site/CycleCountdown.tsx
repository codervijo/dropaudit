import { useEffect, useState } from "react";
import { CalendarClock } from "lucide-react";
import { nextCycleDeadline, type CycleDeadline } from "@/lib/dropCycle";

// Computed client-side only: the site is statically built, so a build-time
// value would go stale between deploys.
export function CycleCountdown() {
  const [next, setNext] = useState<CycleDeadline | null>(null);

  useEffect(() => {
    const tick = () => setNext(nextCycleDeadline());
    tick();
    const id = setInterval(tick, 60 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const dateLabel = next
    ? next.deadline.toLocaleDateString("en-US", {
        timeZone: "UTC",
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "—";
  const daysLabel = !next
    ? "—"
    : next.daysRemaining === 0
      ? "Due today"
      : `${next.daysRemaining} day${next.daysRemaining === 1 ? "" : "s"}`;

  return (
    <div className="mx-auto mt-8 inline-flex flex-col items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-left backdrop-blur sm:flex-row sm:gap-5">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white/10">
          <CalendarClock className="h-4 w-4" />
        </span>
        <div>
          <div className="text-xs font-medium uppercase tracking-wide text-white/60">
            Next 45-day cycle deadline{next ? ` · Cycle ${next.cycle}` : ""}
          </div>
          <div className="text-sm font-semibold text-white" suppressHydrationWarning>
            {dateLabel}
          </div>
        </div>
      </div>
      <div className="text-3xl font-semibold tracking-tight text-white tabular-nums sm:border-l sm:border-white/15 sm:pl-5">
        {daysLabel}
      </div>
    </div>
  );
}
