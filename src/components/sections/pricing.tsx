"use client";

import { Check } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="bg-secondary/40 py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading title={t.pricing.title} subtitle={t.pricing.subtitle} />

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {t.pricing.plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.08} className="h-full">
              <Card
                className={cn(
                  "relative flex h-full flex-col p-8",
                  plan.highlighted
                    ? "border-primary/40 shadow-soft-lg ring-1 ring-primary/20"
                    : "",
                )}
              >
                {plan.highlighted ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground shadow-soft">
                    {t.pricing.popular}
                  </span>
                ) : null}

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-3xl font-bold text-primary">
                    {plan.price}
                  </p>
                </div>

                <ul className="mt-8 flex flex-1 flex-col gap-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-[15px] text-foreground/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  variant={plan.highlighted ? "default" : "outline"}
                  className="mt-8 w-full"
                >
                  <a href="#contact">{plan.cta}</a>
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
