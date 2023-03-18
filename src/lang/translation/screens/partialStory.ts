export type PartialStoryScreenDefinition = {
  write: string,
  writeSuccess: string,
}

const fr: PartialStoryScreenDefinition = {
  write: "Écrire",
  writeSuccess: "Enregistré avec succès",
};

const en: PartialStoryScreenDefinition = {
  write: "Write",
  writeSuccess: "Successfully saved",
};

export default {
  fr,
  en,
};
