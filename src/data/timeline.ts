import type { Translation } from "../i18n/translations";

export type TimelineMonthId = keyof Translation["timelineSection"]["months"];

export const timelineMonthIds: TimelineMonthId[] = [
  "m1",
  "m2",
  "m3",
  "m4",
  "m5",
  "m6",
];

export const timelineYear = 2026;
