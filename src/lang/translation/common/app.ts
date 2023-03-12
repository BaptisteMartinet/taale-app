export type AppDefinition = {
  screens: {
    home: string,
    login: string,
    register: string,
    onboarding: string,
  },
};

const fr: AppDefinition = {
  screens: {
    home: "L'histoire du jour",
    login: "Se connecter",
    register: "Créer un compte",
    onboarding: "À propos",
  },
};

const en: AppDefinition = {
  screens: {
    home: "Today's story",
    login: "Login",
    register: "Register",
    onboarding: "About",
  },
};

export default {
  fr,
  en
};
