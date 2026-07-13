/**
 * All website text lives here, in Russian (ru) and Kazakh (kk).
 *
 * ✏️  EDIT ME: to change any wording on the site, edit the value here.
 * The Kazakh (kk) object must have exactly the same shape as Russian (ru) —
 * TypeScript will warn you if a field is missing.
 */

export type Locale = "ru" | "kk";

export interface PricingPlan {
  /** Plan name, e.g. "Одностраничный сайт". */
  name: string;
  /** Price label, e.g. "от 50 000 ₸". */
  price: string;
  /** List of what is included. */
  features: string[];
  /** Button text. */
  cta: string;
  /** Highlight this card as the recommended option. */
  highlighted?: boolean;
}

export interface Dictionary {
  /** Language name shown in the language switcher. */
  langName: string;
  /** Pre-filled text used when opening a WhatsApp chat. */
  whatsappMessage: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    works: string;
    pricing: string;
    process: string;
    whyMe: string;
    faq: string;
    contact: string;
    cta: string;
  };
  hero: {
    availability: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    whatsappCta: string;
    browserUrl: string;
  };
  works: {
    title: string;
    subtitle: string;
    openSite: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    popular: string;
    plans: PricingPlan[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: string[];
  };
  whyMe: {
    title: string;
    subtitle: string;
    cards: { title: string; description: string }[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    title: string;
    text: string;
    whatsapp: string;
    instagram: string;
    telegram: string;
  };
  footer: {
    tagline: string;
    navHeading: string;
    contactsHeading: string;
    rights: string;
  };
}

const ru: Dictionary = {
  langName: "Русский",
  whatsappMessage: "Здравствуйте! Хочу заказать сайт для бизнеса.",
  meta: {
    title: "Айсултан — современные сайты для бизнеса",
    description:
      "Создаю красивые и удобные сайты для кофеен, ресторанов, магазинов и салонов. Быстрая разработка, адаптация под телефон, подключение WhatsApp.",
  },
  nav: {
    works: "Работы",
    pricing: "Стоимость",
    process: "Как я работаю",
    whyMe: "Почему я",
    faq: "Вопросы",
    contact: "Контакты",
    cta: "Написать",
  },
  hero: {
    availability: "Принимаю новые проекты",
    title: "Создаю современные сайты для бизнеса",
    subtitle:
      "Помогаю кофейням, ресторанам, магазинам и другим компаниям получать больше клиентов с помощью красивых и удобных сайтов.",
    primaryCta: "Посмотреть примеры",
    whatsappCta: "Написать в WhatsApp",
    browserUrl: "vash-biznes.kz",
  },
  works: {
    title: "Мои работы",
    subtitle: "Несколько сайтов, которые я сделал для реального бизнеса.",
    openSite: "Открыть сайт",
  },
  pricing: {
    title: "Стоимость",
    subtitle: "Понятные цены без скрытых платежей. Выберите подходящий вариант.",
    popular: "Популярный выбор",
    plans: [
      {
        name: "Одностраничный сайт",
        price: "от 30 000 ₸",
        cta: "Оставить заявку",
        features: [
          "Современный дизайн",
          "Адаптация под телефон",
          "Форма заявки",
          "Кнопка WhatsApp",
          "Google Maps",
        ],
      },
      {
        name: "Сайт-каталог",
        price: "от 50 000 ₸",
        cta: "Оставить заявку",
        highlighted: true,
        features: [
          "Несколько страниц",
          "Каталог товаров",
          "Категории",
          "Удобная навигация",
          "Адаптация под телефон",
        ],
      },
      {
        name: "Индивидуальный проект",
        price: "Цена обсуждается",
        cta: "Оставить заявку",
        features: [
          "Любой функционал",
          "Интеграции и онлайн-оплата",
          "Уникальный дизайн",
          "Индивидуальные условия",
        ],
      },
    ],
  },
  process: {
    title: "Как я работаю",
    subtitle: "Простой и понятный процесс — от заявки до готового сайта.",
    steps: [
      "Вы оставляете заявку",
      "Мы обсуждаем проект",
      "Я делаю дизайн",
      "Разрабатываю сайт",
      "Вы получаете готовый сайт",
    ],
  },
  whyMe: {
    title: "Почему выбирают меня",
    subtitle: "Делаю сайты, которые приятно открывать и удобно использовать.",
    cards: [
      {
        title: "Современный дизайн",
        description: "Чистый и аккуратный вид, которому доверяют клиенты.",
      },
      {
        title: "Быстрая разработка",
        description: "Запускаю сайт за несколько дней, без долгого ожидания.",
      },
      {
        title: "Работает на телефоне",
        description: "Удобно открывается на любом устройстве и экране.",
      },
      {
        title: "Подключение WhatsApp",
        description: "Клиенты пишут вам в один клик прямо с сайта.",
      },
      {
        title: "Высокая скорость сайта",
        description: "Страницы загружаются мгновенно и не теряют клиентов.",
      },
      {
        title: "Поддержка после запуска",
        description: "Помогаю с обновлениями и отвечаю на ваши вопросы.",
      },
    ],
  },
  faq: {
    title: "Частые вопросы",
    subtitle: "Собрал ответы на вопросы, которые задают чаще всего.",
    items: [
      {
        question: "Сколько занимает разработка?",
        answer:
          "В среднем от 3 до 7 дней в зависимости от сложности проекта. Точные сроки я называю после короткого обсуждения задач.",
      },
      {
        question: "Можно ли менять информацию?",
        answer:
          "Да. Я показываю, как самостоятельно менять тексты, фото и цены, либо вношу нужные изменения сам.",
      },
      {
        question: "Будет ли сайт работать на телефоне?",
        answer:
          "Конечно. Все сайты я делаю адаптивными — они одинаково удобно открываются на телефоне, планшете и компьютере.",
      },
      {
        question: "Можно ли подключить WhatsApp?",
        answer:
          "Да. Добавлю кнопку WhatsApp, чтобы клиенты писали вам в один клик, а также форму заявки и карту.",
      },
    ],
  },
  contact: {
    title: "Обсудим ваш проект",
    text: "Напишите мне, и мы обсудим ваш будущий сайт.",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    telegram: "Telegram",
  },
  footer: {
    tagline: "Разработка сайтов для бизнеса",
    navHeading: "Разделы",
    contactsHeading: "Контакты",
    rights: "Все права защищены.",
  },
};

const kk: Dictionary = {
  langName: "Қазақша",
  whatsappMessage: "Сәлеметсіз бе! Бизнеске сайт жасатқым келеді.",
  meta: {
    title: "Айсултан — бизнеске арналған заманауи сайттар",
    description:
      "Кофеханаларға, мейрамханаларға, дүкендер мен салондарға әдемі әрі ыңғайлы сайттар жасаймын. Жылдам әзірлеу, телефонға бейімделу, WhatsApp қосу.",
  },
  nav: {
    works: "Жұмыстар",
    pricing: "Бағасы",
    process: "Жұмыс тәртібі",
    whyMe: "Неге мен",
    faq: "Сұрақтар",
    contact: "Байланыс",
    cta: "Жазу",
  },
  hero: {
    availability: "Жаңа жобаларды қабылдаймын",
    title: "Бизнеске арналған заманауи сайттар жасаймын",
    subtitle:
      "Кофеханаларға, мейрамханаларға, дүкендерге және басқа компанияларға әдемі әрі ыңғайлы сайттар арқылы көбірек клиент табуға көмектесемін.",
    primaryCta: "Жұмыстарды көру",
    whatsappCta: "WhatsApp-қа жазу",
    browserUrl: "sizdin-biznes.kz",
  },
  works: {
    title: "Менің жұмыстарым",
    subtitle: "Нақты бизнеске жасаған бірнеше сайтым.",
    openSite: "Сайтты ашу",
  },
  pricing: {
    title: "Бағасы",
    subtitle: "Жасырын төлемсіз түсінікті бағалар. Өзіңізге ыңғайлысын таңдаңыз.",
    popular: "Танымал таңдау",
    plans: [
      {
        name: "Бір беттік сайт",
        price: "30 000 ₸-ден",
        cta: "Өтінім қалдыру",
        features: [
          "Заманауи дизайн",
          "Телефонға бейімделу",
          "Өтінім формасы",
          "WhatsApp түймесі",
          "Google Maps",
        ],
      },
      {
        name: "Каталог-сайт",
        price: "50 000 ₸-ден",
        cta: "Өтінім қалдыру",
        highlighted: true,
        features: [
          "Бірнеше бет",
          "Тауарлар каталогы",
          "Санаттар",
          "Ыңғайлы навигация",
          "Телефонға бейімделу",
        ],
      },
      {
        name: "Жеке жоба",
        price: "Бағасы келісіледі",
        cta: "Өтінім қалдыру",
        features: [
          "Кез келген функционал",
          "Интеграция және онлайн төлем",
          "Бірегей дизайн",
          "Жеке шарттар",
        ],
      },
    ],
  },
  process: {
    title: "Мен қалай жұмыс істеймін",
    subtitle: "Өтінімнен дайын сайтқа дейінгі қарапайым әрі түсінікті процесс.",
    steps: [
      "Сіз өтінім қалдырасыз",
      "Жобаны талқылаймыз",
      "Мен дизайн жасаймын",
      "Сайтты әзірлеймін",
      "Сіз дайын сайт аласыз",
    ],
  },
  whyMe: {
    title: "Неге мені таңдайды",
    subtitle: "Ашуға жағымды әрі қолдануға ыңғайлы сайттар жасаймын.",
    cards: [
      {
        title: "Заманауи дизайн",
        description: "Клиенттер сенетін таза әрі ұқыпты көрініс.",
      },
      {
        title: "Жылдам әзірлеу",
        description: "Сайтты бірнеше күнде іске қосамын, ұзақ күтусіз.",
      },
      {
        title: "Телефонда жұмыс істейді",
        description: "Кез келген құрылғы мен экранда ыңғайлы ашылады.",
      },
      {
        title: "WhatsApp қосу",
        description: "Клиенттер сайттан бір рет басып жаза алады.",
      },
      {
        title: "Сайттың жоғары жылдамдығы",
        description: "Беттер лезде жүктеледі, клиент жоғалмайды.",
      },
      {
        title: "Іске қосқаннан кейінгі қолдау",
        description: "Жаңартуларға көмектесемін және сұрақтарға жауап беремін.",
      },
    ],
  },
  faq: {
    title: "Жиі қойылатын сұрақтар",
    subtitle: "Ең жиі қойылатын сұрақтарға жауап жинадым.",
    items: [
      {
        question: "Әзірлеу қанша уақыт алады?",
        answer:
          "Жобаның күрделілігіне байланысты орта есеппен 3–7 күн. Нақты мерзімді тапсырмаларды талқылағаннан кейін айтамын.",
      },
      {
        question: "Ақпаратты өзгертуге бола ма?",
        answer:
          "Иә. Мәтін, фото және бағаны өзіңіз өзгертуді көрсетемін немесе қажет өзгерістерді өзім енгіземін.",
      },
      {
        question: "Сайт телефонда жұмыс істей ме?",
        answer:
          "Әрине. Барлық сайттарды бейімделгіш етіп жасаймын — олар телефонда, планшетте және компьютерде бірдей ыңғайлы ашылады.",
      },
      {
        question: "WhatsApp қосуға бола ма?",
        answer:
          "Иә. Клиенттер сізге бір рет басып жаза алуы үшін WhatsApp түймесін, сондай-ақ өтінім формасы мен картаны қосамын.",
      },
    ],
  },
  contact: {
    title: "Жобаңызды талқылайық",
    text: "Маған жазыңыз, болашақ сайтыңызды бірге талқылаймыз.",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    telegram: "Telegram",
  },
  footer: {
    tagline: "Бизнеске арналған сайттар әзірлеу",
    navHeading: "Бөлімдер",
    contactsHeading: "Байланыс",
    rights: "Барлық құқық қорғалған.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { ru, kk };

/** Ordered list of locales for the language switcher. */
export const locales: Locale[] = ["ru", "kk"];
