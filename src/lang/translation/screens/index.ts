import login, { type LoginScreenDefinition } from './login';
import register, { type RegisterScreenDefinition } from './register';
import onboarding, { type OnboardingScreenDefinition } from './onboarding';
import home, { type HomeScreenDefinition } from './home';
import partialStory, { type PartialStoryScreenDefinition } from './partialStory';

export type ScreensDefinition = {
  login: LoginScreenDefinition,
  register: RegisterScreenDefinition,
  onboarding: OnboardingScreenDefinition,
  home: HomeScreenDefinition,
  partialStory: PartialStoryScreenDefinition,
}

const fr: ScreensDefinition = {
  login: login.fr,
  register: register.fr,
  onboarding: onboarding.fr,
  home: home.fr,
  partialStory: partialStory.fr,
};

const en: ScreensDefinition = {
  login: login.en,
  register: register.en,
  onboarding: onboarding.en,
  home: home.en,
  partialStory: partialStory.en,
};

export default {
  fr,
  en,
};
