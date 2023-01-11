import snackbar, { SnackbarDefinition } from './snackbar';

export type CommonDefinition = {
  snackbar: SnackbarDefinition,
};

const fr: CommonDefinition = {
  snackbar: snackbar.fr,
};

const en: CommonDefinition = {
  snackbar: snackbar.en,
};

export default {
  fr,
  en,
};
