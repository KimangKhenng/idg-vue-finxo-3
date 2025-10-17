import { createI18n } from 'vue-i18n'
import km from './km/km.js';
import en from './en/en.js';
const i18n = createI18n({
    locale: 'km',
    fallbackLocale: 'en',
    messages: {
        km,
        en
    }
})
export default i18n;