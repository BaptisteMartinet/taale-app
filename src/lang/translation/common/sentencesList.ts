export type SentencesListDefinition = {
  report: string,
  reportSuccessfull: string,
  markCompleted: string,
  markCompletedSuccessfull: string,
};

const fr: SentencesListDefinition = {
  report: 'Signaler',
  reportSuccessfull: 'Signalé avec succès',
  markCompleted: 'Voter pour terminer',
  markCompletedSuccessfull: 'Vote pris en compte',
};

const en: SentencesListDefinition = {
  report: 'Report',
  reportSuccessfull: 'Successfull report',
  markCompleted: 'Mark completed',
  markCompletedSuccessfull: 'Vote registered',
};

export default {
  fr,
  en
};
