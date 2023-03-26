export type AppDefinition = {
  screens: {
    login: string,
    register: string,
    partialStory: string,
    storyViewer: string,
    library: string,
  },
};

const fr: AppDefinition = {
  screens: {
    login: "Se connecter",
    register: "Créer un compte",
    partialStory: "Participer",
    storyViewer: "Lecteur",
    library: "Bibliothèque",
  },
};

const en: AppDefinition = {
  screens: {
    login: "Login",
    register: "Register",
    partialStory: "Participate",
    storyViewer: "Reader",
    library: "Library",
  },
};

export default {
  fr,
  en
};
