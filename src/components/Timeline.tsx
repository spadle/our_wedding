import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { timeline } from "../data/timeline";

export function Timeline() {
  return (
    <section
      id="timeline"
      className="relative paper py-24 lg:py-32 px-5 lg:pl-48 lg:pr-16 xl:pr-24 bg-ivory-50"
    >
      <SectionHeader
        numeral="V"
        eyebrow="Chapter Five"
        title="The Months"
        subtitle="From here to the tenth of October."
      />

      <div className="relative max-w-5xl">
        {/* Vertical brass line */}
        <div className="absolute left-[28px] sm:left-[64px] top-0 bottom-0 w-px bg-brass-500/40" />

        <div className="space-y-14">
          {timeline.map((m, i) => (
            <motion.article
              key={m.month}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.05 }}
              className="relative pl-16 sm:pl-28"
            >
              {/* Node */}
              <div className="absolute left-[22px] sm:left-[58px] top-2 w-3 h-3 bg-ivory-100 border-2 border-oxblood-700 rounded-full" />

              <div className="absolute left-0 top-0 w-14 sm:w-16 text-right">
                <p className="numeral text-3xl sm:text-4xl text-brass-700">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </div>

              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 mb-4">
                <h3 className="font-display italic text-3xl sm:text-4xl text-oxblood-700">
                  {m.month}
                </h3>
                <span className="numeral text-ink-900/60 text-xl">{m.year}</span>
                <span className="eyebrow text-brass-700">— {m.phase}</span>
              </div>

              <ul className="space-y-2 pl-0">
                {m.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 text-ink-900 group"
                  >
                    <span className="text-brass-500 leading-none translate-y-0.5">
                      ◇
                    </span>
                    <span className="font-display text-lg group-hover:text-oxblood-700 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
