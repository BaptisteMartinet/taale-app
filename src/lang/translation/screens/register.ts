export type RegisterScreenDefinition = {
  form: {
    headlineTitle: string,
    headlineDescription: string,
    username: string,
    email: string,
    password: string,
    submit: string,
  },
  defaultError: string,
};

const fr: RegisterScreenDefinition = {
  form: {
    headlineTitle: 'Bienvenue sur Taale',
    headlineDescription: 'Créer votre compte',
    username: "Nom d'utilisateur",
    email: 'Email',
    password: 'Mot de passe',
    submit: 'Créer mon compte',
  },
  defaultError: 'Une erreur est servenue',
};

const en: RegisterScreenDefinition = {
  form: {
    headlineTitle: 'Welcome to Taale!',
    headlineDescription: 'Create an account',
    username: 'Username',
    email: 'Email',
    password: 'Password',
    submit: 'Sign Up',
  },
  defaultError: 'Something went wrong',
};

export default {
  fr,
  en,
};
