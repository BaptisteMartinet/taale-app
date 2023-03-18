export type ParticipationSuccessScreenDefinition = {
  title: string,
  partialStoryLink: string,
  homeLink: string,
};

const fr: ParticipationSuccessScreenDefinition = {
  title: "Merci pour votre paricipation !",
  partialStoryLink: "C'est repartit",
  homeLink: "Accueil",
};

const en: ParticipationSuccessScreenDefinition = {
  title: "Thanks for you participation !",
  partialStoryLink: "Let's go again",
  homeLink: "Home",
};

export default {
  fr,
  en,
};
