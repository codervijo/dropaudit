// DROP 45-day cycle math. Single source of truth for the cycle anchor.
//
// Civil Code §1798.99.86(c)(1): beginning August 1, 2026, a data broker must
// access DROP at least once every 45 days. 11 CCR §7612(a) counts that in
// calendar days from the broker's *last* access, so this schedule is the
// reference cadence counted from the enforcement date — an individual
// broker's deadline may fall earlier depending on when they last accessed.

export const CYCLE_ANCHOR = "2026-08-01";
export const CYCLE_INTERVAL_DAYS = 45;
export const CYCLE_TIME_ZONE = "America/Los_Angeles";

const DAY_MS = 86_400_000;

function utcDayFromIso(iso: string): number {
  const [y, m, d] = iso.split("-").map(Number);
  return Date.UTC(y, m - 1, d) / DAY_MS;
}

/** Calendar date (YYYY-MM-DD) of `now` in California. */
export function californiaDate(now: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: CYCLE_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export interface CycleDeadline {
  /** 1-based cycle number counted from CYCLE_ANCHOR. */
  cycle: number;
  /** Deadline as a UTC-midnight Date (format with timeZone: "UTC"). */
  deadline: Date;
  /** Whole calendar days until the deadline; 0 means due today. */
  daysRemaining: number;
}

/**
 * Next cycle deadline on or after today (California date). A deadline day
 * counts as current until it ends, then rolls to the next 45-day date.
 */
export function nextCycleDeadline(now: Date = new Date()): CycleDeadline {
  const anchor = utcDayFromIso(CYCLE_ANCHOR);
  const today = utcDayFromIso(californiaDate(now));
  const elapsed = today - anchor;
  const cycle = Math.max(1, Math.ceil(elapsed / CYCLE_INTERVAL_DAYS));
  const deadlineDay = anchor + cycle * CYCLE_INTERVAL_DAYS;
  return {
    cycle,
    deadline: new Date(deadlineDay * DAY_MS),
    daysRemaining: deadlineDay - today,
  };
}
