"use client";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/lib/i18n";

export function Process() {
  const { t } = useLanguage();
  const steps = t.process.steps;

  return (
    <section id="process" className="bg-background py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading title={t.process.title} subtitle={t.process.subtitle} />

        <div className="mx-auto max-w-2xl">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <Reveal key={step} delay={index * 0.08}>
                <div className="flex gap-5">
                  {/* Number + connector */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground shadow-soft">
                      {index + 1}
                    </div>
                    {!isLast ? (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/40 to-border" />
                    ) : null}
                  </div>

                  {/* Step text */}
                  <div className="flex min-h-[2.75rem] flex-1 items-center pb-8 last:pb-0">
                    <div className="w-full rounded-2xl border border-border bg-card px-6 py-4 text-lg font-medium shadow-soft">
                      {step}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
