import { motion } from "motion/react";
import { useCountdown } from "../lib/useCountdown";
import { Floral, Ornament } from "./Ornament";

export function Hero() {
  const { days, hours, minutes, seconds } = useCountdown();

  const letter = (delay: number) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      id="prelude"
      className="relative min-h-[100svh] paper pt-24 lg:pt-16 pb-10 px-5 lg:pl-40 lg:pr-16 xl:pl-48 flex flex-col"
    >
      {/* Corner marks */}
      <div className="hidden sm:flex justify-between eyebrow text-ink-900/60">
        <span>An Invitation · Vol. I</span>
        <span className="text-right">
          <span className="numeral">MMXXVI</span> · Long Island, New York
        </span>
      </div>

      {/* Center stage */}
      <div className="flex-1 flex flex-col items-center justify-center text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-5 mb-6 text-brass-700"
        >
          <Ornament width={90} />
          <span className="eyebrow whitespace-nowrap">Paul &amp; Wendy are marrying</span>
          <Ornament width={90} />
        </motion.div>

        {/* Massive date as hero */}
        <div className="relative">
          <h1 className="font-display italic text-oxblood-700 leading-[0.82] tracking-tightest text-balance">
            <span
              className="block font-light"
              style={{ fontSize: "clamp(4rem, 18vw, 17rem)" }}
            >
              <motion.span {...letter(0.1)} className="inline-block">
                P
              </motion.span>
              <motion.span {...letter(0.16)} className="inline-block">
                a
              </motion.span>
              <motion.span {...letter(0.22)} className="inline-block">
                u
              </motion.span>
              <motion.span {...letter(0.28)} className="inline-block">
                l
              </motion.span>
            </span>
            <motion.span
              {...letter(0.45)}
              className="inline-block font-wonk text-brass-500 text-6xl lg:text-8xl leading-none relative -my-4 lg:-my-6"
              aria-hidden
            >
              &amp;
            </motion.span>
            <span
              className="block font-light"
              style={{ fontSize: "clamp(4rem, 18vw, 17rem)" }}
            >
              <motion.span {...letter(0.6)} className="inline-block">
                W
              </motion.span>
              <motion.span {...letter(0.66)} className="inline-block">
                e
              </motion.span>
              <motion.span {...letter(0.72)} className="inline-block">
                n
              </motion.span>
              <motion.span {...letter(0.78)} className="inline-block">
                d
              </motion.span>
              <motion.span {...letter(0.84)} className="inline-block">
                y
              </motion.span>
            </span>
          </h1>

          {/* decorative floral */}
          <Floral className="hidden lg:block absolute -left-16 top-4 w-14 h-14 text-brass-500 opacity-60" />
          <Floral className="hidden lg:block absolute -right-16 bottom-4 w-14 h-14 text-brass-500 opacity-60 rotate-180" />
        </div>

        {/* Date line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 lg:mt-12 flex items-center gap-6"
        >
          <div className="hairline w-20" />
          <p className="font-display italic text-ink-900 text-2xl lg:text-4xl">
            the tenth of October
          </p>
          <div className="hairline w-20" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-2 eyebrow text-ink-900/70"
        >
          Two Thousand Twenty-Six
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-10 lg:mt-14 grid grid-cols-4 gap-4 lg:gap-10"
        >
          {[
            { value: days, label: "days" },
            { value: hours, label: "hours" },
            { value: minutes, label: "minutes" },
            { value: seconds, label: "seconds" },
          ].map((u) => (
            <div key={u.label} className="flex flex-col items-center">
              <span className="numeral text-4xl lg:text-6xl text-oxblood-700 tabular-nums">
                {String(u.value).padStart(2, "0")}
              </span>
              <span className="eyebrow text-ink-900/50 mt-1">{u.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom strip */}
      <div className="flex items-end justify-between text-ink-900/60 mt-6">
        <span className="eyebrow hidden sm:inline">Ceremony · Catholic Mass</span>
        <a
          href="#ceremony"
          className="eyebrow flex items-center gap-2 hover:text-oxblood-700 transition-colors"
        >
          <span>Read on</span>
          <span className="inline-block translate-y-[1px]">↓</span>
        </a>
        <span className="eyebrow hidden sm:inline">Then · A long table</span>
      </div>
    </section>
  );
}
