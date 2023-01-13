import login, { type LoginScreenDefinition } from './login';
import register, { type RegisterScreenDefinition } from './register';

export type ScreensDefinition = {
  login: LoginScreenDefinition,
  register: RegisterScreenDefinition,
}

const fr: ScreensDefinition = {
  login: login.fr,
  register: register.fr,
};

const en: ScreensDefinition = {
  login: login.en,
  register: register.en,
};

export default {
  fr,
  en,
};
