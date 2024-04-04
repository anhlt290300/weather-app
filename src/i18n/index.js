import { createI18n } from 'vue-i18n'
import en from './languege/en.json'
import vi from './languege/vi.json'
export const i18n = createI18n({
  legacy: false, // Vue 3.x only
  locale: 'vi', // default locale
  messages: {
    en: en,
    vi: vi
  }
})
