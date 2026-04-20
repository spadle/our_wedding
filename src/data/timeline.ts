export type Milestone = {
  month: string;
  year: number;
  phase: string;
  items: string[];
};

export const timeline: Milestone[] = [
  {
    month: "April",
    year: 2026,
    phase: "Foundations",
    items: [
      "Finalize guest list with addresses",
      "Meet with priest · lock the church date",
      "Agree on total budget",
      "Begin dress shopping",
    ],
  },
  {
    month: "May — June",
    year: 2026,
    phase: "Vendors",
    items: [
      "Book photographer",
      "Book restaurant (restaurant shortlist → decision)",
      "Send save-the-dates",
      "Begin Pre-Cana",
    ],
  },
  {
    month: "July",
    year: 2026,
    phase: "Design",
    items: [
      "Invitation design finalized",
      "Florist meetings",
      "Engagement shoot",
      "Hair & makeup trials",
    ],
  },
  {
    month: "August",
    year: 2026,
    phase: "Details",
    items: [
      "Mail invitations — 8 weeks out",
      "Menu tasting",
      "Order suit · final dress fitting",
      "Finalize readings & music",
    ],
  },
  {
    month: "September",
    year: 2026,
    phase: "Tightening",
    items: [
      "Collect RSVPs",
      "Seating plan",
      "Day-of timeline hour-by-hour",
      "Marriage license",
    ],
  },
  {
    month: "October",
    year: 2026,
    phase: "The Week",
    items: [
      "Rehearsal (optional)",
      "Final payments",
      "Pack emergency kit",
      "10.10 — the ceremony",
    ],
  },
];
