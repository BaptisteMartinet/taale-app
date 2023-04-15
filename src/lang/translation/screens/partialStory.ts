export type PartialStoryScreenDefinition = {
  listInfoHeader: string,
  write: string,
}

const fr: PartialStoryScreenDefinition = {
  listInfoHeader: "Vous avez été placé aléatoirement sur une branche",
  write: "Écrire",
};

const en: PartialStoryScreenDefinition = {
  listInfoHeader: "You've been randomly placed on a branch",
  write: "Write",
};

export default {
  fr,
  en,
};
