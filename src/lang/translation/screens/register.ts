export type RegisterScreenDefinition = {
  form: {
    headlineTitle: string,
    headlineDescription: string,
    username: string,
    usernameHelper: string,
    email: string,
    password: string,
    submit: string,
    registerSuccess: string,
  },
};

const fr: RegisterScreenDefinition = {
  form: {
    headlineTitle: "Bienvenue sur Taale",
    headlineDescription: "Créer votre compte",
    username: "Nom d'utilisateur",
    usernameHelper: "Peut contenir lettres, chiffres et '_' (ex: John_Doe07)",
    email: "Email",
    password: "Mot de passe",
    submit: "Créer mon compte",
    registerSuccess: "Compte créé avec succès",
  },
};

const en: RegisterScreenDefinition = {
  form: {
    headlineTitle: "Welcome to Taale!",
    headlineDescription: "Create an account",
    username: "Username",
    usernameHelper: "Can contain letters, numbers and '_' (ex: John_Doe07)",
    email: "Email",
    password: "Password",
    submit: "Sign Up",
    registerSuccess: "Account successfully created",
  },
};

export default {
  fr,
  en,
};
