import { ReportSentence } from './api';

class SentenceStore {
  public async report(sentenceId: number) {
    await ReportSentence({ sentenceId });
  }
}

export default new SentenceStore();
