import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { useT } from "../i18n/context";

export function Ceremony() {
  const t = useT();
  const c = t.ceremonySection;

  return (
    <section
      id="ceremony"
      className="relative paper py-24 lg:py-32 px-5 lg:pl-48 lg:pr-16 xl:pr-24"
    >
      <SectionHeader
        numeral="I"
        eyebrow={t.chapter.one}
        title={c.title}
        subtitle={c.subtitle}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <p className="eyebrow text-brass-700 mb-5">{c.one_eyebrow}</p>
          <p className="font-display italic text-3xl lg:text-4xl leading-[1.15] text-ink-900 text-balance">
            {c.one_prose}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="lg:col-span-5 lg:col-start-8"
        >
          <p className="eyebrow text-brass-700 mb-5">{c.two_eyebrow}</p>
          <p className="font-display italic text-3xl lg:text-4xl leading-[1.15] text-ink-900 text-balance">
            {c.two_prose_pre}
            <span className="not-italic font-display text-oxblood-700">
              {c.two_prose_venue}
            </span>
            {c.two_prose_post}
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
          { label: c.fact_date, value: c.fact_date_value, hint: c.fact_date_hint },
          { label: c.fact_ceremony, value: c.fact_ceremony_value, hint: c.fact_ceremony_hint },
          { label: c.fact_reception, value: c.fact_reception_value, hint: c.fact_reception_hint },
          { label: c.fact_company, value: "~29", hint: c.fact_company_hint },
        ].map((fact, i) => (
          <div key={i}>
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
