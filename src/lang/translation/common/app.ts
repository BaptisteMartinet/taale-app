export type AppDefinition = {
  screens: {
    home: string,
    login: string,
    register: string,
    partialStory: string,
  },
};

const fr: AppDefinition = {
  screens: {
    home: "Accueil",
    login: "Se connecter",
    register: "Créer un compte",
    partialStory: "Participer",
  },
};

const en: AppDefinition = {
  screens: {
    home: "Home",
    login: "Login",
    register: "Register",
    partialStory: "Participate",
  },
};

export default {
  fr,
  en
};
