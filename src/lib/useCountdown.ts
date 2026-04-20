import { useEffect, useState } from "react";

export const WEDDING_DATE = new Date("2026-10-10T15:00:00-04:00");

type Parts = { days: number; hours: number; minutes: number; seconds: number };

const diff = (): Parts => {
  const now = new Date().getTime();
  const ms = Math.max(0, WEDDING_DATE.getTime() - now);
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
};

export function useCountdown() {
  const [parts, setParts] = useState<Parts>(() => diff());
  useEffect(() => {
    const id = setInterval(() => setParts(diff()), 1000);
    return () => clearInterval(id);
  }, []);
  return parts;
}
