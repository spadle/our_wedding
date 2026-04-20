export type Guest = {
  name: string;
  relation: string;
  group?: string;
};

export type GuestGroup = {
  title: string;
  subtitle: string;
  guests: Guest[];
};

export const wendyCircle: GuestGroup[] = [
  {
    title: "Immediate",
    subtitle: "Her mother, father & siblings",
    guests: [
      { name: "Wendy", relation: "the bride" },
      { name: "Rosa", relation: "mother" },
      { name: "Hulio", relation: "father" },
      { name: "Moises", relation: "younger brother" },
      { name: "David", relation: "younger brother" },
      { name: "Gaby", relation: "younger sister" },
    ],
  },
  {
    title: "Sister's Family",
    subtitle: "Jaimee & the little ones",
    guests: [
      { name: "Jaimee", relation: "older sister" },
      { name: "Joshua", relation: "first nephew" },
      { name: "Mathew", relation: "second nephew" },
      { name: "Deliliah", relation: "niece" },
    ],
  },
  {
    title: "Extended",
    subtitle: "Aunt & cousin's household",
    guests: [
      { name: "Mirian", relation: "aunt" },
      { name: "Noe", relation: "cousin" },
      { name: "Noe's mother", relation: "aunt" },
      { name: "Noe's father", relation: "uncle" },
    ],
  },
  {
    title: "Friends",
    subtitle: "Roxy's family & close circle",
    guests: [
      { name: "Roxy", relation: "friend" },
      { name: "Roxy's husband", relation: "partner" },
      { name: "Roxy's child I", relation: "child" },
      { name: "Roxy's child II", relation: "child" },
      { name: "Leslie", relation: "close friend" },
      { name: "Deanna", relation: "close friend" },
      { name: "Luna", relation: "close friend" },
      { name: "Jenine", relation: "coworker" },
    ],
  },
];

export const paulCircle: GuestGroup[] = [
  {
    title: "Immediate",
    subtitle: "His parents & sister",
    guests: [
      { name: "Paul", relation: "the groom" },
      { name: "Peter", relation: "father" },
      { name: "Grace", relation: "mother" },
      { name: "Esther", relation: "younger sister" },
    ],
  },
  {
    title: "Friends",
    subtitle: "The dear couple",
    guests: [
      { name: "Jay", relation: "close friend" },
      { name: "Yukyung", relation: "close friend" },
    ],
  },
];

export const guestCounts = {
  wendy: wendyCircle.reduce((n, g) => n + g.guests.length, 0),
  paul: paulCircle.reduce((n, g) => n + g.guests.length, 0),
  get total() {
    return this.wendy + this.paul;
  },
};
