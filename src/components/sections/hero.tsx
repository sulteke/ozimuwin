"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { LaptopIllustration } from "@/components/laptop-illustration";
import { useLanguage } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Soft decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/60 via-background to-background"
      />

      <div className="container-px grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:py-28">
        {/* Text column */}
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/70 px-4 py-1.5 text-sm font-medium text-muted-foreground"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            {t.hero.availability}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg">
              <a href="#works">
                {t.hero.primaryCta}
                <ArrowRight />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 text-white hover:bg-emerald-600"
            >
              <a
                href={whatsappLink(t.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {t.hero.whatsappCta}
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Illustration column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <LaptopIllustration url={t.hero.browserUrl} />
        </motion.div>
      </div>
    </section>
  );
}
