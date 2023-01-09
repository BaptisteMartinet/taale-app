export type LoginScreenDefinition = {
  form: {
    email: string,
    password: string,
    submit: string,
  },
};

const fr: LoginScreenDefinition = {
  form: {
    email: 'Email',
    password: 'Mot de passe',
    submit: 'Se connecter',
  },
};

const en: LoginScreenDefinition = {
  form: {
    email: 'Email',
    password: 'Password',
    submit: 'Sign in',
  },
};

export default {
  fr,
  en,
};
