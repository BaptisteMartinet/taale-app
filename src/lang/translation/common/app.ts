export type AppDefinition = {
  screens: {
    home: string,
    login: string,
    register: string,
  },
};

const fr: AppDefinition = {
  screens: {
    home: "L'histoire du jour",
    login: "Se connecter",
    register: "Créer un compte",
  },
};

const en: AppDefinition = {
  screens: {
    home: "Today's story",
    login: "Login",
    register: "Register",
  },
};

export default {
  fr,
  en
};
