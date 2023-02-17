export type AppDefinition = {
  screens: {
    home: string,
    login: string,
    register: string,
  },
};

const fr: AppDefinition = {
  screens: {
    home: "Accueil",
    login: "Se connecter",
    register: "Créer un compte",
  },
};

const en: AppDefinition = {
  screens: {
    home: "Home",
    login: "Login",
    register: "Register",
  },
};

export default {
  fr,
  en
};
