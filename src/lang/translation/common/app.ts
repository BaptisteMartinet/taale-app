export type AppDefinition = {
  screens: {
    login: string,
    register: string,
    partialStory: string,
  },
};

const fr: AppDefinition = {
  screens: {
    login: "Se connecter",
    register: "Créer un compte",
    partialStory: "Participer",
  },
};

const en: AppDefinition = {
  screens: {
    login: "Login",
    register: "Register",
    partialStory: "Participate",
  },
};

export default {
  fr,
  en
};
