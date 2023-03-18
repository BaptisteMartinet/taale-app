import {
  ReportSentence,
  MarkSentenceCompleted,
  CreateSentence,
 } from './api';

class SentenceStore {
  public report(sentenceId: number) {
    return ReportSentence({ sentenceId });
  }

  public markCompleted(sentenceId: number) {
    return MarkSentenceCompleted({ sentenceId });
  }

  public create = CreateSentence;
}

export default new SentenceStore();
