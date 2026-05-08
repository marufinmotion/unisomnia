# Unisomnia

Static informational site helping students from Tajikistan and other CIS countries navigate university applications abroad. Bilingual: Russian and Tajik. Sister project to the [@UniApplyAssistantBot](https://t.me/UniApplyAssistantBot) Telegram bot.

> *За рубеж? Найди информацию здесь.* / *Хориҷа? Маълумоташро дар инҷо ёб.*

---

## Tech stack

- **Framework**: [Astro](https://astro.build/) (static, no SSR)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first, `@theme` block)
- **Content**: Astro Content Collections (Markdown + Zod-validated frontmatter)
- **i18n**: Astro's built-in i18n routing (`/ru/`, `/tg/`)
- **Search**: [Pagefind](https://pagefind.app/) — client-side, build-time indexed
- **Hosting**: Cloudflare Pages (auto-deploy from `main`)

No backend. No database. No client-side analytics. The only `localStorage` use is to remember the visitor's language preference for the root redirect.

---

## Prerequisites

- **Node** ≥ 20 (pinned in `.nvmrc`)
- **npm** ≥ 10 (ships with Node 20)

---

## Local development

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:4321
npm run build        # build to dist/ + generate Pagefind index
npm run preview      # serve the built dist/ for final verification
```

> **Note:** Pagefind only generates an index during `build` (postbuild step). Search inside the modal works in `preview` mode but not in `dev` — that's expected.

---

## Project structure

```
unisomnia/
├── astro.config.mjs        # i18n config, custom remark plugin (section markers)
├── public/
│   ├── _headers            # Cloudflare cache + security headers
│   ├── _redirects          # Cloudflare URL hygiene
│   ├── logo.svg            # Standalone wordmark (black)
│   ├── logo-light.svg      # Standalone wordmark (beige, for dark bg)
│   └── favicon.svg
└── src/
    ├── content.config.ts   # Zod schema for country collection
    ├── content/
    │   └── countries/
    │       ├── ru/         # Russian content for each country
    │       └── tg/         # Tajik content for each country
    ├── i18n/
    │   ├── index.ts        # Re-exports + constants (CONTACT_EMAIL, TELEGRAM_BOT_URL)
    │   └── strings.ts      # All UI strings, RU + TG (Tajik marked // REVIEW)
    ├── components/         # Astro components (Header, Footer, Logo, SearchModal, etc.)
    ├── layouts/
    │   └── Layout.astro    # Page shell — sets <html lang>, loads fonts, mounts SearchModal
    ├── pages/
    │   ├── index.astro     # Root redirect (/ → /ru/ or /tg/ via localStorage)
    │   └── [lang]/
    │       ├── index.astro          # Landing
    │       ├── about.astro
    │       ├── search.astro         # No-JS search fallback
    │       └── apply/
    │           ├── index.astro      # Catalogue
    │           └── [country].astro  # Country detail (handles live + coming-soon)
    └── styles/
        └── global.css      # Design tokens (@theme), country-prose styles
```

---

## Adding a new country

The catalogue is driven entirely by Markdown files in `src/content/countries/{lang}/{slug}.md`. To add a country:

### 1. Create the Russian file

`src/content/countries/ru/argentina.md`:

```markdown
---
slug: "argentina"
name: "Аргентина"
flag: "🇦🇷"
capital: "Буэнос-Айрес"
languages: ["Испанский", "Английский"]
currency: "ARS"
monthlyCostUSD: 700
order: 13
tag: "Испанский · Бесплатные госвузы"
---

## Обзор {#overview}

Two or three paragraphs of overview text…

## Топовые университеты {#universities}

- **University name** — city. Brief one-line description.
- …

## Процесс подачи {#process}

1. Step one…
2. Step two…

## Требования {#requirements}

- Document or requirement
- …

## Стипендии {#scholarships}

- **Program name** — eligibility criteria.

## Стоимость жизни {#cost}

- **Аренда**: range and notes.
- **Еда**: range.
- …
- **Итого**: ~XXX–YYY $/мес.

## Безопасность {#safety}

One or two paragraphs.

## Виза {#visa}

- Visa type and requirements.

## Полезные ссылки {#links}

- [Site name](https://example.com) — what it is.
```

### 2. Create the matching Tajik file

`src/content/countries/tg/argentina.md` — same frontmatter (with Tajik `name` and translated `languages`), and a translated body. **Always include the DRAFT comment** at the top so the content can be flagged for native-speaker review:

```markdown
---
slug: "argentina"
name: "Аргентина"
flag: "🇦🇷"
…
---

<!-- DRAFT: Tajik translation needs native-speaker review -->

## Шарҳи умумӣ {#overview}
…
```

### 3. Schema rules to know

- The `{#anchor}` suffix on each H2 is required — those English IDs power the on-page nav and stay stable across translations.
- Section order is fixed: `overview · universities · process · requirements · scholarships · cost · safety · visa · links`. The country page template renders the on-page nav from this order, so the H2 anchor IDs must match.
- `slug` in frontmatter MUST match the filename (`argentina.md` → `slug: "argentina"`).
- `order` controls the catalogue position. Use a number not yet taken.
- `monthlyCostUSD` must be a positive integer.

That's it — no template editing. Run `npm run build` and the catalogue picks up the new country automatically. Pagefind reindexes on the postbuild step.

### 4. Don't forget

- Numbered section markers ("01 — Обзор", "02 — Топ университеты"…) are generated automatically by the remark plugin in `astro.config.mjs`. You don't write them by hand.
- The "Информация актуальна на …" timestamp is rendered from `src/i18n/strings.ts`, not from the markdown body. Update there if you want a different date.

---

## Editing existing country content

Just open `src/content/countries/{lang}/{slug}.md` and edit the body. Frontmatter changes (e.g. updating `monthlyCostUSD` after currency changes) propagate to the catalogue card and the Quick Facts box automatically.

If you change a section heading's text, **don't change its `{#anchor}` id** — the on-page nav and any inbound links rely on those English slugs.

---

## Switching a country from "coming-soon" to "live"

1. Open `src/content/countries/ru/{slug}.md` and `src/content/countries/tg/{slug}.md`.
2. Remove the `status: "coming-soon"` line from the frontmatter (or set it to `"live"`).
3. Replace the placeholder body with full content matching the existing live countries' shape (9 sections in the order above). Use Germany or USA as a reference.
4. `npm run build` — the catalogue card automatically loses its "Скоро" / "Ба зудӣ" badge, the country page renders the full template, and Pagefind picks the new content into the search index.

---

## Deployment

The repository is connected to **Cloudflare Pages**. Pushing to `main` triggers an automatic build and deploy. There's nothing to do manually.

Build settings on Cloudflare:

- **Framework preset**: Astro
- **Build command**: `npm run build`
- **Build output**: `dist`
- **Node version**: read from `.nvmrc` (currently `20`)
- **Environment variables**: none required

Custom domain: **unisomnia.org** (DNS managed by Cloudflare).

`public/_headers` and `public/_redirects` are picked up by Cloudflare Pages automatically — no separate configuration UI step.

---

## License

MIT. See `LICENSE` (or add one if not present).
