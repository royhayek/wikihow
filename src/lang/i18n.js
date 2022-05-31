// libs
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// languages
import en from './en';
import de from './de';

export default i18n.use(initReactI18next).init({
  lng: 'de',
  resources: {
    de: { translation: de },
    en: { translation: en }
  },
  fallbackLng: 'de',
  interpolation: { escapeValue: false }
});
