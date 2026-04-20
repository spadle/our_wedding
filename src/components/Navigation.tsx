import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useT } from "../i18n/context";
import { LanguageSwitch } from "./LanguageSwitch";

type ChapterMeta = {
  id: string;
  numeral: string;
  key: "prelude" | "ceremony" | "circles" | "tasks" | "budget" | "timeline" | "postscript";
};

const chapters: ChapterMeta[] = [
  { id: "prelude", numeral: "·", key: "prelude" },
  { id: "ceremony", numeral: "I", key: "ceremony" },
  { id: "circles", numeral: "II", key: "circles" },
  { id: "tasks", numeral: "III", key: "tasks" },
  { id: "budget", numeral: "IV", key: "budget" },
  { id: "timeline", numeral: "V", key: "timeline" },
  { id: "vows", numeral: "✦", key: "postscript" },
];

export function Navigation() {
  const t = useT();
  const [active, setActive] = useState("prelude");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.3,
  });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = chapters[0].id;
      for (const c of chapters) {
        const el = document.getElementById(c.id);
        if (el && el.offsetTop <= y) current = c.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeChapter = chapters.find((c) => c.id === active) || chapters[0];
  const activeLabel = t.nav[activeChapter.key];

  return (
    <>
      {/* ─────────── Desktop — slender vertical rail ─────────── */}
      <nav
        aria-label={t.nav.index_aria}
        className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col items-start gap-5 text-ink-900"
      >
        <a
          href="#prelude"
          className="numeral text-brass-700 text-sm block text-center w-5"
        >
          P<span className="italic">&amp;</span>W
        </a>
        <div className="w-px h-10 bg-brass-500/40 ml-[10px]" />
        {chapters.slice(1, -1).map((c) => {
          const isActive = active === c.id;
          return (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="group flex items-center gap-3 h-5"
              aria-label={t.nav[c.key]}
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={`numeral text-sm transition-all duration-500 w-5 text-center leading-none ${
                  isActive
                    ? "text-oxblood-700 scale-125"
                    : "text-ink-900/35 group-hover:text-oxblood-700"
                }`}
              >
                {c.numeral}
              </span>
              <motion.span
                animate={{
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : -6,
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="eyebrow text-ink-900/65 whitespace-nowrap pointer-events-none"
              >
                {t.nav[c.key]}
              </motion.span>
            </a>
          );
        })}
        <div className="w-px h-10 bg-brass-500/40 ml-[10px]" />
        <a
          href="#vows"
          className="numeral text-brass-700 text-lg block text-center w-5 leading-none"
          aria-label={t.nav.postscript}
        >
          ✦
        </a>
        <div className="w-px h-6 bg-brass-500/40 ml-[10px] mt-2" />
        <LanguageSwitch orientation="vertical" className="ml-[-3px]" />
      </nav>

      {/* ─────────── Mobile — sticky top bar with animated index ─────────── */}
      <div
        className="lg:hidden fixed inset-x-0 top-0 z-50"
        style={{
          transform: "translate3d(0,0,0)",
          WebkitBackfaceVisibility: "hidden",
          willChange: "transform",
        }}
      >
        <div className="relative bg-ivory-100 border-b border-brass-500/35 shadow-[0_2px_18px_-10px_rgba(74,29,31,0.25)]">
          <div className="flex items-center px-4 py-3 gap-3">
            {/* Monogram */}
            <a
              href="#prelude"
              aria-label={t.nav.prelude}
              className="flex items-baseline gap-0.5 text-oxblood-700 shrink-0"
            >
              <span className="font-display italic text-xl leading-none">P</span>
              <span className="font-display italic text-sm leading-none opacity-60 mx-px">
                &amp;
              </span>
              <span className="font-display italic text-xl leading-none">W</span>
            </a>

            <span className="h-4 w-px bg-brass-500/50 shrink-0" />

            {/* Active chapter — animated */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex-1 flex items-center gap-2 overflow-hidden text-left min-w-0"
              aria-expanded={mobileOpen}
              aria-label={t.nav.open_index}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeChapter.id}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="numeral text-brass-700 text-sm inline-block w-4 shrink-0"
                >
                  {activeChapter.numeral}
                </motion.span>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeChapter.id + "-" + activeLabel}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -14, opacity: 0 }}
                  transition={{
                    duration: 0.42,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.05,
                  }}
                  className="font-display italic text-lg text-oxblood-700 leading-none truncate"
                >
                  {activeLabel}
                </motion.span>
              </AnimatePresence>
              <motion.span
                animate={{ rotate: mobileOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-auto text-brass-700 text-xs"
              >
                ▾
              </motion.span>
            </button>

            {/* Language switch — tiny */}
            <LanguageSwitch className="shrink-0 scale-95 origin-right" />
          </div>

          {/* Scroll progress bar */}
          <motion.div
            aria-hidden
            className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-oxblood-700 origin-left"
            style={{ scaleX: progressX }}
          />
        </div>

        {/* Dropdown index */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-ivory-100 border-b border-brass-500/30 shadow-[0_10px_30px_-20px_rgba(74,29,31,0.35)]"
            >
              <ul className="px-4 py-3 grid grid-cols-2 gap-x-4">
                {chapters.slice(1, -1).map((c) => {
                  const isActive = active === c.id;
                  return (
                    <li key={c.id}>
                      <a
                        href={`#${c.id}`}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-baseline gap-3 py-2.5 border-b border-ink-900/10 transition-colors ${
                          isActive ? "text-oxblood-700" : "text-ink-900/80"
                        }`}
                      >
                        <span
                          className={`numeral w-5 text-center ${
                            isActive ? "text-oxblood-700" : "text-brass-700"
                          }`}
                        >
                          {c.numeral}
                        </span>
                        <span className="font-display text-lg">
                          {t.nav[c.key]}
                        </span>
                        {isActive && (
                          <motion.span
                            layoutId="mobile-active-dot"
                            className="ml-auto w-1.5 h-1.5 rounded-full bg-oxblood-700 self-center"
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
                <li className="col-span-2 pt-3">
                  <a
                    href="#vows"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-3 text-brass-700 eyebrow"
                  >
                    <span>✦</span>
                    <span>{t.nav.postscript}</span>
                    <span>✦</span>
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
