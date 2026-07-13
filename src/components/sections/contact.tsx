"use client";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import {
  InstagramIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { useLanguage } from "@/lib/i18n";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-background py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-b from-accent/70 to-card p-10 text-center shadow-soft sm:p-14">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              {t.contact.text}
            </p>

            <div className="mt-8 flex flex-col flex-wrap justify-center gap-3 sm:flex-row">
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
                  {t.contact.whatsapp}
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white hover:opacity-90"
              >
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon className="h-5 w-5" />
                  {t.contact.instagram}
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-sky-500 text-white hover:bg-sky-600"
              >
                <a
                  href={siteConfig.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TelegramIcon className="h-5 w-5" />
                  {t.contact.telegram}
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
