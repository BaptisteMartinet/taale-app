export type ErrorsDefinition = {
  _Default: string,
  //Client errors
  InvalidPassword: string,
  EmailTaken: string,
  UsernameTaken: string,
  ResourceNotFound: string,
  SpamDetected: string,
  InsufficientPermission: string,

  // Server errors
};

const fr: ErrorsDefinition = {
  _Default: 'Une erreur est survenue',
  //Client errors
  InvalidPassword: 'Mot de passe invalide',
  EmailTaken: 'Adresse email déjà utilisé',
  UsernameTaken: "Nom d'utilisateur déjà utilisé",
  ResourceNotFound: 'Resource non trouvée',
  SpamDetected: 'Spam détecté',
  InsufficientPermission: 'Permissions insufisantes',

  // Server errors
} as const;

const en: ErrorsDefinition = {
  _Default: 'An error has occured',
  //Client errors
  InvalidPassword: 'Invalid password',
  EmailTaken: 'Email already taken',
  UsernameTaken: "Username already taken",
  ResourceNotFound: 'Resource not found',
  SpamDetected: 'Spam detected',
  InsufficientPermission: 'Insufficient permission',

  // Server errors
} as const;

export default {
  fr,
  en,
};
