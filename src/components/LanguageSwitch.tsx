import { useLanguage } from "../i18n/context";
import type { Lang } from "../i18n/translations";

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "ko", label: "KO" },
];

type Props = {
  orientation?: "horizontal" | "vertical";
  className?: string;
};

export function LanguageSwitch({
  orientation = "horizontal",
  className = "",
}: Props) {
  const { lang, setLang, t } = useLanguage();
  const vertical = orientation === "vertical";

  return (
    <div
      role="group"
      aria-label={t.switch.aria}
      className={`inline-flex items-center ${
        vertical ? "flex-col gap-2" : "gap-2"
      } ${className}`}
    >
      {LANGS.map((l, i) => {
        const active = l.code === lang;
        return (
          <span key={l.code} className="inline-flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang(l.code)}
              aria-pressed={active}
              aria-label={l.label}
              className={`eyebrow transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:underline underline-offset-4 decoration-brass-500 ${
                active
                  ? "text-oxblood-700"
                  : "text-ink-900/35 hover:text-oxblood-700"
              }`}
            >
              {l.label}
            </button>
            {i < LANGS.length - 1 && !vertical && (
              <span className="text-brass-500/60 text-[9px] leading-none">
                ·
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}
