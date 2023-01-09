import login, { type LoginScreenDefinition } from './login';

export type ScreensDefinition = {
  login: LoginScreenDefinition,
}

const fr: ScreensDefinition = {
  login: login.fr,
};

const en: ScreensDefinition = {
  login: login.en,
};

export default {
  fr,
  en,
};
