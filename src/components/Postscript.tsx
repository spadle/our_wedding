import { motion } from "motion/react";
import { Monogram, Ornament } from "./Ornament";
import { useCountdown } from "../lib/useCountdown";

export function Postscript() {
  const { days } = useCountdown();
  return (
    <section
      id="vows"
      className="relative paper py-24 lg:py-32 px-5 lg:pl-48 lg:pr-16 xl:pr-24 bg-oxblood-700 text-ivory-100"
    >
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(212,180,129,0.3), transparent 40%), radial-gradient(circle at 80% 80%, rgba(212,180,129,0.2), transparent 40%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-10 text-brass-300"
        >
          <Monogram size={80} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-center gap-5 text-brass-300 mb-8"
        >
          <Ornament width={100} />
          <span className="eyebrow">Postscript</span>
          <Ornament width={100} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-display italic font-light text-5xl lg:text-7xl leading-[1.05] text-ivory-100 text-balance"
        >
          "the best part of wedding a person <br className="hidden sm:block" />
          is the waking every morning after."
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10 font-display italic text-brass-300 text-lg"
        >
          — for Wendy, with every day —
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 pt-10 border-t border-brass-300/30 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left"
        >
          <div>
            <p className="eyebrow text-brass-300/70 mb-2">The date</p>
            <p className="font-display italic text-2xl">10 · 10 · 2026</p>
          </div>
          <div>
            <p className="eyebrow text-brass-300/70 mb-2">Until then</p>
            <p className="font-display italic text-2xl">
              <span className="numeral">{days}</span> days
            </p>
          </div>
          <div>
            <p className="eyebrow text-brass-300/70 mb-2">Made by</p>
            <p className="font-display italic text-2xl">Paul, for us</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
