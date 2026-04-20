import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import {
  guestCounts,
  paulCircle,
  wendyCircle,
  type GuestGroup,
} from "../data/guests";

function Circle({
  name,
  total,
  groups,
  accent,
}: {
  name: string;
  total: number;
  groups: GuestGroup[];
  accent: string;
}) {
  return (
    <div className="relative">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="eyebrow text-brass-700 mb-2">Circle of</p>
          <h3 className="font-display italic text-5xl lg:text-7xl text-oxblood-700 leading-none">
            {name}
          </h3>
        </div>
        <div className="text-right">
          <p className="eyebrow text-ink-900/50">count</p>
          <p className="numeral text-4xl lg:text-5xl text-oxblood-700">
            {String(total).padStart(2, "0")}
          </p>
        </div>
      </div>

      <div className={`h-px w-full ${accent} mb-10`} />

      <div className="space-y-10">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: idx * 0.05 }}
          >
            <div className="flex items-baseline gap-4 mb-4">
              <span className="numeral text-brass-700 text-2xl">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-display italic text-2xl text-ink-900">
                  {g.title}
                </p>
                <p className="eyebrow text-ink-900/50 mt-1">{g.subtitle}</p>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pl-0 sm:pl-10">
              {g.guests.map((guest) => (
                <li
                  key={guest.name + guest.relation}
                  className="flex items-baseline gap-3 py-1 border-b border-ink-900/10 group"
                >
                  <span className="font-display text-lg text-ink-900 group-hover:text-oxblood-700 transition-colors">
                    {guest.name}
                  </span>
                  <span className="flex-1 border-b border-dotted border-ink-900/20 translate-y-[-4px]" />
                  <span className="text-xs italic text-ink-900/60">
                    {guest.relation}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function GuestList() {
  return (
    <section
      id="circles"
      className="relative paper py-24 lg:py-32 px-5 lg:pl-48 lg:pr-16 xl:pr-24 bg-ivory-50"
    >
      <SectionHeader
        numeral="II"
        eyebrow="Chapter Two"
        title="The Circle"
        subtitle={`${guestCounts.total} hearts at one table.`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 max-w-7xl">
        <Circle
          name="Wendy"
          total={guestCounts.wendy}
          groups={wendyCircle}
          accent="bg-gradient-to-r from-oxblood-700/60 via-brass-500 to-transparent"
        />
        <Circle
          name="Paul"
          total={guestCounts.paul}
          groups={paulCircle}
          accent="bg-gradient-to-r from-transparent via-brass-500 to-oxblood-700/60"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-24 flex items-center justify-center gap-6 text-center"
      >
        <div className="hairline w-32" />
        <p className="font-display italic text-xl lg:text-2xl text-ink-900/70">
          a small wedding, full of the right people
        </p>
        <div className="hairline w-32" />
      </motion.div>
    </section>
  );
}
