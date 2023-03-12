interface SlideDefinition {
  title: string,
  description?: string,
}

export type OnboardingScreenDefinition = {
  slide1: SlideDefinition,
  slide2: SlideDefinition,
  slide3: SlideDefinition,
  slide4: SlideDefinition,
  slide5: SlideDefinition,
  slide6: SlideDefinition,
};

const fr: OnboardingScreenDefinition = {
  slide1: {
    title: "Bienvenue sur Taale",
    description: "Taale est une application d'écriture collaborative ou les utilisateurs participent à l'élaboration d'une immense fable comportant une infinité d'univers parralèlles.",
  },
  slide2: {
    title: "L'arbre",
    description: `On peux representer la Fable comme un gigantesque arbre inversé. La base sera toujours la phrase "Il était une fois, ", puis les utilisateurs construisent les branches au fil des paragraphes qu'ils écrivent.`,
  },
  slide3: {
    title: "Un cadre limité",
    description: "Pour pimenter la chose, les utilisateurs sont placés aléatoirement sur une branche de l'arbre et ne peuvent voir que quelques paragraphes au dessus d'eux. Le but étant de continuer l'histoire tout en gardant son sens.",
  },
  slide4: {
    title: "Deviens Taller",
    description: "À chaque fois tu écrit un nouveau paragraphe, tu débloque un univers des possibles. Tu te retrouvera certainement dans une des histoires publiées quotidiennement sur la page d'accueil !",
  },
  slide5: {
    title: "Vote !",
    description: "Si tu pense qu'une certaine phrase termine l'histoire, clique dessus pour voter la fin de la branche. Au contraire, si une phrase ne fait aucun sens ou comporte du contenu injurieux, tu peux la signaler.",
  },
  slide6: {
    title: "À toi de jouer",
  },
};

// TODO trads
const en: OnboardingScreenDefinition = {
  slide1: {
    title: "Bienvenue sur Taale",
    description: "Taale est une application d'écriture collaborative ou les utilisateurs participent à l'élaboration d'une immense fable comportant une infinité d'univers parralèlles.",
  },
  slide2: {
    title: "L'arbre",
    description: `On peux representer la Fable comme un gigantesque arbre inversé. La base sera toujours la phrase "Il était une fois, ", puis les utilisateurs construisent les branches au fil des paragraphes qu'ils écrivent.`,
  },
  slide3: {
    title: "Un cadre limité",
    description: "Pour pimenter la chose, les utilisateurs sont placés aléatoirement sur une branche de l'arbre et ne peuvent voir que quelques paragraphes au dessus d'eux. Le but étant de continuer l'histoire tout en gardant son sens.",
  },
  slide4: {
    title: "Deviens Taller",
    description: "À chaque fois tu écrit un nouveau paragraphe, tu débloque un univers des possibles. Tu te retrouvera certainement dans une des histoires publiées quotidiennement sur la page d'accueil !",
  },
  slide5: {
    title: "Vote !",
    description: "Si tu pense qu'une certaine phrase termine l'histoire, clique dessus pour voter la fin de la branche. Au contraire, si une phrase ne fait aucun sens ou comporte du contenu injurieux, tu peux la signaler.",
  },
  slide6: {
    title: "À toi de jouer",
  },
};

export default {
  fr,
  en,
};
