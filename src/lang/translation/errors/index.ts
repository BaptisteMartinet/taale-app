export type ErrorsDefinition = {
  _Default: string,
  //Client errors
  InvalidLoginOrPassword: string,
  InvalidEmailFormat: string,
  EmailTaken: string,
  InvalidEmailValidationCode: string,
  InvalidUsernameLength: string,
  InvalidUsernameChar: string,
  UsernameTaken: string,
  InvalidSentenceLength: string,
  ResourceNotFound: string,
  SpamDetected: string,
  InsufficientPermission: string,
  InvalidArgument: string,
  SentenceAlreadyPartOfStory: string,
  // Server errors
};

const fr: ErrorsDefinition = {
  _Default: "Une erreur est survenue",
  //Client errors
  InvalidLoginOrPassword: "Nom d'utilisateur ou mot de passe invalide",
  InvalidEmailFormat: "Format d'email invalide",
  EmailTaken: "Adresse email déjà utilisée",
  InvalidEmailValidationCode: "Code de vérification d'email invalide",
  InvalidUsernameLength: "Nom d'utilisateur trop court/long",
  InvalidUsernameChar: "Le nom d'utilisateur contient un caractère invalide",
  UsernameTaken: "Nom d'utilisateur déjà utilisé",
  InvalidSentenceLength: "Taille de paragraphe invalide",
  ResourceNotFound: "Resource non trouvée",
  SpamDetected: "Spam détecté",
  InsufficientPermission: "Permissions insufisantes",
  InvalidArgument: "Argument invalide",
  SentenceAlreadyPartOfStory: "Le paragraphe fait déjà parti d'une histoire",
  // Server errors
} as const;

const en: ErrorsDefinition = {
  _Default: "An error has occured",
  //Client errors
  InvalidLoginOrPassword: "Invalid login or password",
  InvalidEmailFormat: "Invalid email format",
  EmailTaken: "Email already taken",
  InvalidEmailValidationCode: "Invalid email verification code",
  InvalidUsernameLength: "Username too short/long",
  InvalidUsernameChar: "Username contains an invalid character",
  UsernameTaken: "Username already taken",
  InvalidSentenceLength: "Invalid sentence length",
  ResourceNotFound: "Resource not found",
  SpamDetected: "Spam detected",
  InsufficientPermission: "Insufficient permission",
  InvalidArgument: "Invalid argument",
  SentenceAlreadyPartOfStory: "Sentence already part of a story",
  // Server errors
} as const;

export default {
  fr,
  en,
};
