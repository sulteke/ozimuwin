"use client";

import { motion } from "framer-motion";

import { dictionaries, locales } from "@/lib/dictionary";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Segmented Русский / Қазақша switch with an animated active pill. */
export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="relative flex items-center gap-1 rounded-full border border-border bg-secondary/70 p-1">
      {locales.map((code) => {
        const isActive = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={isActive}
            className={cn(
              "relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {isActive ? (
              <motion.span
                layoutId="lang-active-pill"
                className="absolute inset-0 rounded-full bg-background shadow-soft"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            ) : null}
            <span className="relative z-10">{dictionaries[code].langName}</span>
          </button>
        );
      })}
    </div>
  );
}
