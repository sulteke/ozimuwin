"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

import { LanguageProvider } from "@/lib/i18n";

/** App-wide client providers: language context and motion settings. */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      {/* Automatically reduces animation for users who prefer reduced motion. */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LanguageProvider>
  );
}
