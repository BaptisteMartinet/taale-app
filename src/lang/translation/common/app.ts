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
    home: "Accueil",
    login: "Se connecter",
    register: "Créer un compte",
    onboarding: "À propos",
  },
};

const en: AppDefinition = {
  screens: {
    home: "Home",
    login: "Login",
    register: "Register",
    onboarding: "About",
  },
};

export default {
  fr,
  en
};
