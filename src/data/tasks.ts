import type { Translation } from "../i18n/translations";

export type Priority = "high" | "medium" | "soon" | "later";

export type TaskGroupId = keyof Translation["tasksSection"]["groups"];
export type SubTaskId = keyof Translation["tasksSection"]["items"];

export type TaskGroup = {
  id: TaskGroupId;
  chapter: string;
  priority: Priority;
  itemIds: SubTaskId[];
};

export const taskGroups: TaskGroup[] = [
  { id: "ceremony", chapter: "I", priority: "high", itemIds: ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9"] },
  { id: "attire", chapter: "II", priority: "high", itemIds: ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9"] },
  { id: "reception", chapter: "III", priority: "high", itemIds: ["r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9"] },
  { id: "beauty", chapter: "IV", priority: "medium", itemIds: ["b1", "b2", "b3", "b4", "b5"] },
  { id: "photography", chapter: "V", priority: "medium", itemIds: ["p1", "p2", "p3", "p4", "p5", "p6"] },
  { id: "invitations", chapter: "VI", priority: "high", itemIds: ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8"] },
  { id: "flowers", chapter: "VII", priority: "soon", itemIds: ["f1", "f2", "f3", "f4", "f5", "f6"] },
  { id: "logistics", chapter: "VIII", priority: "soon", itemIds: ["l1", "l2", "l3", "l4", "l5", "l6"] },
  { id: "honeymoon", chapter: "IX", priority: "later", itemIds: ["h1", "h2", "h3", "h4", "h5", "h6"] },
  { id: "budget", chapter: "X", priority: "high", itemIds: ["bd1", "bd2", "bd3", "bd4", "bd5"] },
];
