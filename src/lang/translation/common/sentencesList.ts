export type SentencesListDefinition = {
  report: string,
  reportSuccessfull: string,
  markCompleted: string,
  markCompletedSuccessfull: string,
};

const fr: SentencesListDefinition = {
  report: 'Signaler',
  reportSuccessfull: 'Signalé avec succès',
  markCompleted: 'Voter pour terminer', // TODO texts
  markCompletedSuccessfull: 'Vote pris en compte',
};

const en: SentencesListDefinition = {
  report: 'Report',
  reportSuccessfull: 'Successfull report',
  markCompleted: 'Mark completed',
  markCompletedSuccessfull: 'Vote registered', // TODO trad
};

export default {
  fr,
  en
};
