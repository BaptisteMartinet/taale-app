export const EmailVerificationCodeLength = 6;
export const UsernameMinLength = 2;
export const UsernameMaxLength = 24;
export const UsernameValidationRegex = new RegExp(`^\\w{${UsernameMinLength},${UsernameMaxLength}}$`);
export const PasswordMinLength = 4;

export const SentenceTextMinLength = 3;
export const SentenceTextMaxLength = 180;

export const ResetPasswordCodeLength = 8;
