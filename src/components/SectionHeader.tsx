import { motion } from "motion/react";

type Props = {
  numeral: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ numeral, eyebrow, title, subtitle }: Props) {
  return (
    <header className="mb-14 lg:mb-20">
      <div className="flex items-start justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-baseline gap-6"
        >
          <span className="numeral text-brass-700 text-5xl lg:text-6xl">
            {numeral}
          </span>
          <div>
            <p className="eyebrow text-ink-900/60 mb-2">{eyebrow}</p>
            <h2 className="font-display italic text-oxblood-700 font-light leading-[0.95] text-5xl sm:text-6xl lg:text-8xl tracking-tightest">
              {title}
            </h2>
            {subtitle && (
              <p className="font-display italic text-ink-900/70 mt-3 text-xl lg:text-2xl">
                {subtitle}
              </p>
            )}
          </div>
        </motion.div>
      </div>
      <div className="hairline mt-10" />
    </header>
  );
}
