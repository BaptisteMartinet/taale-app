export type StoryViewerDefinition = {
  completedTitle: string,
  dateFormat: string,
};

const fr: StoryViewerDefinition = {
  completedTitle: "Complétée le",
  dateFormat: 'dd/MM/yy à HH:mm',
};

const en: StoryViewerDefinition = {
  completedTitle: "Completed the",
  dateFormat: 'dd/MM/yy at hh:mm aaa',
};

export default {
  fr,
  en,
};
