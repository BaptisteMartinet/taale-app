import { ReportSentence, MarkSentenceCompleted } from './api';

class SentenceStore {
  public report(sentenceId: number) {
    return ReportSentence({ sentenceId });
  }

  public markCompleted(sentenceId: number) {
    return MarkSentenceCompleted({ sentenceId });
  }
}

export default new SentenceStore();
