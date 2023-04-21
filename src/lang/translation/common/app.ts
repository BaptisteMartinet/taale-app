export type AppDefinition = {
  backTitle: string,
  screens: {
    login: string,
    register: string,
    forgotPassword: string,
    partialStory: string,
    storyViewer: string,
    library: string,
  },
};

const fr: AppDefinition = {
  backTitle: "Retour",
  screens: {
    login: "Se connecter",
    register: "Créer un compte",
    forgotPassword: "Mot de passe oublié",
    partialStory: "Participer",
    storyViewer: "Lecteur",
    library: "Bibliothèque",
  },
};

const en: AppDefinition = {
  backTitle: "Back",
  screens: {
    login: "Login",
    register: "Register",
    forgotPassword: "Forgot password",
    partialStory: "Participate",
    storyViewer: "Reader",
    library: "Library",
  },
};

export default {
  fr,
  en
};
