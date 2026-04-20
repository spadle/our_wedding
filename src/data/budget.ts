export type BudgetCategory = {
  id: string;
  name: string;
  hint: string;
  suggested: number; // default starting amount in USD
};

export const defaultBudget: BudgetCategory[] = [
  { id: "venue", name: "Reception venue", hint: "Restaurant & food", suggested: 12000 },
  { id: "church", name: "Church offering", hint: "Donation · priest · altar", suggested: 800 },
  { id: "dress", name: "Dress & bridal", hint: "Dress · veil · shoes · alterations", suggested: 3500 },
  { id: "suit", name: "Groom's attire", hint: "Suit · shoes · accessories", suggested: 1200 },
  { id: "rings", name: "Rings", hint: "Both bands", suggested: 2500 },
  { id: "photo", name: "Photography", hint: "Engagement + wedding", suggested: 3500 },
  { id: "video", name: "Videography", hint: "Optional", suggested: 1500 },
  { id: "beauty", name: "Hair & makeup", hint: "Trial + day-of", suggested: 600 },
  { id: "flowers", name: "Florals", hint: "Bouquet · boutonniere · altar · tables", suggested: 1500 },
  { id: "invites", name: "Invitations", hint: "Design · print · postage", suggested: 500 },
  { id: "music", name: "Music", hint: "Ceremony & reception", suggested: 800 },
  { id: "cake", name: "Cake & desserts", hint: "", suggested: 500 },
  { id: "transport", name: "Transportation", hint: "Church → venue", suggested: 400 },
  { id: "honeymoon", name: "Honeymoon", hint: "Flights · lodging", suggested: 5000 },
  { id: "misc", name: "Miscellaneous", hint: "Buffer for surprises", suggested: 1500 },
];
