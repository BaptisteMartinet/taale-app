export type LoginScreenDefinition = {
  form: {
    headlineTitle: string,
    headlineDescription: string,
    email: string,
    password: string,
    submit: string,
    forgotPassword: string,
    register: string,
  },
};

const fr: LoginScreenDefinition = {
  form: {
    headlineTitle: 'Rebonjour!',
    headlineDescription: 'Connectez-vous à votre compte',
    email: 'Email',
    password: 'Mot de passe',
    submit: 'Se connecter',
    forgotPassword: 'Mot de passe oublié ?',
    register: "Je n'ai pas de compte",
  },
};

const en: LoginScreenDefinition = {
  form: {
    headlineTitle: 'Welcome back!',
    headlineDescription: 'Sign in to your account',
    email: 'Email',
    password: 'Password',
    submit: 'Sign in',
    forgotPassword: 'Forgot password?',
    register: "I don't have an account",
  },
};

export default {
  fr,
  en,
};
