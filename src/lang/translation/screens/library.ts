export type LibraryDefinition = {
  pageInfo: string,
  emptyLibrary: string,
  misc: {
    dateFormat: string,
  },
};

const fr: LibraryDefinition = {
  pageInfo: "Vous trouverez ici toutes les histoires auxquelles vous avez participé.\nVous comptabilisez {{sentencesCount}} participation(s).",
  emptyLibrary: "Wow, tellement vide",
  misc: {
    dateFormat: "dd/MM/yyyy HH:mm",
  },
};

const en: LibraryDefinition = {
  pageInfo: "You'll find here every story you've participated in.\nYou've participated {{sentencesCount}} time(s).",
  emptyLibrary: "Wow, such empty",
  misc: {
    dateFormat: "dd/MM/yyyy hh:mm aaa",
  },
};

export default {
  fr,
  en,
};
