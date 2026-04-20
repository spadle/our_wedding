import { useEffect, useState } from "react";

const chapters = [
  { id: "prelude", numeral: "·", label: "Prelude" },
  { id: "ceremony", numeral: "I", label: "Ceremony" },
  { id: "circles", numeral: "II", label: "Circles" },
  { id: "tasks", numeral: "III", label: "Tasks" },
  { id: "budget", numeral: "IV", label: "Budget" },
  { id: "timeline", numeral: "V", label: "Timeline" },
  { id: "vows", numeral: "✦", label: "Postscript" },
];

export function Navigation() {
  const [active, setActive] = useState("prelude");
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <>
      {/* Desktop — vertical left rail */}
      <nav className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-5 text-ink-900">
        <a href="#prelude" className="numeral text-brass-700 text-sm">
          P<span className="italic">&amp;</span>W
        </a>
        <div className="w-px h-10 bg-brass-500/40" />
        {chapters.slice(1, -1).map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="group flex items-center gap-4"
            aria-label={c.label}
          >
            <span
              className={`numeral text-sm transition-all duration-500 ${
                active === c.id
                  ? "text-oxblood-700 scale-125"
                  : "text-ink-900/40 group-hover:text-oxblood-700"
              }`}
            >
              {c.numeral}
            </span>
            <span
              className={`eyebrow text-ink-900/60 transition-all duration-500 overflow-hidden ${
                active === c.id
                  ? "opacity-100 max-w-[180px]"
                  : "opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[180px]"
              }`}
            >
              {c.label}
            </span>
          </a>
        ))}
        <div className="w-px h-10 bg-brass-500/40" />
        <a
          href="#vows"
          className="numeral text-brass-700 text-lg"
          aria-label="Postscript"
        >
          ✦
        </a>
      </nav>

      {/* Mobile — top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-ivory-100/85 backdrop-blur border-b border-brass-500/30">
        <div className="flex items-center justify-between px-5 py-3">
          <a href="#prelude" className="flex items-baseline gap-1 text-oxblood-700">
            <span className="font-display italic text-xl leading-none">P</span>
            <span className="font-display italic text-sm leading-none opacity-60">&amp;</span>
            <span className="font-display italic text-xl leading-none">W</span>
          </a>
          <span className="eyebrow text-ink-900/60">10 · 10 · 26</span>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="eyebrow text-ink-900"
            aria-label="Menu"
          >
            {mobileOpen ? "Close" : "Index"}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-brass-500/30 px-5 py-4 grid grid-cols-2 gap-3">
            {chapters.slice(1, -1).map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-baseline gap-3 py-2"
              >
                <span className="numeral text-oxblood-700 w-6">{c.numeral}</span>
                <span className="font-display text-lg text-ink-900">{c.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
