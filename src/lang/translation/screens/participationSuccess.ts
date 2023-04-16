export type ParticipationSuccessScreenDefinition = {
  title: string,
  partialStoryLink: string,
  homeLink: string,
};

const fr: ParticipationSuccessScreenDefinition = {
  title: "Enregistré avec succès",
  partialStoryLink: "C'est reparti",
  homeLink: "Accueil",
};

const en: ParticipationSuccessScreenDefinition = {
  title: "Successfully saved",
  partialStoryLink: "Let's do it again",
  homeLink: "Home",
};

export default {
  fr,
  en,
};
