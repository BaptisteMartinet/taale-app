export type ForgotPasswordDefinition = {
  forgotPasswordForm: {
    title: string,
    subtitle: string,
    emailLabel: string,
    submit: string,
  },
  resetPasswordForm: {
    title: string,
    subtitle: string,
    newPasswordLabel: string,
    validationCodeLabel: string,
    submit: string,
  },
};

const fr: ForgotPasswordDefinition = {
  forgotPasswordForm: {
    title: "Réinitialisez votre mot de passe",
    subtitle: "Vous allez recevoir un code de validation par email.",
    emailLabel: "Email",
    submit: "Envoyer le code",
  },
  resetPasswordForm: {
    title: "Réinitialisez votre mot de passe",
    subtitle: "Veuillez renseigner un nouveau mot de passe.",
    newPasswordLabel: "Nouveau mot de passe",
    validationCodeLabel: "Code",
    submit: "Sauvegarder",
  },
};

const en: ForgotPasswordDefinition = {
  forgotPasswordForm: {
    title: "Reset your password",
    subtitle: "You'll receive a validation code by email.",
    emailLabel: "Email",
    submit: "Send verification code",
  },
  resetPasswordForm: {
    title: "Reset your password",
    subtitle: "Set your new password.",
    newPasswordLabel: "New password",
    validationCodeLabel: "Code",
    submit: "Save",
  },
};

export default {
  fr,
  en,
};
