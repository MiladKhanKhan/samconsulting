import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import type { Lang } from "@/i18n/translations";

const options: { code: Lang; label: string }[] = [
  { code: "sv", label: "SV" },
  { code: "en", label: "EN" },
];

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Språk / Language"
      className="inline-flex items-center rounded-full border border-border bg-background/60 p-0.5"
    >
      {options.map((opt) => {
        const active = lang === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLang(opt.code)}
            aria-pressed={active}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
