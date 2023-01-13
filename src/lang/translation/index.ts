import screens, { type ScreensDefinition } from './screens';
import common, { type CommonDefinition } from './common';
import errors, { type ErrorsDefinition } from './errors';

export type TranslationDefinition = {
  common: CommonDefinition,
  screens: ScreensDefinition,
  errors: ErrorsDefinition,
}

const fr: TranslationDefinition = {
  common: common.fr,
  screens: screens.fr,
  errors: errors.fr,
};

const en: TranslationDefinition = {
  common: common.en,
  screens: screens.en,
  errors: errors.en,
};

export default {
  fr,
  en,
};
