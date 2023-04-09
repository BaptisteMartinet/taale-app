export type CodeValidationModalDefinition = {
  title: string,
  subTitle: string,
  resendCode: string,
};

const fr: CodeValidationModalDefinition = {
  title: "Rendez-vous sur votre boite mail",
  subTitle: "Nous vous avons envoyé un code de vérification par email.",
  resendCode: "Renvoyer le code",
};

const en: CodeValidationModalDefinition = {
  title: "Check your email",
  subTitle: "We've sent you a verification code by email.",
  resendCode: "Resend code",
};

export default {
  fr,
  en,
};
