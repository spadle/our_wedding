import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

export function Ceremony() {
  return (
    <section
      id="ceremony"
      className="relative paper py-24 lg:py-32 px-5 lg:px-24"
    >
      <SectionHeader
        numeral="I"
        eyebrow="Chapter One"
        title="The Day"
        subtitle="A Catholic Mass, then a long table."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <p className="eyebrow text-brass-700 mb-5">I · The Ceremony</p>
          <p className="font-display italic text-3xl lg:text-4xl leading-[1.15] text-ink-900 text-balance">
            The sacrament first — in a Catholic church. Familiar hymns, candlelight on brass, and the quiet weight of promises made before God.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="lg:col-span-5 lg:col-start-8"
        >
          <p className="eyebrow text-brass-700 mb-5">II · Afterward</p>
          <p className="font-display italic text-3xl lg:text-4xl leading-[1.15] text-ink-900 text-balance">
            Then we gather at a restaurant — warm plates, good wine, a small circle we love. Currently considering{" "}
            <span className="not-italic font-display text-oxblood-700">Del Vino</span>{" "}
            (and keeping our eyes open).
          </p>
        </motion.div>
      </div>

      {/* Key facts strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-brass-500/40 pt-10"
      >
        {[
          { label: "Date", value: "10 · 10 · 2026", hint: "Saturday" },
          { label: "Ceremony", value: "Catholic Mass", hint: "Nuptial liturgy" },
          { label: "Reception", value: "A restaurant", hint: "Menu forthcoming" },
          { label: "Company", value: "~29 souls", hint: "Family & dearest" },
        ].map((fact) => (
          <div key={fact.label}>
            <p className="eyebrow text-ink-900/50 mb-2">{fact.label}</p>
            <p className="font-display italic text-2xl lg:text-3xl text-oxblood-700">
              {fact.value}
            </p>
            <p className="text-sm text-ink-900/60 mt-1 italic">{fact.hint}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
