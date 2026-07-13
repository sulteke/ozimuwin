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
  /** Domain shown in the preview address bar, e.g. "theoffice.kz". */
  domain: string;
  /** Live site link. Replace "#" with the real URL. */
  url: string;
  /** Short description per language. */
  description: Record<Locale, string>;
  /** Small category label per language. */
  tag: Record<Locale, string>;
  /** Optional real screenshot path, e.g. "/projects/the-office.png". */
  image?: string;
  /** Tailwind gradient classes for the placeholder preview. */
  accent: string;
}

/**
 * ✏️  EDIT ME: add, remove or reorder projects here.
 * To add a new project, copy one object and change its fields.
 */
export const projects: Project[] = [
  {
    name: "The Office",
    domain: "theoffice.kz",
    url: "#",
    tag: { ru: "Ресторан", kk: "Мейрамхана" },
    description: {
      ru: "Стильный сайт для ресторана с меню и онлайн-бронированием.",
      kk: "Мәзірі мен онлайн брондауы бар мейрамханаға арналған стильді сайт.",
    },
    accent: "from-slate-700 via-slate-800 to-slate-900",
  },
  {
    name: "Sunfood",
    domain: "sunfood.kz",
    url: "#",
    tag: { ru: "Доставка еды", kk: "Тамақ жеткізу" },
    description: {
      ru: "Сайт доставки здоровой еды с корзиной и удобным заказом.",
      kk: "Себеті мен ыңғайлы тапсырысы бар дұрыс тамақ жеткізу сайты.",
    },
    accent: "from-emerald-400 via-emerald-500 to-green-600",
  },
  {
    name: "Papa Duks",
    domain: "papaduks.kz",
    url: "#",
    tag: { ru: "Бургерная", kk: "Бургерхана" },
    description: {
      ru: "Яркий сайт для бургерной с меню и акциями.",
      kk: "Мәзірі мен акциялары бар бургерханаға арналған жарқын сайт.",
    },
    accent: "from-amber-400 via-orange-500 to-orange-600",
  },
  {
    name: "Taldy Paris",
    domain: "taldyparis.kz",
    url: "#",
    tag: { ru: "Магазин", kk: "Дүкен" },
    description: {
      ru: "Сайт-каталог для магазина с категориями и витриной товаров.",
      kk: "Санаттары мен тауар витринасы бар дүкенге арналған каталог-сайт.",
    },
    accent: "from-rose-400 via-pink-500 to-fuchsia-600",
  },
];
