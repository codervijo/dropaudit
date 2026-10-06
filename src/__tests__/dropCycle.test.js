// src/__tests__/dropCycle.test.js
import { describe, it, expect } from 'vitest';
import { nextCycleDeadline, californiaDate } from '../lib/dropCycle';

const iso = (d) => d.toISOString().slice(0, 10);
// Noon Pacific (19:00Z during PDT) so the California date is unambiguous.
const pacificNoon = (ymd) => new Date(`${ymd}T19:00:00Z`);

describe('nextCycleDeadline', () => {
  it('day before cycle one closes → Sep 15, 1 day left', () => {
    const r = nextCycleDeadline(pacificNoon('2026-09-14'));
    expect(iso(r.deadline)).toBe('2026-09-15');
    expect(r.cycle).toBe(1);
    expect(r.daysRemaining).toBe(1);
  });

  it('deadline day itself is still current (due today)', () => {
    const r = nextCycleDeadline(pacificNoon('2026-09-15'));
    expect(iso(r.deadline)).toBe('2026-09-15');
    expect(r.daysRemaining).toBe(0);
  });

  it('rolls to Oct 30 the day after cycle one closes', () => {
    const r = nextCycleDeadline(pacificNoon('2026-09-16'));
    expect(iso(r.deadline)).toBe('2026-10-30');
    expect(r.cycle).toBe(2);
    expect(r.daysRemaining).toBe(44);
  });

  it('keeps rolling past cycle two', () => {
    const r = nextCycleDeadline(pacificNoon('2026-10-31'));
    expect(iso(r.deadline)).toBe('2026-12-14');
    expect(r.cycle).toBe(3);
  });

  it('uses the California date, not UTC', () => {
    // 2026-09-16T05:00Z is still Sep 15 in Los Angeles.
    const now = new Date('2026-09-16T05:00:00Z');
    expect(californiaDate(now)).toBe('2026-09-15');
    expect(iso(nextCycleDeadline(now).deadline)).toBe('2026-09-15');
  });
});
