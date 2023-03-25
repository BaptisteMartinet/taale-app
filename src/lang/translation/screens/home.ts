export type HomeScreenDefinition = {
  participate: string,
  hero: {
    hello: string,
    guest: string,
  },
  statistics: {
    title: string,
    stats: {
      users: string,
      trees: string,
      stories: string,
      sentences: string,
    },
    nullValue: string,
  },
};

const fr: HomeScreenDefinition = {
  participate: "Participer",
  hero: {
    hello: "Bonjour,",
    guest: "Invité",
  },
  statistics: {
    title: "Statistiques",
    stats: {
      users: "Utilisateurs",
      trees: "Arbres",
      stories: "Branches (Histoires crées)",
      sentences: "Feuilles (Paragraphes écrits)",
    },
    nullValue: "N/A",
  },
};

const en: HomeScreenDefinition = {
  participate: "Participate",
  hero: {
    hello: "Hello,",
    guest: "Guest",
  },
  statistics: {
    title: "Statistics",
    stats: {
      users: "Users",
      trees: "Trees",
      stories: "Branches (Stories)",
      sentences: "Leafs (Written paragraphs)",
    },
    nullValue: "N/A",
  },
};

export default {
  fr,
  en,
};
