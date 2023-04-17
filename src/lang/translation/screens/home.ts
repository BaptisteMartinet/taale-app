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
  dailyStory: {
    title: string,
    subtitle: string,
    error: string,
  },
  myLibrary: {
    title: string,
    subtitle: string,
  },
  settingsSheet: {
    title: string,
    actions: string,
    about: string,
    logout: string,
    logoutSuccess: string,
    dangerZone: string,
    deleteAccount: string,
  },
};

const fr: HomeScreenDefinition = {
  participate: "Participer",
  hero: {
    hello: "Bonjour,",
    guest: "Invité",
  },
  statistics: {
    title: "Taale en chiffres",
    stats: {
      users: "Utilisateurs",
      trees: "Arbres (Langues supportées)",
      stories: "Branches (Histoires crées)",
      sentences: "Feuilles (Paragraphes écrits)",
    },
    nullValue: "N/A",
  },
  dailyStory: {
    title: "L'histoire du jour",
    subtitle: "Une nouvelle histoire tous les jours à minuit",
    error: "Une erreur est survenue",
  },
  myLibrary: {
    title: "Bibliothèque",
    subtitle: "Retrouve toutes tes histoires",
  },
  settingsSheet: {
    title: "Paramètres",
    actions: "Actions",
    about: "À propos",
    logout: "Se déconnecter",
    logoutSuccess: "Déconnecté avec succès",
    dangerZone: "Zone de danger",
    deleteAccount: "Supprimer mon compte",
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
      trees: "Trees (Supported languages)",
      stories: "Branches (Stories)",
      sentences: "Leafs (Written paragraphs)",
    },
    nullValue: "N/A",
  },
  dailyStory: {
    title: "Today's story",
    subtitle: "A new story every day at midnight",
    error: "Something went wrong",
  },
  myLibrary: {
    title: "Library",
    subtitle: "Find all your stories",
  },
  settingsSheet: {
    title: "Settings",
    actions: "Actions",
    about: "About",
    logout: "Logout",
    logoutSuccess: "Successfully logged out",
    dangerZone: "Danger zone",
    deleteAccount: "Delete my account",
  },
};

export default {
  fr,
  en,
};
