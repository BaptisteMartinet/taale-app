export type LibraryDefinition = {
  pageInfo: string,
  misc: {
    dateFormat: string,
  },
};

const fr: LibraryDefinition = {
  pageInfo: "Vous trouverez ici toutes les histoires auxquelles vous avez participé.",
  misc: {
    dateFormat: "dd/MM/yyyy HH:mm",
  },
};

const en: LibraryDefinition = {
  pageInfo: "You will find here every story you have participated in.",
  misc: {
    dateFormat: "dd/MM/yyyy hh:mm aaa",
  },
};

export default {
  fr,
  en,
};