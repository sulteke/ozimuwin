/**
 * Central place for the owner's contact details and links.
 *
 * ✏️  EDIT ME: replace the placeholder values below with real accounts.
 * Every button on the site (Hero, Pricing, Contact, Footer) reads from here,
 * so you only need to change a value once.
 */
export const siteConfig = {
  /** Owner name shown in the header and footer. */
  name: "Айсултан",

  /**
   * WhatsApp number in international format WITHOUT "+", spaces or dashes.
   * Example for Kazakhstan: 7 700 123 45 67  ->  "77001234567"
   */
  whatsappNumber: "77777985131",

  /** Full profile links. */
  instagramUrl: "https://instagram.com/site.by.aisultan",
  telegramUrl: "https://t.me/e_sultan_b",

  /** Optional e-mail (not shown by default, handy to keep here). */
  email: "hello@example.com",
} as const;

/**
 * Build a WhatsApp "click to chat" link with an optional pre-filled message.
 * @param message text that will appear in the chat input
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
