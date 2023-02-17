import snackbar, { SnackbarDefinition } from './snackbar';
import app, { AppDefinition } from './app';

export type CommonDefinition = {
  snackbar: SnackbarDefinition,
  app: AppDefinition,
};

const fr: CommonDefinition = {
  snackbar: snackbar.fr,
  app: app.fr,
};

const en: CommonDefinition = {
  snackbar: snackbar.en,
  app: app.en,
};

export default {
  fr,
  en,
};
