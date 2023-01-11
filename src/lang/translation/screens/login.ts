export type LoginScreenDefinition = {
  form: {
    email: string,
    password: string,
    submit: string,
  },
  defaultError: string,
};

const fr: LoginScreenDefinition = {
  form: {
    email: 'Email',
    password: 'Mot de passe',
    submit: 'Se connecter',
  },
  defaultError: 'Une erreur est servenue',
};

const en: LoginScreenDefinition = {
  form: {
    email: 'Email',
    password: 'Password',
    submit: 'Sign in',
  },
  defaultError: 'Something went wrong',
};

export default {
  fr,
  en,
};
