import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import {
  taskGroups,
  type Priority,
  type SubTaskId,
} from "../data/tasks";
import { usePersistentState } from "../lib/usePersistentState";
import { useT } from "../i18n/context";

type SubTask = {
  id: string;
  label: string;
  note?: string;
};

type GroupState = {
  done: Record<string, boolean>;
  extras: SubTask[];
};

type State = Record<string, GroupState>;

const seed = (): State =>
  Object.fromEntries(
    taskGroups.map((g) => [g.id, { done: {}, extras: [] }]),
  );

const priorityDot: Record<Priority, string> = {
  high: "bg-oxblood-700",
  medium: "bg-brass-500",
  soon: "bg-sage-500",
  later: "bg-ink-900/30",
};

function Check({ done, onClick }: { done: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={done}
      className={`relative w-5 h-5 flex-shrink-0 border rounded-full transition-all duration-300 ${
        done
          ? "bg-oxblood-700 border-oxblood-700"
          : "border-ink-900/40 hover:border-oxblood-700"
      }`}
    >
      <AnimatePresence>
        {done && (
          <motion.svg
            key="tick"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            viewBox="0 0 24 24"
            className="absolute inset-0 w-full h-full"
            fill="none"
            stroke="#D4B481"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6,12 10,16 18,8" />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
}

export function TaskTracker() {
  const t = useT();
  const ts = t.tasksSection;

  const [state, setState] = usePersistentState<State>(
    "pw_tasks_v1",
    seed(),
  );
  const [open, setOpen] = useState<string | null>(taskGroups[0].id);
  const [drafts, setDrafts] = useState<Record<string, string>>({});

  const toggle = (gid: string, sid: string) => {
    setState((prev) => {
      const g = prev[gid] || { done: {}, extras: [] };
      return { ...prev, [gid]: { ...g, done: { ...g.done, [sid]: !g.done[sid] } } };
    });
  };

  const addExtra = (gid: string) => {
    const draft = (drafts[gid] || "").trim();
    if (!draft) return;
    const extra: SubTask = {
      id: `x-${Date.now()}`,
      label: draft,
    };
    setState((prev) => {
      const g = prev[gid] || { done: {}, extras: [] };
      return { ...prev, [gid]: { ...g, extras: [...g.extras, extra] } };
    });
    setDrafts((d) => ({ ...d, [gid]: "" }));
  };

  const removeExtra = (gid: string, sid: string) => {
    setState((prev) => {
      const g = prev[gid] || { done: {}, extras: [] };
      return {
        ...prev,
        [gid]: {
          done: Object.fromEntries(
            Object.entries(g.done).filter(([k]) => k !== sid),
          ),
          extras: g.extras.filter((x) => x.id !== sid),
        },
      };
    });
  };

  const itemsFor = (gid: string): SubTask[] => {
    const group = taskGroups.find((g) => g.id === gid)!;
    const gs = state[gid] || { done: {}, extras: [] };
    const core = group.itemIds.map<SubTask>((id) => ({
      id,
      label: ts.items[id as SubTaskId].label,
      note: ts.items[id as SubTaskId].note || undefined,
    }));
    return [...core, ...gs.extras];
  };

  const progressFor = (gid: string) => {
    const gs = state[gid] || { done: {}, extras: [] };
    const all = itemsFor(gid);
    const total = all.length;
    const done = all.filter((x) => gs.done[x.id]).length;
    return { total, done, pct: total > 0 ? Math.round((done / total) * 100) : 0 };
  };

  const overall = useMemo(() => {
    let total = 0, done = 0;
    for (const g of taskGroups) {
      const p = progressFor(g.id);
      total += p.total;
      done += p.done;
    }
    return { total, done, pct: total > 0 ? Math.round((done / total) * 100) : 0 };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, t]);

  return (
    <section id="tasks" className="relative paper py-24 lg:py-32 px-5 lg:pl-48 lg:pr-16 xl:pr-24">
      <SectionHeader
        numeral="III"
        eyebrow={t.chapter.three}
        title={ts.title}
        subtitle={ts.subtitle}
      />

      {/* Overall progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14"
      >
        <div>
          <p className="eyebrow text-brass-700 mb-2">{ts.overall_readiness}</p>
          <p className="font-display italic text-4xl lg:text-5xl text-oxblood-700">
            {overall.done}{" "}
            <span className="text-ink-900/40">{ts.of}</span>{" "}
            {overall.total}{" "}
            <span className="text-ink-900/40 text-3xl">{ts.things_done}</span>
          </p>
        </div>
        <div className="flex items-center gap-4 w-full sm:w-80">
          <div className="flex-1 h-[3px] bg-ivory-200 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-oxblood-700"
              initial={{ width: 0 }}
              animate={{ width: `${overall.pct}%` }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
            <div
              className="absolute inset-y-0 left-0 shimmer bg-gradient-to-r from-transparent via-brass-500/60 to-transparent"
              style={{ width: `${overall.pct}%` }}
            />
          </div>
          <span className="numeral text-3xl text-oxblood-700 w-12 text-right">
            {overall.pct}%
          </span>
        </div>
      </motion.div>

      {/* Task group list */}
      <div className="space-y-3 max-w-6xl">
        {taskGroups.map((g, idx) => {
          const p = progressFor(g.id);
          const isOpen = open === g.id;
          const gs = state[g.id] || { done: {}, extras: [] };
          const items = itemsFor(g.id);
          const groupMeta = ts.groups[g.id];
          return (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.03 }}
              className={`card border ${isOpen ? "border-oxblood-700/40" : "border-brass-500/25"} transition-colors`}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : g.id)}
                className="w-full text-left px-5 lg:px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="flex items-baseline gap-5 flex-1 min-w-0">
                  <span className="numeral text-brass-700 text-2xl lg:text-3xl w-8">
                    {g.chapter}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display italic text-2xl lg:text-3xl text-oxblood-700 leading-tight">
                        {groupMeta.title}
                      </h3>
                      <span className="inline-flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${priorityDot[g.priority]}`} />
                        <span className="eyebrow text-ink-900/60">
                          {ts.priority[g.priority]}
                        </span>
                      </span>
                    </div>
                    <p className="italic text-ink-900/60 text-sm mt-0.5">
                      {groupMeta.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0 w-full sm:w-64">
                  <div className="flex-1 h-1 bg-ivory-200 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-brass-500"
                      initial={false}
                      animate={{ width: `${p.pct}%` }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <span className="numeral text-sm text-ink-900/70 w-12 text-right tabular-nums">
                    {p.done}/{p.total}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-brass-700 leading-none"
                  >
                    +
                  </motion.span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 lg:px-8 pb-6 pt-2 border-t border-brass-500/25">
                      <ul className="space-y-1">
                        {items.map((item) => {
                          const done = !!gs.done[item.id];
                          const isExtra = item.id.startsWith("x-");
                          return (
                            <li
                              key={item.id}
                              className="group flex items-start gap-3 py-2"
                            >
                              <span className="pt-[3px]">
                                <Check
                                  done={done}
                                  onClick={() => toggle(g.id, item.id)}
                                />
                              </span>
                              <div className="flex-1 min-w-0">
                                <p
                                  className={`font-display text-lg transition-all ${
                                    done
                                      ? "text-ink-900/40 line-through decoration-brass-500/60"
                                      : "text-ink-900"
                                  }`}
                                >
                                  {item.label}
                                </p>
                                {item.note && (
                                  <p className="text-xs italic text-ink-900/55 mt-0.5">
                                    {item.note}
                                  </p>
                                )}
                              </div>
                              {isExtra && (
                                <button
                                  onClick={() => removeExtra(g.id, item.id)}
                                  className="opacity-0 group-hover:opacity-100 text-xs italic text-oxblood-700 transition-opacity"
                                >
                                  {ts.remove}
                                </button>
                              )}
                            </li>
                          );
                        })}
                      </ul>

                      {/* Add */}
                      <div className="mt-4 flex items-center gap-3 border-t border-ink-900/10 pt-4">
                        <span className="text-brass-500 text-xl leading-none">＋</span>
                        <input
                          value={drafts[g.id] || ""}
                          onChange={(e) =>
                            setDrafts((d) => ({ ...d, [g.id]: e.target.value }))
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") addExtra(g.id);
                          }}
                          placeholder={ts.placeholder}
                          className="flex-1 bg-transparent py-2 font-display italic text-ink-900 placeholder-ink-900/35 border-b border-ink-900/15 focus:border-oxblood-700 focus:outline-none transition-colors"
                        />
                        <button
                          onClick={() => addExtra(g.id)}
                          className="eyebrow text-oxblood-700 hover:text-oxblood-900 transition-colors"
                        >
                          {ts.add}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <p className="mt-10 text-sm italic text-ink-900/60">{ts.footer_note}</p>
    </section>
  );
}
