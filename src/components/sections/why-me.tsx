"use client";

import {
  Gauge,
  LifeBuoy,
  MessageCircle,
  Rocket,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";

/**
 * Icons for the "why me" cards, in the same order as the dictionary entries.
 * Keeping icons here means translations stay text-only and easy to edit.
 */
const icons: LucideIcon[] = [
  Sparkles, // Современный дизайн
  Rocket, // Быстрая разработка
  Smartphone, // Работает на телефоне
  MessageCircle, // Подключение WhatsApp
  Gauge, // Высокая скорость сайта
  LifeBuoy, // Поддержка после запуска
];

export function WhyMe() {
  const { t } = useLanguage();

  return (
    <section id="why-me" className="bg-secondary/40 py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading title={t.whyMe.title} subtitle={t.whyMe.subtitle} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.whyMe.cards.map((card, index) => {
            const Icon = icons[index] ?? Sparkles;
            return (
              <Reveal key={card.title} delay={index * 0.06}>
                <Card className="h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
