export type SubTask = {
  id: string;
  label: string;
  note?: string;
  done?: boolean;
};

export type TaskGroup = {
  id: string;
  chapter: string;
  title: string;
  subtitle: string;
  priority: "high" | "medium" | "soon" | "later";
  tasks: SubTask[];
};

export const taskGroups: TaskGroup[] = [
  {
    id: "ceremony",
    chapter: "I",
    title: "The Ceremony",
    subtitle: "Catholic church — the sacrament",
    priority: "high",
    tasks: [
      { id: "c1", label: "Meet with the priest", note: "Set the wedding date on the church calendar" },
      { id: "c2", label: "Enroll in Pre-Cana / marriage preparation" },
      { id: "c3", label: "Obtain baptismal & confirmation certificates" },
      { id: "c4", label: "Choose ceremony readings", note: "First reading · Responsorial · Second · Gospel" },
      { id: "c5", label: "Choose ceremony music", note: "Prelude · Processional · Communion · Recessional" },
      { id: "c6", label: "Select rings" },
      { id: "c7", label: "Order Mass program / order of service" },
      { id: "c8", label: "Confirm officiant & altar servers" },
      { id: "c9", label: "Marriage license" },
    ],
  },
  {
    id: "attire",
    chapter: "II",
    title: "The Attire",
    subtitle: "Dress, suit, every thread",
    priority: "high",
    tasks: [
      { id: "a1", label: "Wendy's dress — silhouette & shop visits" },
      { id: "a2", label: "Wendy's dress — order" },
      { id: "a3", label: "Wendy's dress — fittings & alterations" },
      { id: "a4", label: "Veil & accessories" },
      { id: "a5", label: "Bridal shoes" },
      { id: "a6", label: "Paul's suit — style & tailor" },
      { id: "a7", label: "Paul's suit — order & fittings" },
      { id: "a8", label: "Shoes, tie, cufflinks, pocket square" },
      { id: "a9", label: "Rings day-of box / pouch" },
    ],
  },
  {
    id: "reception",
    chapter: "III",
    title: "The Reception",
    subtitle: "The gathering afterward",
    priority: "high",
    tasks: [
      { id: "r1", label: "Shortlist restaurants", note: "Currently considering Del Vino — costly" },
      { id: "r2", label: "Visit top 2 in person" },
      { id: "r3", label: "Negotiate & book venue" },
      { id: "r4", label: "Finalize menu & tasting" },
      { id: "r5", label: "Wine / drinks selection" },
      { id: "r6", label: "Cake — taste, design, order" },
      { id: "r7", label: "Seating plan for ~29 guests" },
      { id: "r8", label: "Toast order — speeches" },
      { id: "r9", label: "Playlist or live music" },
    ],
  },
  {
    id: "beauty",
    chapter: "IV",
    title: "Hair & Makeup",
    subtitle: "For Wendy, the morning of",
    priority: "medium",
    tasks: [
      { id: "b1", label: "Research stylists — reviews & portfolios" },
      { id: "b2", label: "Makeup trial" },
      { id: "b3", label: "Hair trial" },
      { id: "b4", label: "Book day-of artist(s)" },
      { id: "b5", label: "Skincare routine 60 days out" },
    ],
  },
  {
    id: "photography",
    chapter: "V",
    title: "Photography",
    subtitle: "To hold this day forever",
    priority: "medium",
    tasks: [
      { id: "p1", label: "Research photographers — style match" },
      { id: "p2", label: "Request quotes from top 3" },
      { id: "p3", label: "Engagement shoot" },
      { id: "p4", label: "Book wedding photographer" },
      { id: "p5", label: "Consider videographer" },
      { id: "p6", label: "Shot list & must-have moments" },
    ],
  },
  {
    id: "invitations",
    chapter: "VI",
    title: "Invitations",
    subtitle: "The first thing they'll hold",
    priority: "high",
    tasks: [
      { id: "i1", label: "Finalize guest list with addresses" },
      { id: "i2", label: "Save-the-date card — design & send" },
      { id: "i3", label: "Invitation — design direction" },
      { id: "i4", label: "Invitation — print & envelopes" },
      { id: "i5", label: "Hand-addressed or calligraphy?" },
      { id: "i6", label: "Decide distribution — mail vs. in-person" },
      { id: "i7", label: "RSVP tracking system" },
      { id: "i8", label: "Ceremony program design" },
    ],
  },
  {
    id: "flowers",
    chapter: "VII",
    title: "Florals",
    subtitle: "What the eye will rest on",
    priority: "soon",
    tasks: [
      { id: "f1", label: "Mood board — palette & season (October)" },
      { id: "f2", label: "Meet florist(s)" },
      { id: "f3", label: "Bride's bouquet" },
      { id: "f4", label: "Groom's boutonniere" },
      { id: "f5", label: "Altar arrangements (church rules?)" },
      { id: "f6", label: "Reception centerpieces" },
    ],
  },
  {
    id: "logistics",
    chapter: "VIII",
    title: "Logistics",
    subtitle: "The day-of clockwork",
    priority: "soon",
    tasks: [
      { id: "l1", label: "Transportation — church to restaurant" },
      { id: "l2", label: "Day-of timeline (hour by hour)" },
      { id: "l3", label: "Rehearsal dinner (optional, small)" },
      { id: "l4", label: "Out-of-town guest hotel info" },
      { id: "l5", label: "Wedding day emergency kit" },
      { id: "l6", label: "Gifts for parents / small favors" },
    ],
  },
  {
    id: "honeymoon",
    chapter: "IX",
    title: "Honeymoon",
    subtitle: "The first breath as married",
    priority: "later",
    tasks: [
      { id: "h1", label: "Pick destination together" },
      { id: "h2", label: "Time off work — confirm" },
      { id: "h3", label: "Passports valid 6+ months?" },
      { id: "h4", label: "Book flights" },
      { id: "h5", label: "Book lodging" },
      { id: "h6", label: "Itinerary — what to do, what to skip" },
    ],
  },
  {
    id: "budget",
    chapter: "X",
    title: "Budget",
    subtitle: "The quiet spreadsheet",
    priority: "high",
    tasks: [
      { id: "bd1", label: "Agree on total budget together" },
      { id: "bd2", label: "Allocate per category" },
      { id: "bd3", label: "Open a shared tracker" },
      { id: "bd4", label: "Keep all receipts / vendor invoices" },
      { id: "bd5", label: "Review monthly" },
    ],
  },
];

export const priorityLabel = (p: TaskGroup["priority"]) =>
  ({ high: "Now", medium: "Soon", soon: "This quarter", later: "After" })[p];
