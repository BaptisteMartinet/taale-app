import snackbar, { SnackbarDefinition } from './snackbar';
import app, { AppDefinition } from './app';
import sentencesList, { SentencesListDefinition } from './sentencesList';

export type CommonDefinition = {
  snackbar: SnackbarDefinition,
  app: AppDefinition,
  sentencesList: SentencesListDefinition,
};

const fr: CommonDefinition = {
  snackbar: snackbar.fr,
  app: app.fr,
  sentencesList: sentencesList.fr,
};

const en: CommonDefinition = {
  snackbar: snackbar.en,
  app: app.en,
  sentencesList: sentencesList.en,
};

export default {
  fr,
  en,
};
