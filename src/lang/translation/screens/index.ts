import login, { type LoginScreenDefinition } from './login';
import register, { type RegisterScreenDefinition } from './register';
import onboarding, { type OnboardingScreenDefinition } from './onboarding';
import home, { type HomeScreenDefinition } from './home';

export type ScreensDefinition = {
  login: LoginScreenDefinition,
  register: RegisterScreenDefinition,
  onboarding: OnboardingScreenDefinition,
  home: HomeScreenDefinition,
}

const fr: ScreensDefinition = {
  login: login.fr,
  register: register.fr,
  onboarding: onboarding.fr,
  home: home.fr,
};

const en: ScreensDefinition = {
  login: login.en,
  register: register.en,
  onboarding: onboarding.en,
  home: home.en,
};

export default {
  fr,
  en,
};
