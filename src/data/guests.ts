import type { Translation } from "../i18n/translations";

export type RelationKey = keyof Translation["circlesSection"]["relations"];

export type GuestGroupKey =
  | "wendy_immediate"
  | "wendy_sister"
  | "wendy_extended"
  | "wendy_friends"
  | "paul_immediate"
  | "paul_friends";

export type Guest = {
  name: string;
  relationKey: RelationKey;
};

export type GuestGroup = {
  key: GuestGroupKey;
  guests: Guest[];
};

export const wendyCircle: GuestGroup[] = [
  {
    key: "wendy_immediate",
    guests: [
      { name: "Wendy", relationKey: "bride" },
      { name: "Rosa", relationKey: "mother" },
      { name: "Hulio", relationKey: "father" },
      { name: "Moises", relationKey: "younger_brother" },
      { name: "David", relationKey: "younger_brother" },
      { name: "Gaby", relationKey: "younger_sister" },
    ],
  },
  {
    key: "wendy_sister",
    guests: [
      { name: "Jaimee", relationKey: "older_sister" },
      { name: "Joshua", relationKey: "first_nephew" },
      { name: "Mathew", relationKey: "second_nephew" },
      { name: "Deliliah", relationKey: "niece" },
    ],
  },
  {
    key: "wendy_extended",
    guests: [
      { name: "Mirian", relationKey: "aunt" },
      { name: "Noe", relationKey: "cousin" },
      { name: "Noe's mother", relationKey: "aunt" },
      { name: "Noe's father", relationKey: "uncle" },
    ],
  },
  {
    key: "wendy_friends",
    guests: [
      { name: "Roxy", relationKey: "friend" },
      { name: "Roxy's husband", relationKey: "partner" },
      { name: "Roxy's child I", relationKey: "child" },
      { name: "Roxy's child II", relationKey: "child" },
      { name: "Leslie", relationKey: "close_friend" },
      { name: "Deanna", relationKey: "close_friend" },
      { name: "Luna", relationKey: "close_friend" },
      { name: "Jenine", relationKey: "coworker" },
    ],
  },
];

export const paulCircle: GuestGroup[] = [
  {
    key: "paul_immediate",
    guests: [
      { name: "Paul", relationKey: "groom" },
      { name: "Peter", relationKey: "father" },
      { name: "Grace", relationKey: "mother" },
      { name: "Esther", relationKey: "younger_sister" },
    ],
  },
  {
    key: "paul_friends",
    guests: [
      { name: "Jay", relationKey: "close_friend" },
      { name: "Yukyung", relationKey: "close_friend" },
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
