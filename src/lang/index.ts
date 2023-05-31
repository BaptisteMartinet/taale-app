import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';
import translation, { type TranslationDefinition } from './translation';

const resources: Record<string, TranslationDefinition> = {
  en: translation.en,
  fr: translation.fr,
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getLocales()[0]?.languageCode,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
