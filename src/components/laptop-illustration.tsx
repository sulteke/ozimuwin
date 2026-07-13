"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Decorative laptop showing a mini business website on screen.
 * Pure CSS/JSX (no image assets) so it stays crisp on every screen.
 */
export function LaptopIllustration({ url }: { url: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Soft blue glow behind the device */}
      <div
        className="absolute -inset-6 -z-10 rounded-[3rem] bg-primary/10 blur-2xl"
        aria-hidden
      />

      <motion.div
        aria-hidden
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="select-none"
      >
        {/* Screen */}
        <div className="overflow-hidden rounded-t-2xl border border-border bg-card shadow-soft-lg">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-border bg-secondary/70 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <div className="ml-3 flex h-6 flex-1 items-center gap-2 rounded-full bg-background px-3 text-[11px] text-muted-foreground">
              <span className="h-2.5 w-2.5 rounded-full border border-muted-foreground/50" />
              {url}
            </div>
          </div>

          {/* Website content */}
          <div className="space-y-4 bg-card p-5">
            {/* Site nav */}
            <div className="flex items-center justify-between">
              <div className="h-5 w-16 rounded-full bg-primary/20" />
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-8 rounded-full bg-muted" />
                <div className="h-2.5 w-8 rounded-full bg-muted" />
                <div className="h-6 w-14 rounded-full bg-primary" />
              </div>
            </div>

            {/* Hero row */}
            <div className="grid grid-cols-2 gap-4 pt-1">
              <div className="space-y-2.5">
                <div className="h-3 w-full rounded-full bg-foreground/80" />
                <div className="h-3 w-4/5 rounded-full bg-foreground/60" />
                <div className="h-2 w-full rounded-full bg-muted" />
                <div className="h-2 w-3/4 rounded-full bg-muted" />
                <div className="flex gap-2 pt-1.5">
                  <div className="h-6 w-16 rounded-full bg-primary" />
                  <div className="h-6 w-16 rounded-full border border-border bg-background" />
                </div>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-primary/80 to-blue-400" />
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="space-y-2 rounded-xl border border-border bg-background p-3"
                >
                  <div className="h-5 w-5 rounded-full bg-primary/20" />
                  <div className="h-2 w-full rounded-full bg-muted" />
                  <div className="h-2 w-2/3 rounded-full bg-muted" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Laptop base */}
        <div className="relative mx-auto">
          <div className="h-3 rounded-b-md bg-gradient-to-b from-slate-200 to-slate-300" />
          <div className="mx-auto h-1.5 w-32 rounded-b-xl bg-slate-300" />
        </div>
      </motion.div>

      {/* Floating WhatsApp badge */}
      <motion.div
        aria-hidden
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-2 top-10 flex items-center gap-2 rounded-2xl border border-border bg-card px-3 py-2 shadow-soft-lg sm:-right-6"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24s8.24 3.7 8.24 8.24-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
          </svg>
        </span>
        <div className="space-y-1">
          <div className="h-2 w-14 rounded-full bg-foreground/70" />
          <div className="h-2 w-10 rounded-full bg-muted" />
        </div>
      </motion.div>
    </div>
  );
}
