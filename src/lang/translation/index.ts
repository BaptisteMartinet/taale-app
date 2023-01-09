import screens, { type ScreensDefinition } from './screens';

export type TranslationDefinition = {
  screens: ScreensDefinition,
}

const fr: TranslationDefinition = {
  screens: screens.fr,
};

const en: TranslationDefinition = {
  screens: screens.en,
};

export default {
  fr,
  en,
};
