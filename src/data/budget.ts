import type { Translation } from "../i18n/translations";

export type BudgetCategoryId = keyof Translation["budgetSection"]["categories"];

export type BudgetCategory = {
  id: BudgetCategoryId;
  suggested: number;
};

export const defaultBudget: BudgetCategory[] = [
  { id: "venue", suggested: 12000 },
  { id: "church", suggested: 800 },
  { id: "dress", suggested: 3500 },
  { id: "suit", suggested: 1200 },
  { id: "rings", suggested: 2500 },
  { id: "photo", suggested: 3500 },
  { id: "video", suggested: 1500 },
  { id: "beauty", suggested: 600 },
  { id: "flowers", suggested: 1500 },
  { id: "invites", suggested: 500 },
  { id: "music", suggested: 800 },
  { id: "cake", suggested: 500 },
  { id: "transport", suggested: 400 },
  { id: "honeymoon", suggested: 5000 },
  { id: "misc", suggested: 1500 },
];
