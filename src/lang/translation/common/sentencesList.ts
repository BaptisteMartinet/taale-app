export type SentencesListDefinition = {
  report: string,
  reportSuccessfull: string,
  markCompleted: string,
  markCompletedSuccessfull: string,
  deletedUser: string,
  misc: {
    dateFormat: string,
  },
};

const fr: SentencesListDefinition = {
  report: 'Signaler',
  reportSuccessfull: 'Signalé avec succès',
  markCompleted: 'Voter pour terminer',
  markCompletedSuccessfull: 'Vote pris en compte',
  deletedUser: "Inconnu",
  misc: {
    dateFormat: 'dd/MM/yy HH:mm',
  },
};

const en: SentencesListDefinition = {
  report: 'Report',
  reportSuccessfull: 'Successfully reported',
  markCompleted: 'Mark completed',
  markCompletedSuccessfull: 'Vote registered',
  deletedUser: "Unknown",
  misc: {
    dateFormat: 'dd/MM/yy hh:mm aaa',
  },
};

export default {
  fr,
  en
};
