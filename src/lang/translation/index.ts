import screens, { type ScreensDefinition } from './screens';
import common, { type CommonDefinition } from './common';

export type TranslationDefinition = {
  common: CommonDefinition,
  screens: ScreensDefinition,
}

const fr: TranslationDefinition = {
  common: common.fr,
  screens: screens.fr,
};

const en: TranslationDefinition = {
  common: common.en,
  screens: screens.en,
};

export default {
  fr,
  en,
};
