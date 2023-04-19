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
    description: "Taale est une application d'écriture collaborative ou les utilisateurs participent à l'élaboration d'une immense fable comportant une infinité d'univers paralèlles.",
  },
  slide2: {
    title: "L'arbre",
    description: `On peux representer la Fable comme un gigantesque arbre inversé. La base sera toujours la phrase "Il était une fois, " puis les utilisateurs construisent les branches au fil des paragraphes qu'ils écrivent.`,
  },
  slide3: {
    title: "Un cadre limité",
    description: "Pour pimenter la chose, les utilisateurs sont placés aléatoirement sur une branche et ne peuvent voir que quelques paragraphes au dessus d'eux. Le but étant de continuer l'histoire tout en gardant son sens.",
  },
  slide4: {
    title: "Deviens Taaler",
    description: "À chaque fois tu écrit un nouveau paragraphe, tu débloque un univers des possibles. Tu te retrouvera certainement dans une des histoires publiées quotidiennement sur la page d'accueil.",
  },
  slide5: {
    title: "Vote !",
    description: "Si tu pense qu'une certaine phrase termine l'histoire, clique dessus pour voter la fin de la branche. Au contraire, si une phrase ne fait aucun sens ou comporte du contenu injurieux, tu peux la signaler.",
  },
  slide6: {
    title: "À toi de jouer",
  },
};

const en: OnboardingScreenDefinition = {
  slide1: {
    title: "Welcome to Taale",
    description: "Taale is a collaborative writing application where users participate in the development of a massive fable containing an infinite number of parallel universes.",
  },
  slide2: {
    title: "The tree",
    description: `We can represent the Fable as a gigantic inverted tree. The base will always be the sentence 'Once upon a time, ' and then the users will build the branches as they write paragraphs.`,
  },
  slide3: {
    title: "Limited scope",
    description: "To add some spice, users are randomly placed on a branch and can only see a few paragraphs above them. The goal is to continue the story while keeping its meaning intact.",
  },
  slide4: {
    title: "Become a Taaler",
    description: "Every time you write a new paragraph, you unlock a universe of possibilities. You may find yourself in one of the stories featured daily on the homepage.",
  },
  slide5: {
    title: "Vote!",
    description: "If you think that a certain sentence ends the story, click on it to vote for the end of the branch. On the contrary, if a phrase doesn't make any sense or contains offensive content, you can report it.",
  },
  slide6: {
    title: "Your turn to play",
  },
};

export default {
  fr,
  en,
};
