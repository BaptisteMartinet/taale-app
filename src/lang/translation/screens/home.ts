export type HomeScreenDefinition = {
  participate: string,
  hero: {
    hello: string,
    guest: string,
  },
};

const fr: HomeScreenDefinition = {
  participate: "Participer",
  hero: {
    hello: "Bonjour,",
    guest: "Invité",
  },
};

const en: HomeScreenDefinition = {
  participate: "Participate",
  hero: {
    hello: "Hello,",
    guest: "Guest",
  },
};

export default {
  fr,
  en,
};
