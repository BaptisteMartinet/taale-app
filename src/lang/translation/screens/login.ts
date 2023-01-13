export type LoginScreenDefinition = {
  form: {
    headlineTitle: string,
    headlineDescription: string,
    email: string,
    password: string,
    submit: string,
    forgotPassword: string,
  },
  defaultError: string,
};

const fr: LoginScreenDefinition = {
  form: {
    headlineTitle: 'Rebonjour!',
    headlineDescription: 'Connectez-vous à votre compte',
    email: 'Email',
    password: 'Mot de passe',
    submit: 'Se connecter',
    forgotPassword: 'Mot de passe oublié'
  },
  defaultError: 'Une erreur est servenue',
};

const en: LoginScreenDefinition = {
  form: {
    headlineTitle: 'Welcome back!',
    headlineDescription: 'Sign in to your account',
    email: 'Email',
    password: 'Password',
    submit: 'Sign in',
    forgotPassword: 'Forgot password?',
  },
  defaultError: 'Something went wrong',
};

export default {
  fr,
  en,
};
