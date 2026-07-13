"use client";

import {
  InstagramIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { useLanguage } from "@/lib/i18n";
import { siteConfig, whatsappLink } from "@/lib/site-config";

const footerNav = [
  { key: "works", href: "#works" },
  { key: "pricing", href: "#pricing" },
  { key: "process", href: "#process" },
  { key: "whyMe", href: "#why-me" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" },
] as const;

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const socials = [
    {
      label: t.contact.whatsapp,
      href: whatsappLink(t.whatsappMessage),
      Icon: WhatsAppIcon,
      hover: "hover:bg-emerald-500",
    },
    {
      label: t.contact.instagram,
      href: siteConfig.instagramUrl,
      Icon: InstagramIcon,
      hover: "hover:bg-pink-500",
    },
    {
      label: t.contact.telegram,
      href: siteConfig.telegramUrl,
      Icon: TelegramIcon,
      hover: "hover:bg-sky-500",
    },
  ];

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container-px py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-lg font-bold tracking-tight">{siteConfig.name}</p>
            <p className="mt-2 max-w-xs text-muted-foreground">
              {t.footer.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ label, href, Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-transparent hover:text-white ${hover}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {t.footer.navHeading}
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="text-foreground/80 transition-colors hover:text-primary"
                  >
                    {t.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {t.footer.contactsHeading}
            </p>
            <ul className="mt-4 space-y-2.5">
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 transition-colors hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          © {year} {siteConfig.name}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
