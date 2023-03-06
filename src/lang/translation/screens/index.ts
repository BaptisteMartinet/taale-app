import login, { type LoginScreenDefinition } from './login';
import register, { type RegisterScreenDefinition } from './register';
import onboarding, { type OnboardingScreenDefinition } from './onboarding';

export type ScreensDefinition = {
  login: LoginScreenDefinition,
  register: RegisterScreenDefinition,
  onboarding: OnboardingScreenDefinition,
}

const fr: ScreensDefinition = {
  login: login.fr,
  register: register.fr,
  onboarding: onboarding.fr,
};

const en: ScreensDefinition = {
  login: login.en,
  register: register.en,
  onboarding: onboarding.en,
};

export default {
  fr,
  en,
};
