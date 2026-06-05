export { strings, getStrings, LANGS, LANG_LABELS } from './strings';
export type { Lang } from './strings';

export const CONTACT_EMAIL = 'hello@unisomnia.org';
export const TELEGRAM_BOT_URL = 'https://t.me/UniApplyAssistantBot';

// Country slug → ISO 3166-1 alpha-2 (lowercase) for flag-icons.
// URL slug stays /apply/uk/ (legacy stability); flag uses gb.
export const COUNTRY_ISO: Record<string, string> = {
  germany: 'de',
  usa: 'us',
  uk: 'gb',
  turkey: 'tr',
  uae: 'ae',
  china: 'cn',
  'south-korea': 'kr',
  singapore: 'sg',
  malaysia: 'my',
  canada: 'ca',
  'czech-republic': 'cz',
  uzbekistan: 'uz',
  kazakhstan: 'kz',
  kyrgyzstan: 'kg',
};
