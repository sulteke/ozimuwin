import type { Locale } from "@/lib/dictionary";

/**
 * A single portfolio project.
 *
 * The `image` field is optional: if you don't have a screenshot yet, leave it
 * out and a clean branded placeholder is shown automatically. When you have a
 * real screenshot, drop the file into `public/projects/` and set, for example,
 * `image: "/projects/the-office.png"`.
 */
export interface Project {
  /** Brand / project name (same in both languages). */
  name: string;
  /** Domain shown in the preview address bar (used only for the placeholder). */
  domain: string;
  /** Live site link. */
  url: string;
  /** Short description per language. */
  description: Record<Locale, string>;
  /** Small category label per language. */
  tag: Record<Locale, string>;
  /** Optional real screenshot path, e.g. "/projects/the-office.png". */
  image?: string;
  /** Tailwind gradient classes for the placeholder preview (fallback). */
  accent: string;
}

/**
 * ✏️  EDIT ME: add, remove or reorder projects here.
 * To add a new project, copy one object and change its fields.
 */
export const projects: Project[] = [
  {
    name: "The Office",
    domain: "theoffice-tdk.netlify.app",
    url: "https://theoffice-tdk.netlify.app/ru/",
    image: "/projects/the-office.png",
    tag: { ru: "Лаундж-бар", kk: "Лаунж-бар" },
    description: {
      ru: "Атмосферный сайт лаундж-бара: европейская кухня, кальян и бронирование столов.",
      kk: "Лаунж-бардың атмосфералық сайты: еуропалық ас, кальян және үстел брондау.",
    },
    accent: "from-slate-700 via-slate-800 to-slate-900",
  },
  {
    name: "Sunfood",
    domain: "sunfood.vercel.app",
    url: "https://sunfood.vercel.app",
    image: "/projects/sunfood.png",
    tag: { ru: "Сладости и подарки", kk: "Тәтті мен сыйлық" },
    description: {
      ru: "Сайт бутика сладостей: клубника в шоколаде и авторские подарочные наборы.",
      kk: "Тәтті бутигінің сайты: шоколадтағы құлпынай және авторлық сыйлық жинақтары.",
    },
    accent: "from-rose-500 via-red-600 to-rose-800",
  },
  {
    name: "Papa Duks",
    domain: "papaduks.vercel.app",
    url: "https://papaduks.vercel.app",
    image: "/projects/papa-duks.png",
    tag: { ru: "Фаст-фуд", kk: "Фаст-фуд" },
    description: {
      ru: "Сайт фастфуда с меню, корзиной и доставкой: донеры, бургеры и хот-доги.",
      kk: "Мәзірі, себеті мен жеткізуі бар фастфуд сайты: донер, бургер және хот-дог.",
    },
    accent: "from-amber-400 via-orange-500 to-orange-600",
  },
  {
    name: "Taldy Paris",
    domain: "taldy-paris.vercel.app",
    url: "https://taldy-paris.vercel.app",
    image: "/projects/taldy-paris.png",
    tag: { ru: "Ресторан", kk: "Мейрамхана" },
    description: {
      ru: "Сайт семейного ресторана восточной и европейской кухни с меню и банкетами.",
      kk: "Шығыс және еуропалық ас мәзірі мен банкеттері бар отбасылық мейрамхана сайты.",
    },
    accent: "from-emerald-500 via-green-600 to-teal-700",
  },
];
