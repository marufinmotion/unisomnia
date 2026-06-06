// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

/**
 * remarkCountrySections — single zero-dep remark plugin.
 *  1. Parses trailing `{#id}` on any heading and emits a stable HTML id
 *     so anchor links survive translation (RU/TG headings, English ids).
 *  2. For each H2, injects an editorial section-marker block above it
 *     (rule + "01 — Heading" eyebrow), per the country page design.
 *
 * Uses mdast `data.hName` overrides to produce real HTML elements,
 * because Astro doesn't enable `allowDangerousHtml` so raw `html` nodes
 * are stripped.
 */
function remarkCountrySections() {
  return (tree) => {
    if (!tree.children || !Array.isArray(tree.children)) return;
    const newChildren = [];
    let sectionNum = 0;
    for (const node of tree.children) {
      if (node.type === 'heading' && Array.isArray(node.children)) {
        // 1. Parse {#id}
        const last = node.children[node.children.length - 1];
        if (last && last.type === 'text') {
          const m = last.value.match(/\s*\{#([\w-]+)\}\s*$/);
          if (m) {
            last.value = last.value.replace(/\s*\{#[\w-]+\}\s*$/, '');
            node.data ||= {};
            node.data.hProperties ||= {};
            node.data.hProperties.id = m[1];
          }
        }

        // 2. Inject section marker above each H2
        if (node.depth === 2) {
          sectionNum += 1;
          const label = node.children
            .filter((c) => c.type === 'text')
            .map((c) => c.value)
            .join('')
            .trim();
          const num = String(sectionNum).padStart(2, '0');
          newChildren.push({
            type: 'paragraph',
            data: {
              hName: 'div',
              hProperties: {
                className: 'section-marker reveal',
                'aria-hidden': 'true',
                'data-section-reveal': '',
              },
            },
            children: [
              {
                type: 'paragraph',
                data: {
                  hName: 'span',
                  hProperties: { className: 'section-rule' },
                },
                children: [],
              },
              {
                type: 'paragraph',
                data: {
                  hName: 'span',
                  hProperties: { className: 'section-eyebrow' },
                },
                children: [{ type: 'text', value: `${num} — ${label}` }],
              },
            ],
          });
        }
      }
      newChildren.push(node);
    }
    tree.children = newChildren;
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://unisomnia.org',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'tg'],
    routing: { prefixDefaultLocale: true },
  },

  markdown: {
    remarkPlugins: [remarkCountrySections],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ru',
        locales: { ru: 'ru', tg: 'tg' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },

  // imageService: 'compile' runs Sharp at BUILD time and emits static
  // optimized images (webp in _astro/). Required because every page here is
  // prerendered and the Cloudflare Workers runtime cannot run Sharp — the
  // default on-demand /_image endpoint 404s on the live deploy.
  adapter: cloudflare({
    imageService: 'compile',
  }),
});