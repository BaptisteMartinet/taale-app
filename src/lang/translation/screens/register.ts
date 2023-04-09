export type RegisterScreenDefinition = {
  form: {
    headlineTitle: string,
    headlineDescription: string,
    username: string,
    email: string,
    password: string,
    submit: string,
  },
};

const fr: RegisterScreenDefinition = {
  form: {
    headlineTitle: "Bienvenue sur Taale",
    headlineDescription: "Créer votre compte",
    username: "Nom d'utilisateur",
    email: "Email",
    password: "Mot de passe",
    submit: "Créer mon compte",
  },
};

const en: RegisterScreenDefinition = {
  form: {
    headlineTitle: "Welcome to Taale!",
    headlineDescription: "Create an account",
    username: "Username",
    email: "Email",
    password: "Password",
    submit: "Sign Up",
  },
};

export default {
  fr,
  en,
};
