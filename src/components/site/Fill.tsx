// Visible placeholder for facts the operator still owes. Never ship with
// these present: `grep -rn "<Fill" src/` must return nothing before go-live.
export function Fill({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded bg-warning/25 px-1 font-mono text-[0.85em] text-foreground">
      ‹FILL: {children}›
    </mark>
  );
}
