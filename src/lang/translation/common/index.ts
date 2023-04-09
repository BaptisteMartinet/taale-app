import snackbar, { SnackbarDefinition } from './snackbar';
import app, { AppDefinition } from './app';
import sentencesList, { SentencesListDefinition } from './sentencesList';
import codeValidationModal, { type CodeValidationModalDefinition } from './codeValidationModal';

export type CommonDefinition = {
  snackbar: SnackbarDefinition,
  app: AppDefinition,
  sentencesList: SentencesListDefinition,
  codeValidationModal: CodeValidationModalDefinition,
};

const fr: CommonDefinition = {
  snackbar: snackbar.fr,
  app: app.fr,
  sentencesList: sentencesList.fr,
  codeValidationModal: codeValidationModal.fr,
};

const en: CommonDefinition = {
  snackbar: snackbar.en,
  app: app.en,
  sentencesList: sentencesList.en,
  codeValidationModal: codeValidationModal.en,
};

export default {
  fr,
  en,
};
