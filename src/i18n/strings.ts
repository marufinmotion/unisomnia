export type Lang = 'ru' | 'tg';

export const LANGS: readonly Lang[] = ['ru', 'tg'] as const;

export const LANG_LABELS: Record<Lang, string> = {
  ru: 'RU',
  tg: 'TJ',
};

// All translations below.
// Tajik strings marked with "// REVIEW" — confirm these read natively before launch.
export const strings = {
  ru: {
    htmlLang: 'ru',
    siteName: 'Unisomnia',
    tagline: 'За рубеж? Найди информацию здесь.',
    nav: {
      apply: 'Каталог',
      about: 'О проекте',
      search: 'Поиск',
    },
    search: {
      open: 'Открыть поиск',
      close: 'Закрыть',
      placeholder: 'Поиск по сайту',
      heading: 'Поиск',
      empty: 'Введите название страны или ключевое слово.',
      noResults: 'Ничего не найдено.',
      jsRequired: 'Поиск требует JavaScript. Используйте каталог.',
    },
    landing: {
      headline: 'За рубеж?\nНайди информацию здесь.',
      cta: 'Погнали',
      whatEyebrow: 'Что это',
      whatTitle: 'Что такое Unisomnia',
      what1: 'Unisomnia — справочник для студентов из Таджикистана и стран СНГ, которые поступают в зарубежные университеты. Двенадцать стран, пошаговые инструкции, реальные цифры.',
      what2: 'Без воды и без агентских надбавок. Только проверенная информация о поступлении, документах, стипендиях и бюджете.',
      featuresEyebrow: 'Что внутри',
      f1Title: 'Каталог',
      f1Desc: 'Двенадцать стран — от Германии до Сингапура.',
      f2Title: 'Пошагово',
      f2Desc: 'От подготовки документов до визы.',
      f3Title: 'Реальные расходы',
      f3Desc: 'Аренда, еда, транспорт — в долларах.',
    },
    apply: {
      eyebrow: 'Каталог',
      heading: 'Куда подать?',
      sub: 'Двенадцать направлений. Выбирайте, читайте, готовьтесь.',
      filterPlaceholder: 'Найти страну…',
      empty: 'Ничего не найдено.',
      perMonth: '/мес.',
      comingSoonBadge: 'Скоро',
    },
    country: {
      back: '← Назад к каталогу',
      onThisPage: 'На этой странице',
      sections: {
        overview: 'Обзор',
        universities: 'Университеты',
        process: 'Процесс подачи',
        requirements: 'Требования',
        scholarships: 'Стипендии',
        cost: 'Стоимость жизни',
        safety: 'Безопасность',
        visa: 'Виза',
        links: 'Полезные ссылки',
      },
      quickFacts: {
        title: 'Кратко',
        capital: 'Столица',
        languages: 'Языки',
        currency: 'Валюта',
        monthly: 'Бюджет в месяц',
        usdSuffix: '/мес.',
      },
      botCta: {
        title: 'Хотите больше?',
        body: 'Спросите нашего Telegram-бота — он отвечает на конкретные вопросы по поступлению.',
        button: 'Открыть в Telegram',
      },
      timestamp: 'Информация актуальна на май 2026. Перед подачей заявки сверьтесь с официальными источниками.',
      comingSoon: {
        // Em-dash apposition keeps the country name in nominative — works for any
        // country slug without per-country locative-case data.
        bodyTemplate: '{country} — полное руководство появится в ближайшее время. А пока — посмотрите другие направления в каталоге.',
        cta: 'Назад к каталогу',
      },
    },
    about: {
      eyebrow: 'О проекте',
      heading: 'Кто мы и для кого',
      missionTitle: 'Миссия',
      mission: 'Помочь студентам из СНГ поступить в зарубежные университеты — без посредников, без воды, без скрытых платежей.',
      whoTitle: 'Для кого',
      who: 'Школьники и студенты, говорящие на русском или таджикском, которые рассматривают учёбу за рубежом.',
      sourcesTitle: 'Источники',
      sources: 'Официальные сайты университетов и министерств, обновляется регулярно. Если заметите устаревшую информацию — напишите.',
      contactTitle: 'Связаться',
      contact: 'Электронная почта',
    },
    footer: {
      about: 'О проекте',
      bot: 'Telegram-бот',
      contact: 'Связаться',
      copy: '© 2026 Unisomnia',
      switcherLabel: 'Язык',
    },
  },
  tg: {
    htmlLang: 'tg',
    siteName: 'Unisomnia',
    tagline: 'Хориҷа? Маълумоташро дар инҷо ёб.',
    nav: {
      apply: 'Феҳрист', // REVIEW
      about: 'Дар бораи лоиҳа', // REVIEW
      search: 'Ҷустуҷӯ', // REVIEW
    },
    search: {
      open: 'Ҷустуҷӯро кушоед', // REVIEW
      close: 'Бастан', // REVIEW
      placeholder: 'Ҷустуҷӯ дар сайт', // REVIEW
      heading: 'Ҷустуҷӯ', // REVIEW
      empty: 'Номи кишвар ё калимаи калидиро нависед.', // REVIEW
      noResults: 'Ҳеҷ чиз ёфт нашуд.', // REVIEW
      jsRequired: 'Ҷустуҷӯ JavaScript-ро талаб мекунад. Феҳристро истифода баред.', // REVIEW
    },
    landing: {
      headline: 'Хориҷа?\nМаълумоташро дар инҷо ёб.',
      cta: 'Бирем!',
      whatEyebrow: 'Ин чист', // REVIEW
      whatTitle: 'Unisomnia чист', // REVIEW
      what1: 'Unisomnia — роҳнамо барои донишҷӯёни Тоҷикистон ва кишварҳои ИДМ, ки ба донишгоҳҳои хориҷӣ дохил мешаванд. Дувоздаҳ кишвар, дастурҳои қадам ба қадам ва рақамҳои воқеӣ.', // REVIEW
      what2: 'Бе изофагӯӣ ва бе пардохти агентӣ. Танҳо маълумоти санҷидашуда оид ба қабул, ҳуҷҷатҳо, стипендияҳо ва буҷет.', // REVIEW
      featuresEyebrow: 'Дар дохил', // REVIEW
      f1Title: 'Феҳрист', // REVIEW
      f1Desc: 'Дувоздаҳ кишвар — аз Олмон то Сингапур.', // REVIEW
      f2Title: 'Қадам ба қадам', // REVIEW
      f2Desc: 'Аз омодасозии ҳуҷҷатҳо то виза.', // REVIEW
      f3Title: 'Хароҷоти воқеӣ', // REVIEW
      f3Desc: 'Иҷора, хӯрок, нақлиёт — бо доллар.', // REVIEW
    },
    apply: {
      eyebrow: 'Феҳрист', // REVIEW
      heading: 'Куҷо?',
      sub: 'Дувоздаҳ самт. Интихоб кунед, хонед, омода шавед.', // REVIEW
      filterPlaceholder: 'Кишварро ёбед…', // REVIEW
      empty: 'Ҳеҷ чиз ёфт нашуд.', // REVIEW
      perMonth: '/моҳ', // REVIEW
      comingSoonBadge: 'Ба зудӣ', // REVIEW
    },
    country: {
      back: '← Бозгашт ба феҳрист', // REVIEW
      onThisPage: 'Дар ин саҳифа', // REVIEW
      sections: {
        overview: 'Шарҳи умумӣ', // REVIEW
        universities: 'Донишгоҳҳо', // REVIEW
        process: 'Раванди дархост', // REVIEW
        requirements: 'Талабот', // REVIEW
        scholarships: 'Стипендияҳо', // REVIEW
        cost: 'Хароҷоти зиндагӣ', // REVIEW
        safety: 'Амният', // REVIEW
        visa: 'Виза', // REVIEW
        links: 'Пайвандҳои муфид', // REVIEW
      },
      quickFacts: {
        title: 'Мухтасар', // REVIEW
        capital: 'Пойтахт', // REVIEW
        languages: 'Забонҳо', // REVIEW
        currency: 'Асъор', // REVIEW
        monthly: 'Буҷети моҳона', // REVIEW
        usdSuffix: '/моҳ', // REVIEW
      },
      botCta: {
        title: 'Бештар мехоҳед?', // REVIEW
        body: 'Аз Telegram-боти мо пурсед — ӯ ба саволҳои мушаххас оид ба қабул ҷавоб медиҳад.', // REVIEW
        button: 'Дар Telegram кушоед', // REVIEW
      },
      timestamp: 'Маълумот то моҳи майи соли 2026 саҳеҳ аст. Пеш аз дархост, бо сарчашмаҳои расмӣ муқоиса кунед.', // REVIEW
      comingSoon: {
        bodyTemplate: 'Дастури пурраи {country} ба зудӣ нашр мешавад. Ҳозир — самтҳои дигарро дар феҳрист бубинед.', // REVIEW
        cta: 'Бозгашт ба феҳрист', // REVIEW
      },
    },
    about: {
      eyebrow: 'Дар бораи лоиҳа', // REVIEW
      heading: 'Мо кистем ва барои киҳо', // REVIEW
      missionTitle: 'Ҳадаф', // REVIEW
      mission: 'Кӯмак ба донишҷӯёни ИДМ дар дохилшавӣ ба донишгоҳҳои хориҷӣ — бе миёнаравон, бе изофагӯӣ, бе пардохтҳои пинҳон.', // REVIEW
      whoTitle: 'Барои киҳо', // REVIEW
      who: 'Хонандагон ва донишҷӯёни русӣ- ё тоҷикизабон, ки таҳсилро дар хориҷа меандешанд.', // REVIEW
      sourcesTitle: 'Манбаъҳо', // REVIEW
      sources: 'Сомонаҳои расмии донишгоҳҳо ва вазоратҳо, мунтазам нав карда мешавад. Агар маълумоти кӯҳнаро бубинед — нависед.', // REVIEW
      contactTitle: 'Тамос', // REVIEW
      contact: 'Почтаи электронӣ', // REVIEW
    },
    footer: {
      about: 'Дар бораи лоиҳа', // REVIEW
      bot: 'Telegram-бот',
      contact: 'Тамос', // REVIEW
      copy: '© 2026 Unisomnia',
      switcherLabel: 'Забон', // REVIEW
    },
  },
} as const;

export function getStrings(lang: string) {
  return strings[(lang as Lang) in strings ? (lang as Lang) : 'ru'];
}
