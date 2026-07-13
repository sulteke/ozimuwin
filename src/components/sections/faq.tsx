"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/lib/i18n";

export function Faq() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading title={t.faq.title} subtitle={t.faq.subtitle} />

        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Accordion type="single" collapsible className="flex flex-col gap-4">
              {t.faq.items.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
