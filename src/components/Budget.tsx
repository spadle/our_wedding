import { useMemo } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { defaultBudget } from "../data/budget";
import { usePersistentState } from "../lib/usePersistentState";

type Entry = { allocated: number; spent: number };
type State = Record<string, Entry>;

const seed = (): State =>
  Object.fromEntries(
    defaultBudget.map((c) => [c.id, { allocated: c.suggested, spent: 0 }]),
  );

const usd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

export function Budget() {
  const [state, setState] = usePersistentState<State>("pw_budget_v1", seed());

  const totals = useMemo(() => {
    const allocated = Object.values(state).reduce((s, e) => s + (e?.allocated || 0), 0);
    const spent = Object.values(state).reduce((s, e) => s + (e?.spent || 0), 0);
    return { allocated, spent, remaining: allocated - spent };
  }, [state]);

  const update = (id: string, key: keyof Entry, val: number) => {
    setState((prev) => ({
      ...prev,
      [id]: { ...(prev[id] || { allocated: 0, spent: 0 }), [key]: Math.max(0, val) },
    }));
  };

  const reset = () => setState(seed());

  return (
    <section
      id="budget"
      className="relative paper py-24 lg:py-32 px-5 lg:px-24"
    >
      <SectionHeader
        numeral="IV"
        eyebrow="Chapter Four"
        title="The Quiet Ledger"
        subtitle="Allocate gently. Spend honestly."
      />

      {/* Totals band */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-brass-500/40 mb-14 bg-ivory-50/60"
      >
        {[
          { label: "Allocated", value: totals.allocated, tone: "text-ink-900" },
          { label: "Spent", value: totals.spent, tone: "text-oxblood-700" },
          {
            label: "Remaining",
            value: totals.remaining,
            tone:
              totals.remaining < 0 ? "text-oxblood-700" : "text-sage-500",
          },
        ].map((t, i) => (
          <div
            key={t.label}
            className={`p-8 lg:p-10 flex flex-col ${
              i < 2 ? "border-b md:border-b-0 md:border-r border-brass-500/30" : ""
            }`}
          >
            <span className="eyebrow text-brass-700 mb-4">{t.label}</span>
            <span className={`numeral text-5xl lg:text-6xl ${t.tone}`}>
              {usd(t.value)}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Category rows */}
      <div className="space-y-3 max-w-5xl">
        {defaultBudget.map((cat, idx) => {
          const entry = state[cat.id] || { allocated: cat.suggested, spent: 0 };
          const pct = entry.allocated > 0
            ? Math.min(100, Math.round((entry.spent / entry.allocated) * 100))
            : 0;
          const over = entry.spent > entry.allocated;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.02 }}
              className="group grid grid-cols-12 gap-4 items-center py-4 border-b border-ink-900/10"
            >
              <div className="col-span-12 sm:col-span-5 flex items-baseline gap-4">
                <span className="numeral text-brass-700 text-lg w-6">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-xl text-ink-900">{cat.name}</p>
                  {cat.hint && (
                    <p className="text-xs italic text-ink-900/50 mt-0.5">
                      {cat.hint}
                    </p>
                  )}
                </div>
              </div>

              <label className="col-span-6 sm:col-span-2 flex flex-col">
                <span className="eyebrow text-ink-900/50 mb-1">Allocated</span>
                <div className="flex items-center gap-1 border-b border-ink-900/20 focus-within:border-oxblood-700 transition-colors">
                  <span className="numeral text-ink-900/60">$</span>
                  <input
                    type="number"
                    min={0}
                    value={entry.allocated}
                    onChange={(e) =>
                      update(cat.id, "allocated", Number(e.target.value))
                    }
                    className="w-full bg-transparent py-1 font-mono text-sm text-ink-900 focus:outline-none"
                  />
                </div>
              </label>

              <label className="col-span-6 sm:col-span-2 flex flex-col">
                <span className="eyebrow text-ink-900/50 mb-1">Spent</span>
                <div className="flex items-center gap-1 border-b border-ink-900/20 focus-within:border-oxblood-700 transition-colors">
                  <span className="numeral text-ink-900/60">$</span>
                  <input
                    type="number"
                    min={0}
                    value={entry.spent}
                    onChange={(e) =>
                      update(cat.id, "spent", Number(e.target.value))
                    }
                    className="w-full bg-transparent py-1 font-mono text-sm text-ink-900 focus:outline-none"
                  />
                </div>
              </label>

              <div className="col-span-12 sm:col-span-3 flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-ivory-200 relative overflow-hidden">
                  <motion.div
                    className={`absolute inset-y-0 left-0 ${
                      over ? "bg-oxblood-700" : "bg-brass-500"
                    }`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <span
                  className={`text-xs numeral w-10 text-right ${
                    over ? "text-oxblood-700" : "text-ink-900/60"
                  }`}
                >
                  {pct}%
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <p className="text-sm italic text-ink-900/60">
          Values are saved locally in your browser. Nothing leaves this device.
        </p>
        <button onClick={reset} className="btn-brass">
          Reset to suggestions
        </button>
      </div>
    </section>
  );
}
